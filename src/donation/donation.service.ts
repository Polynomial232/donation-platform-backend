import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { XenditService } from '../xendit/xendit.service';
import { CreateDonationDto, DonationStatus } from './dto/donation.dto';
import { v4 as uuidv4 } from 'uuid';
import { AppGateway } from '../gateway/gateway.service';
import { GoalService } from '../goal/goal.service';

@Injectable()
export class DonationService {
    constructor(
        private prisma: PrismaService,
        private xendit: XenditService,
        private gateway: AppGateway,
        private goalService: GoalService,
    ) { }

    async createDonation(dto: CreateDonationDto) {
        const recipient = await this.prisma.user.findUnique({
            where: { id: dto.recipient_id },
        });

        if (!recipient) {
            throw new NotFoundException('Recipient not found');
        }

        const external_id = `don-${uuidv4()}`;

        // Create donation record in PENDING state
        const donation = await this.prisma.donation.create({
            data: {
                external_id,
                amount: dto.amount,
                donor_name: dto.donor_name,
                message: dto.message,
                recipient_id: dto.recipient_id,
                media_url: dto.media_url,
                media_type: dto.media_type,
                status: DonationStatus.PENDING,
            },
        });

        // Create Xendit invoice
        const invoice = await this.xendit.createInvoice({
            externalId: external_id,
            amount: dto.amount,
            description: `Donation to ${recipient.display_name} from ${dto.donor_name}`,
        });

        // Update donation with payment URL
        return this.prisma.donation.update({
            where: { id: donation.id },
            data: {
                payment_url: (invoice as any).invoiceUrl,
            },
        });
    }

    async handleWebhook(data: any) {
        const { external_id, status } = data;

        let donationStatus: DonationStatus;
        if (status === 'PAID' || status === 'SETTLED') {
            donationStatus = DonationStatus.SUCCESS;
        } else if (status === 'EXPIRED') {
            donationStatus = DonationStatus.EXPIRED;
        } else {
            return { message: 'Ignored status' };
        }

        const donation = await this.prisma.donation.update({
            where: { external_id: external_id },
            data: { status: donationStatus },
        });

        if (donationStatus === DonationStatus.SUCCESS) {
            // Trigger alerts and goal updates
            console.log(`Donation ${donation.id} successful! Triggering alerts...`);

            // Send WebSocket event
            this.gateway.sendNewDonation(donation.recipient_id, {
                donor_name: donation.donor_name,
                amount: Number(donation.amount),
                message: donation.message,
                media_url: donation.media_url,
                media_type: donation.media_type,
            });

            // Update goal
            const updatedGoal = await this.goalService.incrementProgress(
                donation.recipient_id,
                Number(donation.amount),
            );

            if (updatedGoal) {
                this.gateway.sendGoalUpdate(donation.recipient_id, {
                    goalId: updatedGoal.id,
                    current_amount: Number(updatedGoal.current_amount),
                    percentage: (Number(updatedGoal.current_amount) / Number(updatedGoal.target_amount)) * 100,
                });
            }
        }

        return donation;
    }

    async getHistory(userId: string, query: any) {
        const { page = 1, limit = 10, status } = query;
        const skip = (page - 1) * limit;

        const [data, total] = await Promise.all([
            this.prisma.donation.findMany({
                where: {
                    recipient_id: userId,
                    status: status as any,
                },
                orderBy: { created_at: 'desc' },
                skip: Number(skip),
                take: Number(limit),
            }),
            this.prisma.donation.count({
                where: {
                    recipient_id: userId,
                    status: status as any,
                },
            }),
        ]);

        return {
            data,
            meta: {
                total,
                page: Number(page),
                lastPage: Math.ceil(total / limit),
            },
        };
    }
}

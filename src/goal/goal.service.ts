import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GoalService {
    constructor(private prisma: PrismaService) { }

    async createGoal(creatorId: string, data: any) {
        return this.prisma.goal.create({
            data: {
                ...data,
                creatorId,
            },
        });
    }

    async getGoals(creatorId: string) {
        return this.prisma.goal.findMany({
            where: { creatorId },
            include: {
                _count: {
                    select: { donations: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
    }

    async getActiveGoal(creatorId: string) {
        return this.prisma.goal.findFirst({
            where: { creatorId, isActive: true },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { donations: true }
                }
            }
        });
    }

    async updateGoal(id: string, creatorId: string, data: any) {
        return this.prisma.goal.updateMany({
            where: { id, creatorId },
            data,
        });
    }

    async incrementProgress(creatorId: string, amount: number, donationId?: string) {
        const activeGoal = await this.getActiveGoal(creatorId);
        if (!activeGoal) return null;

        return this.prisma.goal.update({
            where: { id: activeGoal.id },
            data: {
                currentAmount: {
                    increment: amount,
                },
                donations: donationId ? {
                    connect: { id: donationId }
                } : undefined
            },
            include: {
                _count: {
                    select: { donations: true }
                }
            }
        });
    }
}

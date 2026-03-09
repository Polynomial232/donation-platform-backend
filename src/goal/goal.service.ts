import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GoalService {
    constructor(private prisma: PrismaService) { }

    private formatGoal(g: any) {
        return {
            id: g.id,
            title: g.title,
            target_amount: Number(g.targetAmount),
            current_amount: Number(g.currentAmount),
            start_date: g.startDate,
            end_date: g.endDate,
            is_active: g.isActive,
            participants_count: g._count?.donations || 0,
            percentage: (Number(g.currentAmount) / Number(g.targetAmount)) * 100,
        };
    }

    async createGoal(creatorId: string, data: any) {
        const goal = await this.prisma.goal.create({
            data: {
                ...data,
                creatorId,
            },
        });
        return this.formatGoal(goal);
    }

    async getGoals(creatorId: string) {
        const goals = await this.prisma.goal.findMany({
            where: { creatorId },
            include: {
                _count: {
                    select: { donations: true }
                }
            },
            orderBy: { createdAt: 'desc' }
        });
        return goals.map(g => this.formatGoal(g));
    }

    async getActiveGoal(creatorId: string) {
        const goal = await this.prisma.goal.findFirst({
            where: { creatorId, isActive: true },
            orderBy: { createdAt: 'desc' },
            include: {
                _count: {
                    select: { donations: true }
                }
            }
        });
        return goal ? this.formatGoal(goal) : null;
    }

    async updateGoal(id: string, creatorId: string, data: any) {
        return this.prisma.goal.updateMany({
            where: { id, creatorId },
            data,
        });
    }

    async incrementProgress(creatorId: string, amount: number, donationId?: string) {
        const activeGoal = await this.prisma.goal.findFirst({
            where: { creatorId, isActive: true },
            orderBy: { createdAt: 'desc' },
        });
        if (!activeGoal) return null;

        const updated = await this.prisma.goal.update({
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

        return this.formatGoal(updated);
    }
}

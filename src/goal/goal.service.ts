import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GoalService {
    constructor(private prisma: PrismaService) { }

    async createGoal(userId: string, data: any) {
        return this.prisma.goal.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    async getGoals(userId: string) {
        return this.prisma.goal.findMany({
            where: { userId },
        });
    }

    async getActiveGoal(userId: string) {
        return this.prisma.goal.findFirst({
            where: { userId, isActive: true },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateGoal(id: string, userId: string, data: any) {
        return this.prisma.goal.updateMany({
            where: { id, userId },
            data,
        });
    }

    async incrementProgress(userId: string, amount: number) {
        const activeGoal = await this.getActiveGoal(userId);
        if (!activeGoal) return null;

        return this.prisma.goal.update({
            where: { id: activeGoal.id },
            data: {
                currentAmount: {
                    increment: amount,
                },
            },
        });
    }
}

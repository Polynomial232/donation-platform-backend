import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class GoalService {
    constructor(private prisma: PrismaService) { }

    async createGoal(user_id: string, data: any) {
        return this.prisma.goal.create({
            data: {
                ...data,
                user_id,
            },
        });
    }

    async getGoals(user_id: string) {
        return this.prisma.goal.findMany({
            where: { user_id },
        });
    }

    async getActiveGoal(user_id: string) {
        return this.prisma.goal.findFirst({
            where: { user_id, is_active: true },
            orderBy: { created_at: 'desc' },
        });
    }

    async updateGoal(id: string, user_id: string, data: any) {
        return this.prisma.goal.updateMany({
            where: { id, user_id },
            data,
        });
    }

    async incrementProgress(user_id: string, amount: number) {
        const activeGoal = await this.getActiveGoal(user_id);
        if (!activeGoal) return null;

        return this.prisma.goal.update({
            where: { id: activeGoal.id },
            data: {
                current_amount: {
                    increment: amount,
                },
            },
        });
    }
}

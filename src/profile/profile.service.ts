import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) { }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: userId,
            },
            include: {
                profile: true,
            },
        });

        if (!user) return null;
        const { password, ...result } = user;
        return result;
    }

    async updateSettings(userId: string, data: any) {
        const { display_name, bio, notification_settings, social_links } = data;

        return this.prisma.user.update({
            where: {
                id: userId,
            },
            data: {
                display_name,
                profile: {
                    update: {
                        bio,
                        notification_settings,
                        social_links,
                    },
                },
            },
            include: {
                profile: true,
            },
        });
    }
}

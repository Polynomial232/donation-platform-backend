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
                creator: true,
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
                displayName: display_name,
                creator: {
                    update: {
                        bio,
                        notificationSettings: notification_settings,
                        socialLinks: social_links,
                    },
                },
            },
            include: {
                creator: true,
            },
        });
    }
}

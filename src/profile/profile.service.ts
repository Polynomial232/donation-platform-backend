import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) { }

    async getMe(userId: string) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: { creator: true },
        });

        if (!user) return null;

        return {
            id: user.id,
            email: user.email,
            username: user.username,
            display_name: user.displayName,
            avatar_url: user.avatarUrl,
            creator: user.creator ? {
                id: user.creator.id,
                username: user.creator.username,
                display_name: user.creator.displayName,
                avatar_url: user.creator.avatarUrl,
                banner_url: user.creator.bannerUrl,
                bio: user.creator.bio,
                is_verified: user.creator.isVerified,
                is_live: user.creator.isLive,
            } : null,
        };
    }

    async updateSettings(userId: string, data: any) {
        const { display_name, bio, notification_settings, social_links } = data;

        const updated = await this.prisma.user.update({
            where: { id: userId },
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
            include: { creator: true },
        });

        return {
            id: updated.id,
            email: updated.email,
            username: updated.username,
            display_name: updated.displayName,
            avatar_url: updated.avatarUrl,
            creator: updated.creator ? {
                id: updated.creator.id,
                username: updated.creator.username,
                display_name: updated.creator.displayName,
                avatar_url: updated.creator.avatarUrl,
                banner_url: updated.creator.bannerUrl,
                bio: updated.creator.bio,
                is_verified: updated.creator.isVerified,
                is_live: updated.creator.isLive,
            } : null,
        };
    }
}

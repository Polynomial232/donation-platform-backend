import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchCreatorsDto, ListCreatorsDto } from './dto/discovery.dto';

@Injectable()
export class DiscoveryService {
  constructor(private prisma: PrismaService) { }

  async getLandingData(userId?: string) {
    const topTrendingCreatorsRaw = await this.prisma.creator.findMany({
      take: 3,
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        followers: userId
          ? {
            where: { userId: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            receivedDonations: {
              where: {
                status: 'SUCCESS',
              },
            },
          },
        },
      },
      orderBy: {
        receivedDonations: {
          _count: 'desc',
        },
      },
    });

    const topTrendingCreators = topTrendingCreatorsRaw.map((creator) => {
      const { followers, _count, ...rest } = creator as any;
      return {
        ...rest,
        isFollowing: !!followers?.length,
      };
    });

    const siteSettings = await this.prisma.siteSetting.findMany();
    const settingsMap = siteSettings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as any);

    return {
      trendingCreators: topTrendingCreators,
      hero: settingsMap['LANDING_HERO'] || {
        imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987', // Raccoon placeholder
        title: 'Jembatan Dukungan Kreator',
        subtitle: 'Platform donasi paling simpel, transparan, dan penuh kasih untuk kreator favoritmu.',
        searchPlaceholder: 'Cari kreator favoritmu...',
      },
      features: settingsMap['LANDING_FEATURES'] || {
        title: 'Kenapa DukuNasia?',
        items: [
          {
            icon: 'Lightning',
            title: 'Cepat & Instan',
            description: 'Dukungan sampai dalam hitungan detik.',
          },
          {
            icon: 'Shield',
            title: '100% Aman',
            description: 'Keamanan berlapis untuk tiap transaksi.',
          },
        ],
      },
      demo: settingsMap['LANDING_DEMO'] || {
        tabs: [
          { label: 'Hadiah', icon: 'Gift' },
          { label: 'Sound', icon: 'Volume2' },
          { label: 'Lelang', icon: 'Gavel' },
        ],
        placeholderName: 'Nama samaran',
        placeholderMessage: 'Tulis dukungan hangatmu...',
      },
      siteSetting: {
        navbar: settingsMap['NAVBAR'] || {
          logoText: 'DukuNasia',
          links: [
            { label: 'Explore', url: '/explore' },
            { label: 'Following', url: '/following' },
            { label: 'Activity', url: '/activity' },
          ],
        },
        supportedBy: settingsMap['SUPPORTED_BY'] || {
          title: 'SUPPORTED BY',
          partners: [
            { name: 'GOPAY' },
            { name: 'OVO' },
            { name: 'DANA' },
            { name: 'QRIS' },
          ],
        },
        footer: settingsMap['FOOTER'] || {
          links: [
            { label: 'BANTUAN', url: '/bantuan' },
            { label: 'STATUS', url: '/status' },
            { label: 'SYARAT', url: '/syarat' },
            { label: 'PRIVASI', url: '/privasi' },
          ],
          copyright: '© 2024 DUKUNASIA • SPREADING LOVE 💜',
        },
      },
    };
  }

  async getExploreData(userId?: string) {
    const categoriesData = await this.prisma.category.findMany({
      select: { name: true },
    });

    const trendingCreatorsRaw = await this.prisma.creator.findMany({
      take: 10,
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        bannerUrl: true,
        bio: true,
        isVerified: true,
        isLive: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { userId: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            receivedDonations: {
              where: { status: 'SUCCESS' },
            },
          },
        },
      },
      orderBy: {
        receivedDonations: {
          _count: 'desc',
        },
      },
    });

    const recommendedCreatorsRaw = await this.prisma.creator.findMany({
      take: 10,
      where: {
        NOT: {
          id: { in: trendingCreatorsRaw.map((c) => c.id) },
        },
      },
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        bannerUrl: true,
        bio: true,
        isVerified: true,
        isLive: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { userId: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            receivedDonations: {
              where: { status: 'SUCCESS' },
            },
          },
        },
      },
    });

    const mapCreator = (creator: any) => {
      const { _count, followers, categories, ...rest } = creator;
      return {
        ...rest,
        isFollowing: !!followers?.length,
        isHot: (_count?.receivedDonations || 0) >= 2, // HOT if 2+ successful donations (for demo)
        categories: categories.map((c: any) => c.name),
      };
    };

    return {
      categories: ['All Creators', ...categoriesData.map((c) => c.name)],
      trending: trendingCreatorsRaw.map(mapCreator),
      recommended: recommendedCreatorsRaw.map(mapCreator),
    };
  }

  async listCreators(dto: ListCreatorsDto, userId?: string) {
    const { search, category, page = 1 } = dto;
    const limit = Math.min(dto.limit || 25, 25);
    const skip = (page - 1) * limit;

    const where: any = {};

    if (search) {
      where.OR = [
        { username: { contains: search, mode: 'insensitive' } },
        { displayName: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (category && category !== 'All Creators') {
      where.categories = {
        some: {
          name: category,
        },
      };
    }

    const [total, creatorsRaw] = await Promise.all([
      this.prisma.creator.count({ where }),
      this.prisma.creator.findMany({
        where,
        take: limit,
        skip,
        select: {
          id: true,
          username: true,
          displayName: true,
          avatarUrl: true,
          bannerUrl: true,
          bio: true,
          isVerified: true,
          isLive: true,
          categories: {
            select: { name: true },
          },
          followers: userId
            ? {
              where: { userId: userId },
              select: { id: true },
            }
            : false,
          _count: {
            select: {
              receivedDonations: {
                where: { status: 'SUCCESS' },
              },
            },
          },
        },
      }),
    ]);

    const data = creatorsRaw.map((creator: any) => {
      const { _count, followers, categories, ...rest } = creator;
      return {
        ...rest,
        isFollowing: !!followers?.length,
        isHot: (_count?.receivedDonations || 0) >= 2,
        categories: categories?.map((c: any) => c.name) || [],
      };
    });

    return {
      data,
      meta: {
        total,
        page,
        limit,
        lastPage: Math.ceil(total / limit),
      },
    };
  }

  async searchCreators(dto: SearchCreatorsDto, userId?: string) {
    const { search, category } = dto;

    const where: any = {};

    if (search) {
      where.OR = [
        { username: { contains: search, mode: 'insensitive' } },
        { displayName: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (category && category !== 'All Creators') {
      where.categories = {
        some: {
          name: category,
        },
      };
    }

    const creatorsRaw = await this.prisma.creator.findMany({
      where,
      take: 20,
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        bannerUrl: true,
        bio: true,
        isVerified: true,
        isLive: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { userId: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            receivedDonations: {
              where: { status: 'SUCCESS' },
            },
          },
        },
      },
    });

    return creatorsRaw.map((creator: any) => {
      const { _count, followers, categories, ...rest } = creator;
      return {
        ...rest,
        isFollowing: !!followers?.length,
        isHot: (_count?.receivedDonations || 0) >= 2,
        categories: categories?.map((c: any) => c.name) || [],
      };
    });
  }

  async getCreatorByUsername(username: string, userId?: string) {
    const creator = await this.prisma.creator.findUnique({
      where: { username },
      select: {
        id: true,
        username: true,
        displayName: true,
        avatarUrl: true,
        bannerUrl: true,
        bio: true,
        isVerified: true,
        isLive: true,
        followers: userId
          ? {
            where: { userId: userId },
            select: { id: true },
          }
          : false,
        user: {
          select: {
            profile: {
              select: {
                bio: true,
                socialLinks: true,
              },
            },
            goals: {
              where: { isActive: true },
              take: 1,
              orderBy: { createdAt: 'desc' },
              select: {
                title: true,
                currentAmount: true,
                targetAmount: true,
              },
            },
          },
        },
        sections: {
          where: { isEnabled: true },
          orderBy: { rowOrder: 'asc' },
        },
      },
    });

    if (!creator) {
      throw new Error('Creator not found');
    }

    const { user, followers, sections, ...rest } = creator;
    const goal = user.goals[0] || null;

    return {
      profile: {
        ...rest,
        description: user.profile?.bio || rest.bio,
        isFollowing: !!followers?.length,
        socials: user.profile?.socialLinks ? Object.entries(user.profile.socialLinks).map(([platform, url]) => ({ platform, url })) : [],
        goal: goal ? {
          title: goal.title,
          currentAmount: Number(goal.currentAmount),
          targetAmount: Number(goal.targetAmount),
        } : null,
      },
      sections: sections.map(section => ({
        id: section.id,
        type: section.type,
        title: section.title,
        isEnabled: section.isEnabled,
        data: section.data,
      })),
    };
  }
}

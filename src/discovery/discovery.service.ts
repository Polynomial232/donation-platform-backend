import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchCreatorsDto } from './dto/discovery.dto';

@Injectable()
export class DiscoveryService {
  constructor(private prisma: PrismaService) { }

  async getLandingData(userId?: string) {
    const topTrendingCreatorsRaw = await this.prisma.creator.findMany({
      take: 3,
      select: {
        id: true,
        username: true,
        display_name: true,
        avatar_url: true,
        followers: userId
          ? {
            where: { user_id: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            received_donations: {
              where: {
                status: 'SUCCESS',
              },
            },
          },
        },
      },
      orderBy: {
        received_donations: {
          _count: 'desc',
        },
      },
    });

    const topTrendingCreators = topTrendingCreatorsRaw.map((creator) => {
      const { followers, _count, ...rest } = creator as any;
      return {
        ...rest,
        is_following: !!followers?.length,
      };
    });

    const siteSettings = await this.prisma.siteSetting.findMany();
    const settingsMap = siteSettings.reduce((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {} as any);

    return {
      trendingCreators: topTrendingCreators,
      settings: {
        hero: settingsMap['landing_hero'] || null,
        features: settingsMap['landing_features'] || [],
        supportedBy: settingsMap['landing_supported_by'] || [],
        footer: settingsMap['footer'] || null,
      },
    };
  }

  async getExploreData(userId?: string) {
    const categoriesData = await this.prisma.category.findMany({
      select: { name: true },
    });

    const trendingCreatorsRaw = await this.prisma.creator.findMany({
      take: 3,
      select: {
        id: true,
        username: true,
        display_name: true,
        avatar_url: true,
        banner_url: true,
        bio: true,
        is_verified: true,
        is_live: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { user_id: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            received_donations: {
              where: { status: 'SUCCESS' },
            },
          },
        },
      },
      orderBy: {
        received_donations: {
          _count: 'desc',
        },
      },
    });

    const recommendedCreatorsRaw = await this.prisma.creator.findMany({
      take: 4,
      where: {
        NOT: {
          id: { in: trendingCreatorsRaw.map((c) => c.id) },
        },
      },
      select: {
        id: true,
        username: true,
        display_name: true,
        avatar_url: true,
        banner_url: true,
        bio: true,
        is_verified: true,
        is_live: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { user_id: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            received_donations: {
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
        is_following: !!followers?.length,
        is_hot: (_count?.received_donations || 0) >= 2, // HOT if 2+ successful donations (for demo)
        categories: categories.map((c: any) => c.name),
      };
    };

    return {
      categories: ['All Creators', ...categoriesData.map((c) => c.name)],
      trending: trendingCreatorsRaw.map(mapCreator),
      recommended: recommendedCreatorsRaw.map(mapCreator),
    };
  }

  async searchCreators(dto: SearchCreatorsDto, userId?: string) {
    const { searchQuery, category } = dto;

    const where: any = {};

    if (searchQuery) {
      where.OR = [
        { username: { contains: searchQuery, mode: 'insensitive' } },
        { display_name: { contains: searchQuery, mode: 'insensitive' } },
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
        display_name: true,
        avatar_url: true,
        banner_url: true,
        bio: true,
        is_verified: true,
        is_live: true,
        categories: {
          select: { name: true },
        },
        followers: userId
          ? {
            where: { user_id: userId },
            select: { id: true },
          }
          : false,
        _count: {
          select: {
            received_donations: {
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
        is_following: !!followers?.length,
        is_hot: (_count?.received_donations || 0) >= 2,
        categories: categories?.map((c: any) => c.name) || [],
      };
    });
  }
}

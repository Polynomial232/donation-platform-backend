import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SearchCreatorsDto, ListCreatorsDto } from './dto/discovery.dto';

@Injectable()
export class DiscoveryService {
  constructor(private prisma: PrismaService) { }

  async getLandingData(userId?: string) {
    const rawTrendingCreators = await this.prisma.creator.findMany({
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
              where: { status: 'SUCCESS' },
            },
          },
        },
      },
      orderBy: {
        receivedDonations: { _count: 'desc' },
      },
    });

    const trendingCreators = rawTrendingCreators.map((creator: any) => ({
      id: creator.id,
      username: creator.username,
      display_name: creator.displayName,
      avatar_url: creator.avatarUrl,
      is_following: !!creator.followers?.length,
    }));

    const rawSiteSettings = await this.prisma.siteSetting.findMany();
    const settingsMap = rawSiteSettings.reduce(
      (acc, setting) => ({ ...acc, [setting.key]: setting.value }),
      {} as Record<string, any>
    );

    const fallbackHero = {
      image_url: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
      title: 'Jembatan Dukungan Kreator',
      subtitle: 'Platform donasi paling simpel, transparan, dan penuh kasih untuk kreator favoritmu.',
      search_placeholder: 'Cari kreator favoritmu...',
    };

    const fallbackFeatures = {
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
    };

    const fallbackDemo = {
      tabs: [
        { label: 'Hadiah', icon: 'Gift' },
        { label: 'Sound', icon: 'Volume2' },
        { label: 'Lelang', icon: 'Gavel' },
      ],
      placeholder_name: 'Nama samaran',
      placeholder_message: 'Tulis dukungan hangatmu...',
    };

    const fallbackNavbar = {
      logo_text: 'DukuNasia',
      links: [
        { label: 'Explore', url: '/explore' },
        { label: 'Following', url: '/following' },
        { label: 'Activity', url: '/activity' },
      ],
    };

    const fallbackSupportedBy = {
      title: 'SUPPORTED BY',
      partners: [{ name: 'GOPAY' }, { name: 'OVO' }, { name: 'DANA' }, { name: 'QRIS' }],
    };

    const fallbackFooter = {
      links: [
        { label: 'BANTUAN', url: '/bantuan' },
        { label: 'STATUS', url: '/status' },
        { label: 'SYARAT', url: '/syarat' },
        { label: 'PRIVASI', url: '/privasi' },
      ],
      copyright: '© 2024 DUKUNASIA • SPREADING LOVE 💜',
    };

    const fallbackAuthSettings = {
      is_google_login_enabled: true,
    };

    return {
      trending_creators: trendingCreators,
      hero: settingsMap['LANDING_HERO'] ?? fallbackHero,
      features: settingsMap['LANDING_FEATURES'] ?? fallbackFeatures,
      demo: settingsMap['LANDING_DEMO'] ?? fallbackDemo,
      auth_settings: settingsMap['AUTH_SETTINGS'] ?? fallbackAuthSettings,
      site_setting: {
        navbar: settingsMap['NAVBAR'] ?? fallbackNavbar,
        supported_by: settingsMap['SUPPORTED_BY'] ?? fallbackSupportedBy,
        footer: settingsMap['FOOTER'] ?? fallbackFooter,
      },
    };
  }

  async getExploreData(userId?: string) {
    const rawCategories = await this.prisma.category.findMany({
      select: { name: true },
    });

    const queryOptions = {
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
          select: { category: { select: { name: true } } },
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
              where: { status: 'SUCCESS' as const },
            },
          },
        },
      },
    };

    const rawTrendingCreators = await this.prisma.creator.findMany({
      ...queryOptions,
      orderBy: {
        receivedDonations: { _count: 'desc' },
      },
    });

    const rawRecommendedCreators = await this.prisma.creator.findMany({
      ...queryOptions,
      where: {
        NOT: { id: { in: rawTrendingCreators.map((c) => c.id) } },
      },
    });

    const formatCreator = (creator: any) => ({
      id: creator.id,
      username: creator.username,
      display_name: creator.displayName,
      avatar_url: creator.avatarUrl,
      banner_url: creator.bannerUrl,
      bio: creator.bio,
      is_verified: creator.isVerified,
      is_live: creator.isLive,
      is_following: !!creator.followers?.length,
      is_hot: (creator._count?.receivedDonations || 0) >= 2,
      categories: creator.categories.map((c: any) => c.category.name),
    });

    return {
      categories: ['All Creators', ...rawCategories.map((c) => c.name)],
      trending_creators: rawTrendingCreators.map(formatCreator),
      recommended_creators: rawRecommendedCreators.map(formatCreator),
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
        some: { category: { name: category } },
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
            select: { category: { select: { name: true } } },
          },
          followers: userId
            ? {
                where: { userId: userId },
                select: { id: true },
              }
            : false,
          _count: {
            select: {
              receivedDonations: { where: { status: 'SUCCESS' } },
            },
          },
        },
      }),
    ]);

    const data = creatorsRaw.map((creator: any) => ({
      id: creator.id,
      username: creator.username,
      display_name: creator.displayName,
      avatar_url: creator.avatarUrl,
      banner_url: creator.bannerUrl,
      bio: creator.bio,
      is_verified: creator.isVerified,
      is_live: creator.isLive,
      is_following: !!creator.followers?.length,
      is_hot: (creator._count?.receivedDonations || 0) >= 2,
      categories: creator.categories?.map((c: any) => c.category.name) || [],
    }));

    return {
      data,
      metadata: {
        total,
        page,
        limit,
        last_page: Math.ceil(total / limit),
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
        some: { category: { name: category } },
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
          select: { category: { select: { name: true } } },
        },
        followers: userId
          ? {
              where: { userId: userId },
              select: { id: true },
            }
          : false,
        _count: {
          select: {
            receivedDonations: { where: { status: 'SUCCESS' } },
          },
        },
      },
    });

    return creatorsRaw.map((creator: any) => ({
      id: creator.id,
      username: creator.username,
      display_name: creator.displayName,
      avatar_url: creator.avatarUrl,
      banner_url: creator.bannerUrl,
      bio: creator.bio,
      is_verified: creator.isVerified,
      is_live: creator.isLive,
      is_following: !!creator.followers?.length,
      is_hot: (creator._count?.receivedDonations || 0) >= 2,
      categories: creator.categories?.map((c: any) => c.category.name) || [],
    }));
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
        socialLinks: true,
        settings: {
          select: {
            isMediaShareEnabled: true,
            mediaShareSettings: true,
            isSoundEnabled: true,
            minAlertAmount: true,
            quickAmounts: { select: { amount: true } },
            paymentMethods: {
              where: { isEnabled: true },
              select: {
                provider: {
                  select: {
                    key: true,
                    name: true,
                    description: true,
                    isInternational: true,
                  },
                },
              },
            },
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
            _count: { select: { donations: true } },
          },
        },
        sections: { where: { isEnabled: true } },
        soundBoard: {
          select: {
            id: true,
            name: true,
            duration: true,
            price: true,
            audioUrl: true,
          },
        },
      },
    });

    if (!creator) throw new Error('Creator not found');

    const result = creator as unknown as {
      followers: { id: string }[];
      sections: any[];
      goals: any[];
      settings: any;
      socialLinks: any;
      soundBoard: any[];
      id: string;
      username: string;
      displayName: string;
      avatarUrl: string | null;
      bannerUrl: string | null;
      bio: string | null;
      isVerified: boolean;
      isLive: boolean;
    };

    const { followers, sections, goals, settings, soundBoard: rawSoundBoard, socialLinks, ...baseInfo } = result;
    const goal = goals[0] ?? null;

    const profile = {
      id: baseInfo.id,
      username: baseInfo.username,
      display_name: baseInfo.displayName,
      avatar_url: baseInfo.avatarUrl,
      banner_url: baseInfo.bannerUrl,
      bio: baseInfo.bio,
      is_verified: baseInfo.isVerified,
      is_live: baseInfo.isLive,
      is_following: !!followers?.length,
      socials: socialLinks
        ? Object.entries(socialLinks as any).map(([platform, url]) => ({ platform, url: url as string }))
        : [],
    };

    const mediaShareDefaults = {
      youtube: { is_enabled: false, max_duration_seconds: 0, price_per_second: 0 },
      tiktok: { is_enabled: false, max_duration_seconds: 0, price_per_second: 0 },
      reels: { is_enabled: false, max_duration_seconds: 0, price_per_second: 0 },
      voice: { is_enabled: false, max_duration_seconds: 0, price_per_second: 0 },
      gif: { is_enabled: false },
    };

    const mappedSettings = {
      is_media_share_enabled: settings?.isMediaShareEnabled ?? false,
      media_share_settings: (settings?.mediaShareSettings as any) ?? mediaShareDefaults,
      is_sound_enabled: settings?.isSoundEnabled ?? false,
      min_alert_amount: Number(settings?.minAlertAmount ?? 0),
      fast_amounts: settings?.quickAmounts.map((qa) => qa.amount) || [],
      payment_methods:
        settings?.paymentMethods.map((pm) => ({
          key: pm.provider.key,
          name: pm.provider.name,
          description: pm.provider.description,
          is_international: pm.provider.isInternational,
        })) || [],
    };

    const soundBoard = settings?.isSoundEnabled
      ? rawSoundBoard.map((s) => ({
          id: s.id,
          name: s.name,
          duration: s.duration,
          price: Number(s.price),
          audio_url: s.audioUrl,
        }))
      : [];

    const mappedSections = await Promise.all(
      sections.map(async (section) => {
        let sectionData = section.data;

        if (section.type === 'RECENT_ACTIVITY') {
          const recentDonations = await this.prisma.donation.findMany({
            where: { recipientId: result.id, status: 'SUCCESS' },
            take: 10,
            orderBy: { createdAt: 'desc' },
            select: {
              donorName: true,
              amount: true,
              message: true,
              createdAt: true,
              mediaUrl: true,
              mediaType: true,
              donor: { select: { avatarUrl: true } },
            },
          });

          sectionData = recentDonations.map((d) => ({
            donor_name: d.donorName,
            amount: Number(d.amount),
            message: d.message,
            created_at: d.createdAt.toISOString(),
            media_url: d.mediaUrl,
            media_type: d.mediaType,
            donor_avatar: d.donor?.avatarUrl ?? null,
          }));
        }

        if (section.type === 'GOALS' && goal) {
          sectionData = {
            title: goal.title,
            current_amount: Number(goal.currentAmount),
            target_amount: Number(goal.targetAmount),
            percentage: (Number(goal.currentAmount) / Number(goal.targetAmount)) * 100,
            participants_count: goal._count?.donations || 0,
          };
        } else if (section.type === 'GOALS') {
          sectionData = null;
        }

        if (section.type === 'PINNED_WIDGET') {
          const pinnedDonations = await this.prisma.donation.findMany({
            where: { recipientId: result.id, status: 'SUCCESS', isPinned: true },
            orderBy: { createdAt: 'desc' },
            select: {
              donorName: true,
              amount: true,
              message: true,
              createdAt: true,
              mediaUrl: true,
              mediaType: true,
              donor: { select: { avatarUrl: true } },
            },
          });

          sectionData = pinnedDonations.map((d) => ({
            donor_name: d.donorName,
            amount: Number(d.amount),
            message: d.message,
            created_at: d.createdAt.toISOString(),
            media_url: d.mediaUrl,
            media_type: d.mediaType,
            donor_avatar: d.donor?.avatarUrl ?? null,
          }));
        }

        if (section.type === 'ACHIEVEMENTS') {
          const achievements = await this.prisma.creatorAchievement.findMany({
            where: { creatorId: result.id },
            include: { achievement: true },
            orderBy: { earnedAt: 'desc' },
          });

          sectionData = achievements.map((ca) => ({
            id: ca.achievement.id,
            name: ca.achievement.name,
            description: ca.achievement.description,
            image_url: ca.achievement.imageUrl,
            earned_at: ca.earnedAt.toISOString(),
          }));
        }

        if (section.type === 'TOP_SUPPORTERS') {
          const supportersRaw = await this.prisma.donation.groupBy({
            by: ['donorName', 'donorId'],
            where: { recipientId: result.id, status: 'SUCCESS' },
            _sum: { amount: true },
            orderBy: { _sum: { amount: 'desc' } },
            take: 5,
          });

          const donorIds = supportersRaw.map((s) => s.donorId).filter((id): id is string => id !== null);
          const donors = await this.prisma.user.findMany({
            where: { id: { in: donorIds } },
            select: { id: true, avatarUrl: true },
          });

          const avatarMap = donors.reduce(
            (acc, d) => ({ ...acc, [d.id]: d.avatarUrl }),
            {} as Record<string, string | null>
          );

          sectionData = supportersRaw.map((s) => ({
            donor_name: s.donorName,
            total_amount: Number(s._sum.amount),
            avatar_url: s.donorId ? avatarMap[s.donorId] : null,
          }));
        }

        return {
          id: section.id,
          type: section.type,
          title: section.title,
          is_enabled: section.isEnabled,
          data: sectionData,
        };
      })
    );

    return {
      profile,
      settings: mappedSettings,
      sound_board: soundBoard,
      sections: mappedSections,
    };
  }

  async getAuthSettings() {
    const rawSiteSettings = await this.prisma.siteSetting.findUnique({
      where: { key: 'AUTH_SETTINGS' },
    });

    const fallbackAuthSettings = {
      is_google_login_enabled: true,
    };

    return (rawSiteSettings?.value as any) ?? fallbackAuthSettings;
  }
}

import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { PrismaPg } from '@prisma/adapter-pg';

const prisma = new PrismaClient({
    adapter: new PrismaPg({
        connectionString: process.env.DATABASE_URL,
    }),
});

async function main() {
    console.log('Seeding data...');

    // Create Payment Providers
    const paymentProviders = await Promise.all([
        prisma.paymentProvider.upsert({
            where: { key: 'QRIS' },
            update: {},
            create: { key: 'QRIS', name: 'QRIS', isInternational: faker.datatype.boolean() }
        }),
        prisma.paymentProvider.upsert({
            where: { key: 'PAYPAL' },
            update: {},
            create: { key: 'PAYPAL', name: 'PayPal', isInternational: faker.datatype.boolean() }
        }),
    ]);

    // Create 5 categories
    const categories = await Promise.all(
        Array.from({ length: 5 }).map(async () => {

            const name = faker.commerce.department();
            const category = await prisma.category.findFirst({
                where: {
                    name,
                },
            });

            if (category) return category;

            return prisma.category.create({
                data: {
                    name,
                },
            })
        })
    );

    console.log(`Created ${categories.length} categories`);

    const users: any[] = [];
    // Create 5 users with creators and profiles
    for (let i = 0; i < 50; i++) {
        const email = faker.internet.email();

        const userExists = await prisma.user.findFirst({
            where: {
                email,
            },
        });

        if (userExists) return userExists;

        const username = faker.internet.username();

        const user = await prisma.user.create({
            data: {
                email,
                username,
                password: 'hashed_password_here',
                displayName: faker.person.fullName(),
                avatarUrl: faker.image.avatar(),
                creator: {
                    create: {
                        username,
                        displayName: faker.company.name(),
                        bio: faker.lorem.paragraph(),
                        isLive: faker.datatype.boolean(),
                        avatarUrl: faker.image.avatar(),
                        bannerUrl: faker.image.avatar(),
                        notificationSettings: {
                            email: faker.datatype.boolean(),
                            push: faker.datatype.boolean(),
                        },
                        socialLinks: {
                            twitter: `https://twitter.com/${username}`,
                            web: faker.internet.url(),
                        },
                        isVerified: faker.datatype.boolean(),
                        categories: {
                            create: [
                                {
                                    categoryId: categories[Math.floor(Math.random() * categories.length)].id,
                                },
                            ],
                        },
                        sections: {
                            create: [
                                {
                                    type: 'GOALS',
                                    title: 'Community Quest',
                                    isEnabled: faker.datatype.boolean(),
                                    data: [],
                                },
                                {
                                    type: 'ACHIEVEMENTS',
                                    title: 'Achievements',
                                    isEnabled: faker.datatype.boolean(),
                                    data: [],
                                },
                                {
                                    type: 'PINNED_WIDGET',
                                    title: 'Pinned Donations',
                                    isEnabled: faker.datatype.boolean(),
                                    data: [],
                                },
                                {
                                    type: 'RECENT_ACTIVITY',
                                    title: 'Recent Support',
                                    isEnabled: faker.datatype.boolean(),
                                    data: [],
                                },
                                {
                                    type: 'CUSTOM_CONTENT',
                                    title: 'Cosplay Stream',
                                    isEnabled: faker.datatype.boolean(),
                                    data: { content: faker.lorem.paragraph() },
                                },
                                {
                                    type: 'TOP_SUPPORTERS',
                                    title: 'Top Supporters',
                                    isEnabled: faker.datatype.boolean(),
                                    data: [],
                                },
                            ],
                        },
                        goals: {
                            create: [
                                {
                                    title: faker.company.catchPhrase(),
                                    targetAmount: faker.number.int({ min: 1_000_000, max: 10_000_000 }),
                                    currentAmount: faker.number.int({ min: 0, max: 10_000_000 }),
                                    isActive: true,
                                },
                            ],
                        },
                        soundBoard: {
                            create: [
                                { name: 'Ara Ara~', duration: '0:02', price: 10_000, audioUrl: 'https://www.myinstants.com/media/sounds/ara-ara-ara.mp3' },
                                { name: 'Yamete Kudasai!', duration: '0:03', price: 20_000, audioUrl: 'https://www.myinstants.com/media/sounds/yamete_kudasai.mp3' },
                                { name: 'Bruh Moment', duration: '0:01', price: 5_000, audioUrl: 'https://www.myinstants.com/media/sounds/movie_1.mp3' },
                                { name: 'Windows XP Shutdown', duration: '0:04', price: 15_000, audioUrl: 'https://www.myinstants.com/media/sounds/windows-xp-shutdown.mp3' },
                                { name: 'Vine Boom', duration: '0:01', price: 5_000, audioUrl: 'https://www.myinstants.com/media/sounds/vine-boom.mp3' },
                                { name: 'FBI Open Up!', duration: '0:03', price: 25_000, audioUrl: 'https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3' },
                            ]
                        },
                        settings: {
                            create: {
                                isMediaShareEnabled: faker.datatype.boolean(),
                                isSoundEnabled: faker.datatype.boolean(),
                                minAlertAmount: 5_000,
                                quickAmounts: {
                                    create: [
                                        { amount: 5_000 },
                                        { amount: 10_000 },
                                        { amount: 20_000 },
                                        { amount: 50_000 },
                                        { amount: 100_000 },
                                    ],
                                },
                                paymentMethods: {
                                    create: paymentProviders.map(p => ({
                                        providerId: p.id,
                                        isEnabled: faker.datatype.boolean(),
                                    })),
                                },
                            },
                        },
                    },
                },
            },
            include: { creator: true }
        });
        users.push(user);
        console.log(`Created user: ${user.username}`);
    }

    const creators = users.map(u => u.creator).filter(Boolean);

    // Create 3 master achievements
    const masterAchievements = await Promise.all([
        prisma.achievement.upsert({
            where: { name: 'First Support' },
            update: {},
            create: { name: 'First Support', description: 'Received the first donation', imageUrl: 'https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd', category: 'DONATION' }
        }),
        prisma.achievement.upsert({
            where: { name: 'Rising Star' },
            update: {},
            create: { name: 'Rising Star', description: 'Reached 10 donations', imageUrl: 'https://images.unsplash.com/photo-1557683316-973673baf926', category: 'MILESTONE' }
        }),
        prisma.achievement.upsert({
            where: { name: 'Community Hero' },
            update: {},
            create: { name: 'Community Hero', description: 'Completed a Community Quest', imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088', category: 'GOALS' }
        }),
    ]);

    // Create donations
    if (creators.length > 0) {
        // Build creatorId → goalId hashmap for efficient lookup
        const goals = await prisma.goal.findMany({
            where: { creatorId: { in: creators.map(c => c!.id) }, isActive: true },
            select: { id: true, creatorId: true },
        });
        const goalByCreatorId = goals.reduce((acc, g) => {
            acc[g.creatorId] = g.id;
            return acc;
        }, {} as Record<string, string>);

        for (let i = 0; i < 50; i++) {
            const donor = users[Math.floor(Math.random() * users.length)];
            const recipient = creators[Math.floor(Math.random() * creators.length)];
            const recipientGoalId = goalByCreatorId[recipient!.id];
            const shouldLinkGoal = recipientGoalId && faker.datatype.boolean(0.5);

            await prisma.donation.create({
                data: {
                    externalId: faker.string.uuid(),
                    amount: faker.number.int({ min: 5_000, max: 1_000_000 }),
                    donorName: donor.displayName || faker.person.fullName(),
                    message: faker.lorem.sentence(),
                    status: 'SUCCESS',
                    recipientId: recipient!.id,
                    donorId: donor.id,
                    isPinned: faker.datatype.boolean(0.2),
                    goalId: shouldLinkGoal ? recipientGoalId : undefined,
                },
            });

            // Assign a random achievement to the recipient (30% chance)
            if (faker.datatype.boolean(0.3)) {
                const randomAchievement = masterAchievements[Math.floor(Math.random() * masterAchievements.length)];
                await prisma.creatorAchievement.upsert({
                    where: {
                        creatorId_achievementId: {
                            creatorId: recipient!.id,
                            achievementId: randomAchievement.id,
                        },
                    },
                    update: {},
                    create: {
                        creatorId: recipient!.id,
                        achievementId: randomAchievement.id,
                    },
                });
            }
        }
        console.log('Created 50 donations and assigned achievements');
    }

    // Create follows — each user follows 1-5 random creators
    if (creators.length > 0) {
        let followCount = 0;

        for (const user of users) {
            const numberOfFollows = faker.number.int({ min: 1, max: 5 });
            const shuffledCreators = faker.helpers.shuffle(creators);
            const creatorsToFollow = shuffledCreators
                .filter(c => c!.userId !== user.id)
                .slice(0, numberOfFollows);

            for (const creator of creatorsToFollow) {
                await prisma.follow.upsert({
                    where: {
                        userId_creatorId: {
                            userId: user.id,
                            creatorId: creator!.id,
                        },
                    },
                    update: {},
                    create: {
                        userId: user.id,
                        creatorId: creator!.id,
                    },
                });
                followCount++;
            }
        }

        console.log(`Created ${followCount} follows`);
    }

    // Create site settings
    const siteSettingsData = [
        {
            key: 'LANDING_HERO',
            value: {
                imageUrl: 'https://images.unsplash.com/photo-1543852786-1cf6624b9987',
                title: 'Jembatan Dukungan Kreator',
                subtitle: 'Platform donasi paling simpel, transparan, dan penuh kasih untuk kreator favoritmu.',
                searchPlaceholder: 'Cari kreator favoritmu...',
            },
            description: 'Landing page hero section settings',
        },
        {
            key: 'LANDING_FEATURES',
            value: {
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
            description: 'Landing page features section settings',
        },
        {
            key: 'LANDING_DEMO',
            value: {
                tabs: [
                    { label: 'Hadiah', icon: 'Gift' },
                    { label: 'Sound', icon: 'Volume2' },
                    { label: 'Lelang', icon: 'Gavel' },
                ],
                placeholderName: 'Nama samaran',
                placeholderMessage: 'Tulis dukungan hangatmu...',
            },
            description: 'Landing page demo section settings',
        },
        {
            key: 'NAVBAR',
            value: {
                logoText: 'DukuNasia',
                links: [
                    { label: 'Explore', url: '/explore' },
                    { label: 'Following', url: '/following' },
                    { label: 'Activity', url: '/activity' },
                ],
            },
            description: 'Navbar settings',
        },
        {
            key: 'SUPPORTED_BY',
            value: {
                title: 'SUPPORTED BY',
                partners: [
                    { name: 'GOPAY' },
                    { name: 'OVO' },
                    { name: 'DANA' },
                    { name: 'QRIS' },
                ],
            },
            description: 'Supported by payment partners settings',
        },
        {
            key: 'FOOTER',
            value: {
                links: [
                    { label: 'BANTUAN', url: '/bantuan' },
                    { label: 'STATUS', url: '/status' },
                    { label: 'SYARAT', url: '/syarat' },
                    { label: 'PRIVASI', url: '/privasi' },
                ],
                copyright: '© 2024 DUKUNASIA • SPREADING LOVE 💜',
            },
            description: 'Footer settings',
        },
    ];

    for (const setting of siteSettingsData) {
        await prisma.siteSetting.upsert({
            where: { key: setting.key },
            update: {
                value: setting.value,
                description: setting.description
            },
            create: {
                key: setting.key,
                value: setting.value as any,
                description: setting.description,
            },
        });
    }

    console.log('Seeding finished.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

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
            create: { key: 'QRIS', name: 'GoPay, OVO, Dana', isInternational: false }
        }),
        prisma.paymentProvider.upsert({
            where: { key: 'PAYPAL' },
            update: {},
            create: { key: 'PAYPAL', name: 'International', isInternational: true }
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

        const user = await prisma.user.create({
            data: {
                email,
                username: faker.internet.username(),
                password: 'hashed_password_here',
                displayName: faker.person.fullName(),
                avatarUrl: faker.image.avatar(),
                creator: {
                    create: {
                        username: faker.internet.username(),
                        displayName: faker.company.name(),
                        bio: faker.lorem.paragraph(),
                        notificationSettings: {
                            email: true,
                            push: true,
                        },
                        socialLinks: {
                            twitter: `https://twitter.com/${faker.internet.username()}`,
                            web: faker.internet.url(),
                        },
                        isVerified: faker.datatype.boolean(),
                        categories: {
                            connect: [
                                {
                                    id: categories[Math.floor(Math.random() * categories.length)].id,
                                },
                            ],
                        },
                        sections: {
                            create: [
                                {
                                    type: 'COMMUNITY_QUEST',
                                    title: 'Community Quest',
                                    data: { status: 'active', progress: 75 },
                                    rowOrder: 0,
                                },
                                {
                                    type: 'ACHIEVEMENTS',
                                    title: 'Achievements',
                                    data: [{ id: 1, name: 'First Stream', icon: '🏆' }],
                                    rowOrder: 1,
                                },
                                {
                                    type: 'PINNED_WIDGET',
                                    title: 'Pinned Donations',
                                    data: [{ from: 'John', amount: 50000, message: 'Good luck!' }],
                                    rowOrder: 2,
                                },
                                {
                                    type: 'RECENT_ACTIVITY',
                                    title: 'Recent Support',
                                    data: [{ from: 'Jane', amount: 10000, time: '2 mins ago' }],
                                    rowOrder: 3,
                                },
                                {
                                    type: 'CUSTOM_CONTENT',
                                    title: 'Cosplay Stream',
                                    isEnabled: false,
                                    data: { content: 'Next cosplay stream on Friday!' },
                                    rowOrder: 4,
                                },
                                {
                                    type: 'TOP_SUPPORTERS',
                                    title: 'Top Supporters',
                                    data: [],
                                    rowOrder: 5,
                                },
                            ],
                        },
                        goals: {
                            create: [
                                {
                                    title: faker.company.catchPhrase(),
                                    targetAmount: faker.number.int({ min: 1000000, max: 10000000 }),
                                    currentAmount: faker.number.int({ min: 0, max: 1000000 }),
                                    isActive: true,
                                },
                            ],
                        },
                        soundBoard: {
                            create: [
                                { name: 'Ara Ara~', duration: '0:02', price: 10000, audioUrl: 'https://www.myinstants.com/media/sounds/ara-ara-ara.mp3' },
                                { name: 'Yamete Kudasai!', duration: '0:03', price: 20000, audioUrl: 'https://www.myinstants.com/media/sounds/yamete_kudasai.mp3' },
                                { name: 'Bruh Moment', duration: '0:01', price: 5000, audioUrl: 'https://www.myinstants.com/media/sounds/movie_1.mp3' },
                                { name: 'Windows XP Shutdown', duration: '0:04', price: 15000, audioUrl: 'https://www.myinstants.com/media/sounds/windows-xp-shutdown.mp3' },
                                { name: 'Vine Boom', duration: '0:01', price: 5000, audioUrl: 'https://www.myinstants.com/media/sounds/vine-boom.mp3' },
                                { name: 'FBI Open Up!', duration: '0:03', price: 25000, audioUrl: 'https://www.myinstants.com/media/sounds/fbi-open-up-sfx.mp3' },
                            ]
                        },
                        settings: {
                            create: {
                                isMediaShareEnabled: true,
                                isSoundEnabled: true,
                                minAlertAmount: 5000,
                                quickAmounts: {
                                    create: [
                                        { amount: 5000, rowOrder: 0 },
                                        { amount: 10000, rowOrder: 1 },
                                        { amount: 20000, rowOrder: 2 },
                                        { amount: 50000, rowOrder: 3 },
                                        { amount: 100000, rowOrder: 4 },
                                    ],
                                },
                                paymentMethods: {
                                    create: paymentProviders.map(p => ({
                                        providerId: p.id,
                                        isEnabled: true,
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
            create: { name: 'Community Hero', description: 'Completed a Community Quest', imageUrl: 'https://images.unsplash.com/photo-1542382257-80dedb725088', category: 'COMMUNITY_QUEST' }
        }),
    ]);

    // Create 5 donations
    if (creators.length > 0) {
        for (let i = 0; i < 50; i++) {
            const donor = users[Math.floor(Math.random() * users.length)];
            const recipient = creators[Math.floor(Math.random() * creators.length)];

            await prisma.donation.create({
                data: {
                    externalId: faker.string.uuid(),
                    amount: faker.number.int({ min: 10000, max: 1000000 }),
                    donorName: donor.displayName || faker.person.fullName(),
                    message: faker.lorem.sentence(),
                    status: 'SUCCESS',
                    recipientId: recipient!.id,
                    donorId: donor.id,
                    isPinned: faker.datatype.boolean(0.2), // 20% chance to be pinned
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

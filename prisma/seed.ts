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
                profile: {
                    create: {
                        bio: faker.lorem.paragraph(),
                        notificationSettings: {
                            email: true,
                            push: true,
                        },
                        socialLinks: {
                            twitter: `https://twitter.com/${faker.internet.username()}`,
                            web: faker.internet.url(),
                        },
                    },
                },
                creator: {
                    create: {
                        username: faker.internet.username(),
                        displayName: faker.company.name(),
                        bio: faker.company.catchPhrase(),
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
                            ],
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
                    recipientId: recipient!.id, // Gunakan non-null assertion
                    donorId: donor.id,
                },
            });
        }
        console.log('Created 5 donations');
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

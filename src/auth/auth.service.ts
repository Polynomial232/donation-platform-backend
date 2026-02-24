import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) { }

    async register(dto: RegisterDto) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);

        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    username: dto.username,
                    password: hashedPassword,
                    display_name: dto.display_name,
                    profile: {
                        create: {},
                    },
                },
            });

            return this.signToken(user.id, user.username);
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ForbiddenException('Credentials taken');
            }
            throw error;
        }
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findUnique({
            where: {
                username: dto.username,
            },
        });

        if (!user) {
            throw new ForbiddenException('Credentials incorrect');
        }

        const pwMatches = await bcrypt.compare(dto.password, user.password);

        if (!pwMatches) {
            throw new ForbiddenException('Credentials incorrect');
        }

        return this.signToken(user.id, user.username);
    }

    async signToken(userId: string, username: string): Promise<{ access_token: string }> {
        const payload = {
            sub: userId,
            username,
        };

        const secret = this.config.get('JWT_SECRET');

        const token = await this.jwt.signAsync(payload, {
            expiresIn: '7d',
            secret: secret,
        });

        return {
            access_token: token,
        };
    }
}

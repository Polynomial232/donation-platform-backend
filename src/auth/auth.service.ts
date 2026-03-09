import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { randomBytes } from 'crypto';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwt: JwtService,
        private config: ConfigService,
    ) { }

    async register(dto: RegisterDto) {
        const hashedPassword = await bcrypt.hash(dto.password, 10);
        const activationToken = randomBytes(32).toString('hex');

        try {
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    username: dto.username,
                    password: hashedPassword,
                    displayName: dto.username, // Using username as default display name
                    isActive: false,
                    activationToken: activationToken,
                    activationExpiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
                    creator: {
                        create: {
                            username: dto.username,
                            displayName: dto.username,
                        },
                    },
                },
            });

            // In real app, send email with activation link here
            console.log(`Activation token for ${user.email}: ${activationToken}`);

            return {
                message: 'Pendaftaran berhasil. Silakan cek email Anda untuk aktivasi akun.',
                email: user.email,
            };
        } catch (error) {
            if (error.code === 'P2002') {
                throw new ForbiddenException('Username atau Email sudah terdaftar');
            }
            throw error;
        }
    }

    async activateAccount(token: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                activationToken: token,
                activationExpiresAt: {
                    gt: new Date(),
                },
            },
        });

        if (!user) {
            throw new BadRequestException('Token aktivasi tidak valid atau sudah kadaluarsa');
        }

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                isActive: true,
                activationToken: null,
                activationExpiresAt: null,
            },
        });

        return {
            message: 'Akun berhasil diaktivasi. Silakan login.',
        };
    }

    async login(dto: LoginDto) {
        const user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { username: dto.username },
                    { email: dto.username },
                ],
            },
        });

        if (!user) {
            throw new ForbiddenException('Credentials incorrect');
        }

        if (!user.isActive) {
            throw new ForbiddenException('Akun belum diaktivasi. Silakan cek email Anda.');
        }

        const pwMatches = await bcrypt.compare(dto.password, user.password);

        if (!pwMatches) {
            throw new ForbiddenException('Credentials incorrect');
        }

        return this.signToken(user.id, user.username);
    }

    async forgotPassword(email: string) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            // We don't want to reveal if a user exists for security reasons
            return {
                message: 'Jika email terdaftar, instruksi reset password akan dikirim.',
            };
        }

        const resetToken = randomBytes(32).toString('hex');
        const resetExpires = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                resetPasswordToken: resetToken,
                resetPasswordExpiresAt: resetExpires,
            },
        });

        // In real app, send email with reset link here
        console.log(`Reset password token for ${user.email}: ${resetToken}`);

        return {
            message: 'Instruksi reset password telah dikirim ke email Anda.',
        };
    }

    async resetPassword(token: string, dto: any) {
        const user = await this.prisma.user.findFirst({
            where: {
                resetPasswordToken: token,
                resetPasswordExpiresAt: {
                    gt: new Date(),
                },
            },
        });

        if (!user) {
            throw new BadRequestException('Token reset password tidak valid atau sudah kadaluarsa');
        }

        const hashedPassword = await bcrypt.hash(dto.password, 10);

        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetPasswordToken: null,
                resetPasswordExpiresAt: null,
            },
        });

        return {
            message: 'Password berhasil diperbarui. Silakan login.',
        };
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

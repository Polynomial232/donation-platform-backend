import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OverlayService {
    constructor(private prisma: PrismaService) { }

    async createOverlay(userId: string, data: any) {
        return this.prisma.overlay.create({
            data: {
                ...data,
                userId,
                token: uuidv4(),
            },
        });
    }

    async getOverlays(userId: string) {
        return this.prisma.overlay.findMany({
            where: { userId },
        });
    }

    async getOverlayByToken(token: string) {
        return this.prisma.overlay.findUnique({
            where: { token },
        });
    }

    async updateOverlay(id: string, userId: string, data: any) {
        return this.prisma.overlay.updateMany({
            where: { id, userId },
            data,
        });
    }
}

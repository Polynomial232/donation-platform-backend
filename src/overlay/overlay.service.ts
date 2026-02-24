import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class OverlayService {
    constructor(private prisma: PrismaService) { }

    async createOverlay(user_id: string, data: any) {
        return this.prisma.overlay.create({
            data: {
                ...data,
                user_id,
                token: uuidv4(),
            },
        });
    }

    async getOverlays(user_id: string) {
        return this.prisma.overlay.findMany({
            where: { user_id },
        });
    }

    async getOverlayByToken(token: string) {
        return this.prisma.overlay.findUnique({
            where: { token },
        });
    }

    async updateOverlay(id: string, user_id: string, data: any) {
        return this.prisma.overlay.updateMany({
            where: { id, user_id },
            data,
        });
    }
}

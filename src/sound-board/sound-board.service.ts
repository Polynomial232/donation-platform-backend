import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSoundBoardDto, UpdateSoundBoardDto } from './dto/sound-board.dto';

@Injectable()
export class SoundBoardService {
    constructor(private prisma: PrismaService) { }

    async findAllByCreator(creatorId: string) {
        return this.prisma.soundBoard.findMany({
            where: { creatorId },
            orderBy: { createdAt: 'desc' },
        });
    }

    async findOne(id: string) {
        const sound = await this.prisma.soundBoard.findUnique({
            where: { id },
        });
        if (!sound) throw new NotFoundException('Sound not found');
        return sound;
    }

    async create(creatorId: string, dto: CreateSoundBoardDto) {
        return this.prisma.soundBoard.create({
            data: {
                ...dto,
                creatorId,
            },
        });
    }

    async update(id: string, creatorId: string, dto: UpdateSoundBoardDto) {
        // Ensure the sound belongs to the creator
        const sound = await this.prisma.soundBoard.findFirst({
            where: { id, creatorId }
        });

        if (!sound) throw new NotFoundException('Sound not found or unauthorized');

        return this.prisma.soundBoard.update({
            where: { id },
            data: dto,
        });
    }

    async remove(id: string, creatorId: string) {
        const sound = await this.prisma.soundBoard.findFirst({
            where: { id, creatorId }
        });

        if (!sound) throw new NotFoundException('Sound not found or unauthorized');

        return this.prisma.soundBoard.delete({
            where: { id },
        });
    }

    async testSound(id: string, creatorId: string) {
        const sound = await this.prisma.soundBoard.findFirst({
            where: { id, creatorId },
        });

        if (!sound) {
            throw new NotFoundException('Sound not found');
        }

        return {
            message: `Playing ${sound.name} on overlay...`,
            audioUrl: sound.audioUrl
        };
    }
}

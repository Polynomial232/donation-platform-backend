import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSoundBoardDto, UpdateSoundBoardDto } from './dto/sound-board.dto';

@Injectable()
export class SoundBoardService {
    constructor(private prisma: PrismaService) { }

    private formatSound(s: any) {
        return {
            id: s.id,
            name: s.name,
            duration: s.duration,
            price: Number(s.price),
            audio_url: s.audioUrl,
            creator_id: s.creatorId,
            created_at: s.createdAt,
            updated_at: s.updatedAt,
        };
    }

    async findAllByCreator(creatorId: string) {
        const sounds = await this.prisma.soundBoard.findMany({
            where: { creatorId },
            orderBy: { createdAt: 'desc' },
        });
        return sounds.map(s => this.formatSound(s));
    }

    async findOne(id: string) {
        const sound = await this.prisma.soundBoard.findUnique({
            where: { id },
        });
        if (!sound) throw new NotFoundException('Sound not found');
        return this.formatSound(sound);
    }

    async create(creatorId: string, dto: CreateSoundBoardDto) {
        const sound = await this.prisma.soundBoard.create({
            data: {
                name: dto.name,
                duration: dto.duration,
                price: dto.price,
                audioUrl: dto.audio_url,
                creatorId,
            },
        });
        return this.formatSound(sound);
    }

    async update(id: string, creatorId: string, dto: UpdateSoundBoardDto) {
        // Ensure the sound belongs to the creator
        const sound = await this.prisma.soundBoard.findFirst({
            where: { id, creatorId }
        });

        if (!sound) throw new NotFoundException('Sound not found or unauthorized');

        const updated = await this.prisma.soundBoard.update({
            where: { id },
            data: {
                name: dto.name,
                duration: dto.duration,
                price: dto.price,
                audioUrl: dto.audio_url,
            },
        });

        return this.formatSound(updated);
    }

    async remove(id: string, creatorId: string) {
        const sound = await this.prisma.soundBoard.findFirst({
            where: { id, creatorId }
        });

        if (!sound) throw new NotFoundException('Sound not found or unauthorized');

        const deleted = await this.prisma.soundBoard.delete({
            where: { id },
        });

        return this.formatSound(deleted);
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
            audio_url: sound.audioUrl
        };
    }
}

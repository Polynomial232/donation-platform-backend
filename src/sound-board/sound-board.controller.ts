import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, Res, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { SoundBoardService } from './sound-board.service';
import { CreateSoundBoardDto, UpdateSoundBoardDto } from './dto/sound-board.dto';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { PrismaService } from '../prisma/prisma.service';
import { ResponseHelper } from '../common/helpers/response.helper';
import * as express from 'express';

@UseGuards(JwtGuard)
@Controller('sound-board')
export class SoundBoardController {
    constructor(
        private soundBoardService: SoundBoardService,
        private prisma: PrismaService
    ) { }

    private async getCreatorId(userId: string) {
        const creator = await this.prisma.creator.findUnique({
            where: { userId },
        });
        if (!creator) throw new Error('Creator profile not found');
        return creator.id;
    }

    @Get()
    async findAll(@GetUser('id') userId: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const creatorId = await this.getCreatorId(userId);
            const data = await this.soundBoardService.findAllByCreator(creatorId);
            return ResponseHelper.success(res, {
                data,
                message: 'Sound board retrieved successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve sound board'
            });
        }
    }

    @Post()
    async create(
        @GetUser('id') userId: string,
        @Body() dto: CreateSoundBoardDto,
        @Res({ passthrough: true }) res: express.Response
    ) {
        try {
            const creatorId = await this.getCreatorId(userId);
            const data = await this.soundBoardService.create(creatorId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Sound effect added successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to add sound effect'
            });
        }
    }

    @Patch(':id')
    async update(
        @GetUser('id') userId: string,
        @Param('id') id: string,
        @Body() dto: UpdateSoundBoardDto,
        @Res({ passthrough: true }) res: express.Response
    ) {
        try {
            const creatorId = await this.getCreatorId(userId);
            const data = await this.soundBoardService.update(id, creatorId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Sound effect updated successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to update sound effect'
            });
        }
    }

    @Delete(':id')
    async remove(
        @GetUser('id') userId: string,
        @Param('id') id: string,
        @Res({ passthrough: true }) res: express.Response
    ) {
        try {
            const creatorId = await this.getCreatorId(userId);
            await this.soundBoardService.remove(id, creatorId);
            return ResponseHelper.success(res, {
                message: 'Sound effect deleted successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to delete sound effect'
            });
        }
    }

    @Post(':id/test')
    async test(
        @GetUser('id') userId: string,
        @Param('id') id: string,
        @Res({ passthrough: true }) res: express.Response
    ) {
        try {
            const creatorId = await this.getCreatorId(userId);
            const data = await this.soundBoardService.testSound(id, creatorId);
            return ResponseHelper.success(res, {
                data,
                message: 'Sound test triggered successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to test sound'
            });
        }
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file', {
        storage: diskStorage({
            destination: './uploads/sounds',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('');
                return cb(null, `${randomName}${extname(file.originalname)}`);
            }
        })
    }))
    async uploadFile(@UploadedFile() file: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            return ResponseHelper.success(res, {
                data: { url: `/uploads/sounds/${file.filename}` },
                message: 'File uploaded successfully'
            });
        } catch (error) {
            return ResponseHelper.error(res, { message: 'Upload failed' });
        }
    }
}

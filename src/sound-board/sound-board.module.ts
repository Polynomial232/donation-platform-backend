import { Module } from '@nestjs/common';
import { SoundBoardController } from './sound-board.controller';
import { SoundBoardService } from './sound-board.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [SoundBoardController],
    providers: [SoundBoardService],
})
export class SoundBoardModule { }

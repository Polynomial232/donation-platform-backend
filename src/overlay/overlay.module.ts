import { Module } from '@nestjs/common';
import { OverlayService } from './overlay.service';
import { OverlayController } from './overlay.controller';

@Module({
  providers: [OverlayService],
  controllers: [OverlayController]
})
export class OverlayModule {}

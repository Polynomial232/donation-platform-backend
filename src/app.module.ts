import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { DonationModule } from './donation/donation.module';
import { XenditModule } from './xendit/xendit.module';
import { GatewayModule } from './gateway/gateway.module';
import { OverlayModule } from './overlay/overlay.module';
import { GoalModule } from './goal/goal.module';
import { DiscoveryModule } from './discovery/discovery.module';
import { SoundBoardModule } from './sound-board/sound-board.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    DonationModule,
    XenditModule,
    GatewayModule,
    OverlayModule,
    GoalModule,
    DiscoveryModule,
    SoundBoardModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { DonationModule } from './donation/donation.module';
import { XenditModule } from './xendit/xendit.module';
import { GatewayModule } from './gateway/gateway.module';
import { OverlayModule } from './overlay/overlay.module';
import { GoalModule } from './goal/goal.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    ProfileModule,
    DonationModule,
    XenditModule,
    GatewayModule,
    OverlayModule,
    GoalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

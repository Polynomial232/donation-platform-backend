import { Module } from '@nestjs/common';
import { DonationController } from './donation.controller';
import { DonationService } from './donation.service';
import { XenditModule } from '../xendit/xendit.module';
import { GoalModule } from '../goal/goal.module';

@Module({
  imports: [XenditModule, GoalModule],
  controllers: [DonationController],
  providers: [DonationService],
})
export class DonationModule { }

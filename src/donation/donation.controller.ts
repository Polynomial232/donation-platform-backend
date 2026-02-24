import { Body, Controller, Get, HttpStatus, Post, Query, Res, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { DonationService } from './donation.service';
import { CreateDonationDto } from './dto/donation.dto';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('donations')
export class DonationController {
    constructor(private donationService: DonationService) { }

    @Post()
    async createDonation(@Body() dto: CreateDonationDto, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.donationService.createDonation(dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Donation created successfully',
                status: HttpStatus.CREATED,
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to create donation',
                status: error.status,
            });
        }
    }

    @UseGuards(JwtGuard)
    @Get('history')
    async getHistory(@GetUser('id') userId: string, @Query() query: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            const result = await this.donationService.getHistory(userId, query);
            return ResponseHelper.success(res, {
                data: result.data || result,
                metadata: result.meta || null,
                message: 'Donation history retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve donation history',
                status: error.status,
                data: [],
            });
        }
    }

    @Post('webhook/xendit')
    async handleWebhook(@Body() data: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            const result = await this.donationService.handleWebhook(data);
            return ResponseHelper.success(res, {
                data: result,
                message: 'Webhook processed successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to process webhook',
                status: error.status,
            });
        }
    }
}

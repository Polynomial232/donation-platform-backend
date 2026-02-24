import { Body, Controller, Get, Patch, Res, UseGuards, HttpStatus } from '@nestjs/common';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { ProfileService } from './profile.service';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@UseGuards(JwtGuard)
@Controller('profile')
export class ProfileController {
    constructor(private profileService: ProfileService) { }

    @Get('me')
    async getMe(@GetUser('id') userId: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.profileService.getMe(userId);
            return ResponseHelper.success(res, {
                data,
                message: 'Profile retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve profile',
                status: error.status,
            });
        }
    }

    @Patch('settings')
    async updateSettings(@GetUser('id') userId: string, @Body() dto: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.profileService.updateSettings(userId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Settings updated successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to update settings',
                status: error.status,
            });
        }
    }
}

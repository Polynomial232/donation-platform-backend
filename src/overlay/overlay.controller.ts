import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { OverlayService } from './overlay.service';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('overlays')
export class OverlayController {
    constructor(private overlayService: OverlayService) { }

    @Get(':token')
    async getOverlayByToken(@Param('token') token: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.overlayService.getOverlayByToken(token);
            return ResponseHelper.success(res, {
                data,
                message: 'Overlay retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve overlay',
                status: error.status,
            });
        }
    }

    @UseGuards(JwtGuard)
    @Post()
    async createOverlay(@GetUser('id') userId: string, @Body() dto: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.overlayService.createOverlay(userId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Overlay created successfully',
                status: HttpStatus.CREATED,
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to create overlay',
                status: error.status,
            });
        }
    }

    @UseGuards(JwtGuard)
    @Get()
    async getOverlays(@GetUser('id') userId: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.overlayService.getOverlays(userId);
            return ResponseHelper.success(res, {
                data,
                message: 'Overlays retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve overlays',
                status: error.status,
                data: [],
            });
        }
    }

    @UseGuards(JwtGuard)
    @Patch(':id')
    async updateOverlay(
        @Param('id') id: string,
        @GetUser('id') userId: string,
        @Body() dto: any,
        @Res({ passthrough: true }) res: express.Response,
    ) {
        try {
            const data = await this.overlayService.updateOverlay(id, userId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Overlay updated successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to update overlay',
                status: error.status,
            });
        }
    }
}

import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { JwtGuard } from '../auth/guard/jwt.guard';
import { GetUser } from '../auth/decorator/get-user.decorator';
import { GoalService } from './goal.service';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('goals')
export class GoalController {
    constructor(private goalService: GoalService) { }

    @Get('active/:userId')
    async getActiveGoal(@Param('userId') userId: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.goalService.getActiveGoal(userId);
            return ResponseHelper.success(res, {
                data,
                message: 'Active goal retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve active goal',
                status: error.status,
            });
        }
    }

    @UseGuards(JwtGuard)
    @Post()
    async createGoal(@GetUser('id') userId: string, @Body() dto: any, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.goalService.createGoal(userId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Goal created successfully',
                status: HttpStatus.CREATED,
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to create goal',
                status: error.status,
            });
        }
    }

    @UseGuards(JwtGuard)
    @Get()
    async getGoals(@GetUser('id') userId: string, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.goalService.getGoals(userId);
            return ResponseHelper.success(res, {
                data,
                message: 'Goals retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve goals',
                status: error.status,
                data: [],
            });
        }
    }

    @UseGuards(JwtGuard)
    @Patch(':id')
    async updateGoal(
        @Param('id') id: string,
        @GetUser('id') userId: string,
        @Body() dto: any,
        @Res({ passthrough: true }) res: express.Response,
    ) {
        try {
            const data = await this.goalService.updateGoal(id, userId, dto);
            return ResponseHelper.success(res, {
                data,
                message: 'Goal updated successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to update goal',
                status: error.status,
            });
        }
    }
}

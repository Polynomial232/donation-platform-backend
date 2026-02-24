import { Controller, Get, Query, Res } from '@nestjs/common';
import { DiscoveryService } from './discovery.service';
import { SearchCreatorsDto } from './dto/discovery.dto';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('discovery')
export class DiscoveryController {
    constructor(private discoveryService: DiscoveryService) { }

    @Get('landing')
    async getLandingData(@Res({ passthrough: true }) res: express.Response) {
        try {
            const landingData = await this.discoveryService.getLandingData();
            return ResponseHelper.success(res, {
                data: landingData,
                message: 'Landing data retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve landing data',
            });
        }
    }

    @Get('explore')
    async getExploreData(@Res({ passthrough: true }) res: express.Response) {
        try {
            const exploreData = await this.discoveryService.getExploreData();
            return ResponseHelper.success(res, {
                data: exploreData,
                message: 'Explore data retrieved successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to retrieve explore data',
            });
        }
    }

    @Get('search')
    async searchCreators(
        @Query() dto: SearchCreatorsDto,
        @Res({ passthrough: true }) res: express.Response,
    ) {
        try {
            const searchResults = await this.discoveryService.searchCreators(dto);
            return ResponseHelper.success(res, {
                data: searchResults,
                message: 'Creators searched successfully',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Failed to search creators',
            });
        }
    }
}

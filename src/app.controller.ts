import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as express from 'express';
import { ResponseHelper } from './common/helpers/response.helper';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Res({ passthrough: true }) res: express.Response) {
    try {
      const data = this.appService.getHello();
      return ResponseHelper.success(res, {
        data,
        message: 'Hello retrieved successfully',
      });
    } catch (error) {
      return ResponseHelper.error(res, {
        message: error.message || 'Failed to retrieve hello',
      });
    }
  }
}

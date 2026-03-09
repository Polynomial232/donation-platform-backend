import { HttpStatus } from '@nestjs/common';
import * as express from 'express';

export interface ApiResponse<T = any> {
    status_code: number;
    message: string;
    data: T;
    metadata: any;
}

export class ResponseHelper {
    static success<T>(
        res: express.Response,
        {
            data = null as any,
            message = 'Success',
            status = HttpStatus.OK,
            metadata = null,
        }: {
            data?: T;
            message?: string;
            status?: number;
            metadata?: any;
        } = {},
    ): ApiResponse<T> {
        res.status(status);
        return {
            status_code: status,
            message,
            data,
            metadata,
        };
    }

    static error(
        res: express.Response,
        {
            message = 'Internal Server Error',
            status = HttpStatus.INTERNAL_SERVER_ERROR,
            data = null,
        }: {
            message?: string;
            status?: number;
            data?: any;
        } = {},
    ): ApiResponse {
        res.status(status);
        return {
            status_code: status,
            message,
            data,
            metadata: null,
        };
    }
}

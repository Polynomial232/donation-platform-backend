import { Body, Controller, HttpCode, HttpStatus, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import * as express from 'express';
import { ResponseHelper } from '../common/helpers/response.helper';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() dto: RegisterDto, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.authService.register(dto);
            this.setCookie(res, data.access_token);
            return ResponseHelper.success(res, {
                data,
                message: 'Registration successful',
                status: HttpStatus.CREATED,
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Registration failed',
                status: error.status,
            });
        }
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: express.Response) {
        try {
            const data = await this.authService.login(dto);
            this.setCookie(res, data.access_token);
            return ResponseHelper.success(res, {
                data,
                message: 'Login successful',
            });
        } catch (error) {
            return ResponseHelper.error(res, {
                message: error.message || 'Login failed',
                status: error.status,
            });
        }
    }

    @Post('logout')
    async logout(@Res({ passthrough: true }) res: express.Response) {
        res.clearCookie('token');
        return ResponseHelper.success(res, {
            message: 'Logged out successfully',
        });
    }

    private setCookie(res: express.Response, token: string) {
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });
    }
}

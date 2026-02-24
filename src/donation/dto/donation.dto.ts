import { IsNotEmpty, IsNumber, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateDonationDto {
    @IsString()
    @IsNotEmpty()
    recipient_id: string;

    @IsString()
    @IsNotEmpty()
    donor_name: string;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString()
    @IsOptional()
    message?: string;

    @IsUrl()
    @IsOptional()
    media_url?: string;

    @IsString()
    @IsOptional()
    media_type?: string; // youtube, video, image
}

export enum DonationStatus {
    PENDING = 'PENDING',
    SUCCESS = 'SUCCESS',
    FAILED = 'FAILED',
    EXPIRED = 'EXPIRED',
}

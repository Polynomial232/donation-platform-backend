import { IsString, IsNotEmpty, IsOptional, IsNumber, Min, IsUrl } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateSoundBoardDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    duration?: string;

    @IsNumber()
    @Type(() => Number)
    @Min(0)
    price: number;

    @IsString()
    @IsNotEmpty()
    @IsUrl()
    @IsOptional()
    audio_url: string;
}

export class UpdateSoundBoardDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    duration?: string;

    @IsNumber()
    @Type(() => Number)
    @IsOptional()
    @Min(0)
    price?: number;

    @IsString()
    @IsOptional()
    @IsUrl()
    audio_url?: string;
}

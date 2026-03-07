import { IsString, IsNotEmpty, IsOptional, IsNumber, Min } from 'class-validator';
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
    audioUrl: string;
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
    audioUrl?: string;
}

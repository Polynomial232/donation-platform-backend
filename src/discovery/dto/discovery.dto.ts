import { IsOptional, IsString, IsInt, Min, Max } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchCreatorsDto {
    @IsString()
    @IsOptional()
    search?: string;

    @IsString()
    @IsOptional()
    category?: string;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    page?: number = 1;

    @IsOptional()
    @Type(() => Number)
    @IsInt()
    @Min(1)
    @Max(25)
    limit?: number = 25;
}

export class ListCreatorsDto extends SearchCreatorsDto {
    // You can add more specific filters for list creators here if needed
}

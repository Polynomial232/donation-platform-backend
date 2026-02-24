import { IsOptional, IsString } from 'class-validator';

export class SearchCreatorsDto {
    @IsString()
    @IsOptional()
    searchQuery?: string;

    @IsString()
    @IsOptional()
    category?: string;
}

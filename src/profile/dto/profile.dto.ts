import { IsOptional, IsString } from 'class-validator';

export class UpdateSettingsDto {
  @IsString()
  @IsOptional()
  display_name?: string;

  @IsString()
  @IsOptional()
  bio?: string;

  @IsOptional()
  notification_settings?: any;

  @IsOptional()
  social_links?: any;
}

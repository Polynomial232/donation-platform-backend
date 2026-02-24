import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export enum OverlayType {
  ALERT = 'ALERT',
  GOAL = 'GOAL',
  EVENT_LIST = 'EVENT_LIST',
}

export class CreateOverlayDto {
  @IsEnum(OverlayType)
  @IsNotEmpty()
  type: OverlayType;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  config: any;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

export class UpdateOverlayDto {
  @IsEnum(OverlayType)
  @IsOptional()
  type?: OverlayType;

  @IsString()
  @IsOptional()
  name?: string;

  @IsOptional()
  config?: any;

  @IsBoolean()
  @IsOptional()
  is_active?: boolean;
}

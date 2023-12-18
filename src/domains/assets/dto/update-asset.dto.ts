import { IsObject, IsOptional, IsString } from 'class-validator';
export class UpdateAssetDto {
  @IsString()
  @IsOptional()
  Name: string;

  @IsString()
  @IsOptional()
  OriginalName: string;

  @IsString()
  @IsOptional()
  Type: string;

  @IsString()
  @IsOptional()
  Quality: string;

  @IsObject()
  @IsOptional()
  MetaData: object;
}

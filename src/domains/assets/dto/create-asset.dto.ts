import { IsObject, IsOptional, IsString } from 'class-validator';
export class CreateAssetDto {
  @IsString()
  AssetID: string;

  @IsString()
  Name: string;

  @IsString()
  OriginalName: string;

  @IsString()
  Type: string;

  @IsString()
  @IsOptional()
  Quality: string;

  @IsObject()
  @IsOptional()
  MetaData: object;
}

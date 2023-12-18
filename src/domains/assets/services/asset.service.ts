import { Injectable } from '@nestjs/common';
import { AssetRepository } from '../repositories/asset.repository';
import { CreateAssetDto } from '../dto/create-asset.dto';
import { UpdateAssetDto } from '../dto/update-asset.dto';

@Injectable()
export class AssetService {
  constructor(private readonly assetRepo: AssetRepository) {}

  async create(createAssetDto: CreateAssetDto) {
    return await this.assetRepo.create(createAssetDto);
  }

  async findAll() {
    return await this.assetRepo.findAll();
  }

  async find(assetId: string) {
    return await this.assetRepo.find(assetId);
  }

  async update(assetId: string, updateAssetDto: UpdateAssetDto) {
    return await this.assetRepo.update(assetId, updateAssetDto);
  }
}

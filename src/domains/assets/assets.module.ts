import { Module } from '@nestjs/common';
import { AssetService } from './services/asset.service';
import { AssetRepository } from './repositories/asset.repository';
import { AssetTestController } from './controllers/AssetTestController';

@Module({
  controllers: [AssetTestController],
  providers: [AssetService, AssetRepository],
})
export class AssetsModule {}

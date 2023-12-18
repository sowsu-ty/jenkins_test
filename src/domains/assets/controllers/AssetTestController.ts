import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AssetService } from '../services/asset.service';
import { CreateAssetDto } from '../dto/create-asset.dto';
import { UpdateAssetDto } from '../dto/update-asset.dto';
// import { docClient } from 'src/domains/aws/dynamoDBClient';
// import { CreateAssetDto } from '../dto/create-asset.dto';

@Controller('assets')
export class AssetTestController {
  constructor(private readonly assetService: AssetService) {}

  @Get()
  async findAll(): Promise<any> {
    return await this.assetService.findAll();
  }

  @Get(':assetId')
  async find(@Param() params: any): Promise<any> {
    return await this.assetService.find(params.assetId);
  }

  @Post()
  async create(@Body() createAssetDto: CreateAssetDto): Promise<any> {
    return await this.assetService.create(createAssetDto);
  }

  @Put(':assetId')
  async update(
    @Param() params: any,
    @Body() updateAssetDto: UpdateAssetDto,
  ): Promise<any> {
    return await this.assetService.update(params.assetId, updateAssetDto);
  }
}

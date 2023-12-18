import { Module } from '@nestjs/common';
import { ConsumerCmsController } from './controllers/consumer-cms.controller';
import { ConsumerCmsService } from './services/consumer-cms.service';

@Module({
  controllers: [ConsumerCmsController],
  providers: [ConsumerCmsService],
})
export class ConsumerCmsModule {}

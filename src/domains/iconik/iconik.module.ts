import { Module } from '@nestjs/common';
import { IconikListenerController } from './controllers/iconik-listener.controller';
import { IconikWebhookService } from './services/iconik-webhook-process.service';

@Module({
  controllers: [IconikListenerController],
  providers: [IconikWebhookService],
})
export class IconikModule {}

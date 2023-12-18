import { Injectable } from '@nestjs/common';
import { IconikWebhookPayloadDto } from '../dto/iconik-webhook-payload.dto';

@Injectable()
export class IconikWebhookService {
  handleWebhook(payload: IconikWebhookPayloadDto): string {
    console.log(payload);
    return 'got iconik webhook and processed';
  }
}

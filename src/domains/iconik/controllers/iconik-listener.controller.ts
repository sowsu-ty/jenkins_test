import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BaseController } from 'src/common/controllers/base.controller';
import { IconikWebhookService } from '../services/iconik-webhook-process.service';
import { IconikWebhookPayloadDto } from '../dto/iconik-webhook-payload.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('iconik-listener')
export class IconikListenerController extends BaseController {
  constructor(private readonly webhookService: IconikWebhookService) {
    super();
  }

  @Get('test')
  @UseGuards(AuthGuard('basic'))
  test(): string {
    console.log('Iconik Test get');
    return 'Iconik listener is listening';
  }

  @Post('test')
  @UseGuards(AuthGuard('basic'))
  postTest(@Body() payload: any): string {
    console.log('Iconik Test post');
    console.log(JSON.stringify(payload));
    return 'Iconik listener is listening';
  }

  @Post()
  @UseGuards(AuthGuard('basic'))
  webhookTriggered(@Body() payload: IconikWebhookPayloadDto): string {
    this.webhookService.handleWebhook(payload);
    return 'iconik webhook is triggered';
  }
}

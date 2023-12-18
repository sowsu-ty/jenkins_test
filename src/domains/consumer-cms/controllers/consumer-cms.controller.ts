import { Controller } from '@nestjs/common';
import { ConsumerCmsService } from '../services/consumer-cms.service';

@Controller()
export class ConsumerCmsController {
  constructor(private readonly cmsService: ConsumerCmsService) {}
}

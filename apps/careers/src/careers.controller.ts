import { Controller, Get, Logger } from '@nestjs/common';
import { CareersService } from './careers.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common/rmq/rmq.service';

@Controller()
export class CareersController {
  constructor(
    private readonly careersService: CareersService,
    private readonly rmqService: RmqService,
  ) {}
  private readonly logger = new Logger(CareersController.name);
  @Get()
  getHello(): string {
    return this.careersService.getHello();
  }

  @EventPattern('career_parsed')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.logger.log('Career has been parsed.', data);
    this.rmqService.ack(context);
  }
}

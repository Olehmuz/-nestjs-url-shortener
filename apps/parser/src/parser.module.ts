import { Module } from '@nestjs/common';
import { ParserController } from './parser.controller';
import { ParserService } from './parser.service';
import { RmqModule } from '@app/common/rmq/rmq.module';
import { CAREERS_SERVICE } from './constants/services.constants';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_CAREERS_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/parser/.env',
    }),
    RmqModule.register({
      name: CAREERS_SERVICE,
    }),
  ],
  controllers: [ParserController],
  providers: [ParserService],
})
export class ParserModule {}

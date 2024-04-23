import { Module } from '@nestjs/common';
import { CareersController } from './careers.controller';
import { CareersService } from './careers.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { RmqModule } from '@app/common/rmq/rmq.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        RABBIT_MQ_URI: Joi.string().required(),
        RABBIT_MQ_CAREERS_QUEUE: Joi.string().required(),
      }),
      envFilePath: './apps/careers/.env',
    }),
    RmqModule,
  ],
  controllers: [CareersController],
  providers: [CareersService],
})
export class CareersModule {}

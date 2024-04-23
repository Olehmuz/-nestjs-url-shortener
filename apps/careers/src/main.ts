import { NestFactory } from '@nestjs/core';
import { CareersModule } from './careers.module';
import { RmqService } from '@app/common/rmq/rmq.service';

async function bootstrap() {
  const app = await NestFactory.create(CareersModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('CAREERS'));
  await app.startAllMicroservices();
}
bootstrap();

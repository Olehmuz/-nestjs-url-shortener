import { Injectable, Inject } from '@nestjs/common';
import { CAREERS_SERVICE } from './constants/services.constants';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ParserService {
  constructor(@Inject(CAREERS_SERVICE) private careersClient: ClientProxy) {}

  async getHello(): Promise<string> {
    await this.careersClient.emit('career_parsed', {
      message: 'Hello from parser',
    });
    return 'Hello World! Message sent to careers service.';
  }
}

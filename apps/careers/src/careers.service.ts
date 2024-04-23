import { Injectable } from '@nestjs/common';

@Injectable()
export class CareersService {
  getHello(): string {
    return 'Hello World!';
  }
}

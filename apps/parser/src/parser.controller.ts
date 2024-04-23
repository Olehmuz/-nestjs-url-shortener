import { Controller, Get } from '@nestjs/common';
import { ParserService } from './parser.service';

@Controller()
export class ParserController {
  constructor(private readonly parserService: ParserService) {}

  @Get()
  async getHello(): Promise<string> {
    return await this.parserService.getHello();
  }
}

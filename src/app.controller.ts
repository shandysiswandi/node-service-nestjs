import { Controller, Get } from '@nestjs/common';
import { response } from 'src/utils/response';

@Controller()
export class AppController {
  @Get()
  async root(): Promise<any> {
    return await response('welcome to root', []);
  }

  @Get('health')
  async health(): Promise<any> {
    return await response('this service is healthy', {
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage(),
      resourceUsage: process.resourceUsage(),
    });
  }
}

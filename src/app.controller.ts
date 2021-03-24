import { Controller, Get } from '@nestjs/common';
import {
  BaseController,
  BaseRESTResponse,
} from './core/controllers/base.controller';

@Controller()
export class AppController extends BaseController {
  @Get()
  async root(): Promise<BaseRESTResponse> {
    return await this.response('welcome to root');
  }

  @Get('health')
  async health(): Promise<any> {
    return await this.response('this service is healthy', {
      cpuUsage: process.cpuUsage(),
      memoryUsage: process.memoryUsage(),
      resourceUsage: process.resourceUsage(),
    });
  }
}

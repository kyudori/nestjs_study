import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { HealthCheck, HealthCheckService } from '@nestjs/terminus';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly healthCheck: HealthCheckService,
  ) {}

  @Get()
  @HealthCheck()
  getHello() {
    return this.healthCheck.check([]);
  }
}

import { Controller, Get, HttpStatus, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // Внедрение зависимости AppService через конструктор.
  constructor(private readonly appService: AppService) {}

  // Обработка HTTP GET запросов на корневой маршрут.
  @Get()
  @HttpCode(HttpStatus.OK)
  getHello(): string {
    return this.appService.getHello();
  }
}
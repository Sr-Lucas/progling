import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { join } from 'path';
import { Public } from './auth/decorators/public-route.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Public()
  @Get(':filename')
  getImage(@Param('filename') filename: string, @Res() res: Response) {
    const imagePath = join(__dirname, '..', '..', 'public', 'images', filename);

    res.sendFile(imagePath);
  }

  @Public()
  @Get()
  healthCheck() {
    return this.appService.healthCheck();
  }
}

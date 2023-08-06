import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  healthCheck() {
    return {
      message: 'Server is running!',
      date: new Date(),
    };
  }
}

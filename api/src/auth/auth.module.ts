import { Module } from '@nestjs/common';
import * as dotenv from 'dotenv';

import { StudentModule } from 'src/app/student/student.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants/jwt.constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';

dotenv.config();

@Module({
  imports: [
    StudentModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
  exports: [],
})
export class AuthModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { ProgrammingLanguageModule } from './app/programming-language/programming-language.module';
import { ModuleModule } from './app/module/module.module';
import { LevelModule } from './app/level/level.module';
import { StudentModule } from './app/student/student.module';
import { AuthModule } from './auth/auth.module';
import { MiniGameModule } from './app/minigame/minigame.module';

@Module({
  imports: [
    ProgrammingLanguageModule,
    ModuleModule,
    LevelModule,
    StudentModule,
    AuthModule,
    MiniGameModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

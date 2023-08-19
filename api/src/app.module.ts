import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './services/prisma.service';
import { ProgrammingLanguageModule } from './programming-language/programming-language.module';
import { ModuleModule } from './module/module.module';
import { LevelModule } from './level/level.module';
import { ImageController } from './image/image.controller';

@Module({
  imports: [ProgrammingLanguageModule, ModuleModule, LevelModule],
  controllers: [AppController, ImageController],
  providers: [AppService, PrismaService],
})
export class AppModule {}

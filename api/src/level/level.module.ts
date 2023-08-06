import { Module } from '@nestjs/common';
import { LevelService } from './level.service';
import { LevelController } from './level.controller';
import { FindLevelByIdUseCase } from '@application/level/find-by-id/find-level-by-id.usecase';
import { LevelRepository } from '@infrastructure/level/level.repository';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [LevelController],
  providers: [
    {
      provide: PrismaService,
      useClass: PrismaService,
    },

    // REPOSITORIES
    {
      provide: LevelRepository,
      useFactory: (prismaService) => new LevelRepository(prismaService),
      inject: [PrismaService],
    },

    // USE CASES
    {
      provide: FindLevelByIdUseCase,
      useFactory: (levelRepository) =>
        new FindLevelByIdUseCase(levelRepository),
      inject: [LevelRepository],
    },

    // SERVICE
    {
      provide: LevelService,
      useFactory: (findByIdUseCase) => new LevelService(findByIdUseCase),
      inject: [FindLevelByIdUseCase],
    },
  ],
})
export class LevelModule {}

import { Module } from '@nestjs/common';
import { MiniGameService } from './minigame.service';
import { MiniGameController } from './minigame.controller';
import { PrismaService } from 'src/services/prisma.service';
import { MiniGameRepository } from '@infrastructure/minigame/minigame.repository';
import { StudentAnswerRepository } from '@infrastructure/student/student-answer.repository';
import { CreateStudentAnswerUseCase } from '@application/student/student-answer/create/create-student-answer.usecase';

@Module({
  controllers: [MiniGameController],
  providers: [
    {
      provide: PrismaService,
      useClass: PrismaService,
    },

    // REPOSITORIES
    {
      provide: MiniGameRepository,
      useFactory: (prismaService: PrismaService) =>
        new MiniGameRepository(prismaService),
      inject: [PrismaService],
    },
    {
      provide: StudentAnswerRepository,
      useFactory: (prismaService: PrismaService) =>
        new StudentAnswerRepository(prismaService),
      inject: [PrismaService],
    },

    // USE CASES
    {
      provide: CreateStudentAnswerUseCase,
      useFactory: (
        studentAnswerRepository: StudentAnswerRepository,
        miniGameRepository: MiniGameRepository,
      ) =>
        new CreateStudentAnswerUseCase(
          studentAnswerRepository,
          miniGameRepository,
        ),
      inject: [StudentAnswerRepository, MiniGameRepository],
    },

    // SERVICES
    MiniGameService,
  ],
})
export class MiniGameModule {}

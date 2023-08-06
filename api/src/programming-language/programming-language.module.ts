import { Module } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming-language.service';
import { ProgrammingLanguageController } from './programming-language.controller';
import { FindByIdProgrammingLanguageUseCase } from '@application/programming-language/find-by-id/find-by-id-programming-language.usecase';
import { FindAllProgrammingLanguagesUseCase } from '@application/programming-language/find-all/find-all-programming-languages.usecase';
import { ProgrammingLanguageRepository } from '@infrastructure/programming-language/programming-language.repository';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [ProgrammingLanguageController],
  providers: [
    {
      provide: PrismaService,
      useClass: PrismaService,
    },

    // REPOSITORY
    {
      provide: ProgrammingLanguageRepository,
      useFactory: (prismaService) =>
        new ProgrammingLanguageRepository(prismaService),
      inject: [PrismaService],
    },

    // USE CASES
    {
      provide: FindByIdProgrammingLanguageUseCase,
      useFactory: (programmingLanguageRepository) =>
        new FindByIdProgrammingLanguageUseCase(programmingLanguageRepository),
      inject: [ProgrammingLanguageRepository],
    },
    {
      provide: FindAllProgrammingLanguagesUseCase,
      useFactory: (programmingLanguageRepository) =>
        new FindAllProgrammingLanguagesUseCase(programmingLanguageRepository),
      inject: [ProgrammingLanguageRepository],
    },

    // SERVICE
    {
      provide: ProgrammingLanguageService,
      useFactory: (
        findByIdProgrammingLanguageUseCase,
        findAllProgrammingLanguageUseCase,
      ) =>
        new ProgrammingLanguageService(
          findByIdProgrammingLanguageUseCase,
          findAllProgrammingLanguageUseCase,
        ),
      inject: [
        FindByIdProgrammingLanguageUseCase,
        FindAllProgrammingLanguagesUseCase,
      ],
    },
  ],
})
export class ProgrammingLanguageModule {}

import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleController } from './module.controller';
import { FindAllModulesUseCase } from '@application/module/find-all/find-all-modules.usecase';
import { FindModuleByIdUseCase } from '@application/module/find-by-id/find-module-by-id.usecase';
import { FindModulesByProgrammingLanguageIdUseCase } from '@application/module/find-by-programming-language-id/find-modules-by-programming-language-id.usecase';
import { ModuleRepository } from '@infrastructure/module/module.repository';
import { ProgrammingLanguageRepository } from '@infrastructure/programming-language/programming-language.repository';
import { PrismaService } from 'src/services/prisma.service';

@Module({
  controllers: [ModuleController],
  providers: [
    {
      provide: PrismaService,
      useClass: PrismaService,
    },

    // REPOSITORIES
    {
      provide: ModuleRepository,
      useFactory: (prismaService) => new ModuleRepository(prismaService),
      inject: [PrismaService],
    },
    {
      provide: ProgrammingLanguageRepository,
      useFactory: (prismaService) =>
        new ProgrammingLanguageRepository(prismaService),
      inject: [PrismaService],
    },

    // USE CASES
    {
      provide: FindAllModulesUseCase,
      useFactory: (moduleRepository) =>
        new FindAllModulesUseCase(moduleRepository),
      inject: [ModuleRepository],
    },
    {
      provide: FindModuleByIdUseCase,
      useFactory: (moduleRepository) =>
        new FindModuleByIdUseCase(moduleRepository),
      inject: [ModuleRepository],
    },
    {
      provide: FindModulesByProgrammingLanguageIdUseCase,
      useFactory: (programmingLanguageRepository, moduleRepository) =>
        new FindModulesByProgrammingLanguageIdUseCase(
          programmingLanguageRepository,
          moduleRepository,
        ),
      inject: [ProgrammingLanguageRepository, ModuleRepository],
    },

    // SERVICE
    {
      provide: ModuleService,
      useFactory: (
        findAllModulesUseCase,
        findByIdModulesUseCase,
        findByLanguageIdModulesUseCase,
      ) =>
        new ModuleService(
          findAllModulesUseCase,
          findByIdModulesUseCase,
          findByLanguageIdModulesUseCase,
        ),
      inject: [
        FindAllModulesUseCase,
        FindModuleByIdUseCase,
        FindModulesByProgrammingLanguageIdUseCase,
      ],
    },
  ],
})
export class ModuleModule {}

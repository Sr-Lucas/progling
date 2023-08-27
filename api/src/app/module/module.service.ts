import { Injectable } from '@nestjs/common';
import { CreateModuleDto } from './dto/create-module.dto';
import { UpdateModuleDto } from './dto/update-module.dto';
import { FindAllModulesUseCase } from '@application/module/find-all/find-all-modules.usecase';
import { FindModuleByIdUseCase } from '@application/module/find-by-id/find-module-by-id.usecase';
import { FindModulesByProgrammingLanguageIdUseCase } from '@application/module/find-by-programming-language-id/find-modules-by-programming-language-id.usecase';

@Injectable()
export class ModuleService {
  constructor(
    private readonly findAllModulesUseCase: FindAllModulesUseCase,
    private readonly findByIdModulesUseCase: FindModuleByIdUseCase,
    private readonly findByLanguageIdModulesUseCase: FindModulesByProgrammingLanguageIdUseCase,
  ) {}

  findAll(userId: string) {
    return this.findAllModulesUseCase.execute(userId);
  }

  findOne(id: string, userId: string) {
    return this.findByIdModulesUseCase.execute({
      id,
      userId,
    });
  }

  findByLanguageId(id: string, userId: string) {
    return this.findByLanguageIdModulesUseCase.execute({
      programmingLanguageId: id,
      userId,
    });
  }
}

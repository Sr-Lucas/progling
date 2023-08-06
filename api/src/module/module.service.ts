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

  // create(createModuleDto: CreateModuleDto) {
  //   return 'This action adds a new module';
  // }

  findAll() {
    return this.findAllModulesUseCase.execute();
  }

  findOne(id: string) {
    return this.findByIdModulesUseCase.execute(id);
  }

  findByLanguageId(id: string) {
    return this.findByLanguageIdModulesUseCase.execute(id);
  }

  // update(id: number, updateModuleDto: UpdateModuleDto) {
  //   return `This action updates a #${id} module`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} module`;
  // }
}

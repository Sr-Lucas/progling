import { Injectable } from '@nestjs/common';

import { FindAllProgrammingLanguagesUseCase } from '@application/programming-language/find-all/find-all-programming-languages.usecase';
import { FindByIdProgrammingLanguageUseCase } from '@application/programming-language/find-by-id/find-by-id-programming-language.usecase';

@Injectable()
export class ProgrammingLanguageService {
  constructor(
    private readonly findByIdProgrammingLanguageUseCase: FindByIdProgrammingLanguageUseCase,
    private readonly findAllProgrammingLanguageUseCase: FindAllProgrammingLanguagesUseCase,
  ) {}

  findAll(userId: string) {
    return this.findAllProgrammingLanguageUseCase.execute(userId);
  }

  findOne(id: string, userId: string) {
    return this.findByIdProgrammingLanguageUseCase.execute(id, userId);
  }
}

import { Injectable } from '@nestjs/common';
import { FindByIdProgrammingLanguageUseCase } from '../@core/application/programming-language/find-by-id/find-by-id-programming-language.usecase';
import { FindAllProgrammingLanguagesUseCase } from '@application/programming-language/find-all/find-all-programming-languages.usecase';

@Injectable()
export class ProgrammingLanguageService {
  constructor(
    private readonly findByIdProgrammingLanguageUseCase: FindByIdProgrammingLanguageUseCase,
    private readonly findAllProgrammingLanguageUseCase: FindAllProgrammingLanguagesUseCase,
  ) {}

  // create(createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
  //   return 'This action adds a new programmingLanguage';
  // }

  findAll() {
    return this.findAllProgrammingLanguageUseCase.execute();
  }

  findOne(id: string) {
    return this.findByIdProgrammingLanguageUseCase.execute(id);
  }

  // update(id: number, updateProgrammingLanguageDto: UpdateProgrammingLanguageDto) {
  //   return `This action updates a #${id} programmingLanguage`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} programmingLanguage`;
  // }
}

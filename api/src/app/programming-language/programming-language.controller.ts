import { Controller, Get, Param } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming-language.service';

@Controller('programming-languages')
export class ProgrammingLanguageController {
  constructor(
    private readonly programmingLanguageService: ProgrammingLanguageService,
  ) {}

  @Get()
  async findAll() {
    const output = await this.programmingLanguageService.findAll();

    return output.map((programmingLanguage) => programmingLanguage.toJSON());
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const output = await this.programmingLanguageService.findOne(id);

    return output.toJSON();
  }
}

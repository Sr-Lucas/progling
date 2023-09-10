import { Controller, Get, Param } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming-language.service';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('programming-languages')
export class ProgrammingLanguageController {
  constructor(
    private readonly programmingLanguageService: ProgrammingLanguageService,
  ) {}

  @Get()
  async findAll(@User() user: User) {
    const output = await this.programmingLanguageService.findAll(user.sub);

    return output.map((programmingLanguage) => programmingLanguage.toJSON());
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @User() user: User) {
    const output = await this.programmingLanguageService.findOne(id, user.sub);

    return output.toJSON();
  }
}

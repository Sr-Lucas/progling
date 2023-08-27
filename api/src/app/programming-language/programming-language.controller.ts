import { Controller, Get, Param } from '@nestjs/common';
import { ProgrammingLanguageService } from './programming-language.service';

@Controller('programming-languages')
export class ProgrammingLanguageController {
  constructor(
    private readonly programmingLanguageService: ProgrammingLanguageService,
  ) {}

  // @Post()
  // create(@Body() createProgrammingLanguageDto: CreateProgrammingLanguageDto) {
  //   return this.programmingLanguageService.create(createProgrammingLanguageDto);
  // }

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

  // @Patch(':id')
  // update(
  //   @Param('id') id: string,
  //   @Body() updateProgrammingLanguageDto: UpdateProgrammingLanguageDto,
  // ) {
  //   return this.programmingLanguageService.update(
  //     +id,
  //     updateProgrammingLanguageDto,
  //   );
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.programmingLanguageService.remove(+id);
  // }
}

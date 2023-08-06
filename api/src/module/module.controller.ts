import { Controller, Get, Param } from '@nestjs/common';
import { ModuleService } from './module.service';

@Controller()
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  // @Post()
  // create(@Body() createModuleDto: CreateModuleDto) {
  //   return this.moduleService.create(createModuleDto);
  // }

  @Get('modules')
  async findAll() {
    const output = await this.moduleService.findAll();

    return output.map((module) => module.toJSON());
  }

  @Get('modules/:id')
  async findOne(@Param('id') id: string) {
    const output = await this.moduleService.findOne(id);

    return output.toJSON();
  }

  @Get('programming-languages/:id/modules')
  async findByLanguageId(@Param('id') id: string) {
    const output = await this.moduleService.findByLanguageId(id);

    return output.map((module) => module.toJSON());
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
  //   return this.moduleService.update(+id, updateModuleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.moduleService.remove(+id);
  // }
}

import { Controller, Get, Param } from '@nestjs/common';
import { ModuleService } from './module.service';
import { User } from 'src/auth/decorators/user.decorator';

@Controller()
export class ModuleController {
  constructor(private readonly moduleService: ModuleService) {}

  @Get('modules')
  async findAll(@User() user: User) {
    const output = await this.moduleService.findAll(user.sub);

    return output.map((module) => module.toJSON());
  }

  @Get('modules/:id')
  async findOne(@Param('id') id: string, @User() user: User) {
    const output = await this.moduleService.findOne(id, user.sub);

    return output.toJSON();
  }

  @Get('programming-languages/:id/modules')
  async findByLanguageId(@Param('id') id: string, @User() user: User) {
    const output = await this.moduleService.findByLanguageId(id, user.sub);

    return output.map((module) => module.toJSON());
  }
}

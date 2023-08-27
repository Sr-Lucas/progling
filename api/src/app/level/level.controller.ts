import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';
import { User } from 'src/auth/decorators/user.decorator';

@Controller('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get(':id')
  async findOne(@Param('id') id: string, @User() user: User) {
    const output = await this.levelService.findOne(id, user.sub);

    return output.toJSON();
  }
}

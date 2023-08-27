import { Controller, Get, Param } from '@nestjs/common';
import { LevelService } from './level.service';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';

@Controller('levels')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const output = await this.levelService.findOne(id);

    return output.toJSON();
  }
}

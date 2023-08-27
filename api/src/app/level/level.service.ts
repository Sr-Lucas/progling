import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { FindLevelByIdUseCase } from '@application/level/find-by-id/find-level-by-id.usecase';

@Injectable()
export class LevelService {
  constructor(private readonly findByIdUseCase: FindLevelByIdUseCase) {}

  findOne(id: string) {
    return this.findByIdUseCase.execute(id);
  }
}

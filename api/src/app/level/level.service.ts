import { Injectable } from '@nestjs/common';
import { FindLevelByIdUseCase } from '@application/level/find-by-id/find-level-by-id.usecase';

@Injectable()
export class LevelService {
  constructor(private readonly findByIdUseCase: FindLevelByIdUseCase) {}

  findOne(id: string, userId: string) {
    return this.findByIdUseCase.execute({ id, userId });
  }
}

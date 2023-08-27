import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { FindLevelByIdUseCase } from '@application/level/find-by-id/find-level-by-id.usecase';

@Injectable()
export class LevelService {
  constructor(private readonly findByIdUseCase: FindLevelByIdUseCase) {}

  // create(createLevelDto: CreateLevelDto) {
  //   return 'This action adds a new level';
  // }

  // findAll() {
  //   return `This action returns all level`;
  // }

  findOne(id: string) {
    return this.findByIdUseCase.execute(id);
  }

  // update(id: number, updateLevelDto: UpdateLevelDto) {
  //   return `This action updates a #${id} level`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} level`;
  // }
}

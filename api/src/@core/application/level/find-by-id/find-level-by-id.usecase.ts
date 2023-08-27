import { FindLevelByIdDTO } from '@domain/level/dto/level.dto';
import { ILevelRepository } from '@domain/level/repository/level.repository.interface';

export class FindLevelByIdUseCase {
  constructor(private readonly levelRepository: ILevelRepository) {}

  async execute({ id, userId }: FindLevelByIdDTO) {
    const level = await this.levelRepository.findById({
      id,
      userId,
    });

    if (!level) {
      throw 'Level not found';
    }

    return level;
  }
}

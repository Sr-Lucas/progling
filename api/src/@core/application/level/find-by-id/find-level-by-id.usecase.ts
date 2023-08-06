import { ILevelRepository } from '@domain/level/repository/level.repository.interface';

export class FindLevelByIdUseCase {
  constructor(private readonly levelRepository: ILevelRepository) {}

  async execute(id: string) {
    const level = await this.levelRepository.findById(id);

    if (!level) {
      throw 'Level not found';
    }

    return level;
  }
}

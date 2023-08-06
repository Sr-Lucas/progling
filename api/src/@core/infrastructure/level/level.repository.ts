import { Level } from '@domain/level/entity/level.entity';
import { LevelFactory } from '@domain/level/factory/level.factory';
import { ILevelRepository } from '@domain/level/repository/level.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class LevelRepository implements ILevelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Level[]> {
    const levels = await this.prisma.level.findMany({});

    return LevelFactory.convertMany(levels);
  }

  async findById(id: string): Promise<Level | null> {
    const level = await this.prisma.level.findUnique({
      where: {
        id,
      },
      include: {
        miniGames: {
          include: {
            TrueFalseMiniGame: true,
            CodeCompletionMiniGame: {
              include: {
                options: true,
              },
            },
            CodeOrderingMiniGame: {
              include: {
                options: true,
              },
            },
          },
        },
      },
    });

    return LevelFactory.convertOne(level);
  }
}

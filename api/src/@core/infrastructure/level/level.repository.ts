import { FindLevelByIdDTO } from '@domain/level/dto/level.dto';
import { Level } from '@domain/level/entity/level.entity';
import { LevelFactory, LevelType } from '@domain/level/factory/level.factory';
import { ILevelRepository } from '@domain/level/repository/level.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class LevelRepository implements ILevelRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Level[]> {
    const levels = await this.prisma.level.findMany({});

    return LevelFactory.convertMany(levels);
  }

  async findById({ id, userId }: FindLevelByIdDTO): Promise<Level | null> {
    const level = await this.prisma.level.findUnique({
      where: {
        id,
      },
      include: {
        miniGames: {
          orderBy: {
            orderNumber: 'asc',
          },
          include: {
            trueFalseMiniGame: true,
            codeCompletionMiniGame: {
              include: {
                options: true,
              },
            },
            codeOrderingMiniGame: {
              include: {
                options: true,
              },
            },
            markdownMiniGame: true,
          },
        },
      },
    });

    if (!level) return null;

    const levelT = level as LevelType;

    levelT.miniGames?.map(async (miniGame) => {
      const answers = await this.prisma.studentAnswer.findMany({
        where: {
          miniGameId: miniGame.id,
          studentId: userId,
        },
      });

      miniGame.studentAnswers = answers;
    });

    return LevelFactory.convertOne(level);
  }
}

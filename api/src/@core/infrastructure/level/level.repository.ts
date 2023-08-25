import { FindByIdDTO } from '@domain/level/dto/level.dto';
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

  async findById({ id, userId }: FindByIdDTO): Promise<Level | null> {
    const level = await this.prisma.level.findUnique({
      where: {
        id,
      },
      include: {
        miniGames: {
          where: {
            studentAnswers: {
              some: {
                studentId: userId,
              },
            },
          },
          include: {
            studentAnswers: {
              include: {
                codeCompletionMiniGameStudentAnswer: true,
                codeOrderingMiniGameStudentAnswer: {
                  include: {
                    answer: true,
                  },
                },
                trueFalseMiniGameStudentAnswer: true,
              },
            },
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
          },
        },
      },
    });

    return LevelFactory.convertOne(level);
  }
}

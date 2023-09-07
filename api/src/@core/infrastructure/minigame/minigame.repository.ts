import { MiniGame } from '@domain/minigame/entity/minigame.entity';
import { MiniGameFactory } from '@domain/minigame/factory/mini-game.factory';
import { IMiniGameRepository } from '@domain/minigame/repository/minigame.repository.interface';
import { PrismaService } from 'src/services/prisma.service';

export class MiniGameRepository implements IMiniGameRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<MiniGame | null> {
    const miniGame = await this.prisma.miniGame.findUnique({
      where: {
        id,
      },
      include: {
        level: true,
        trueFalseMiniGame: true,
        codeOrderingMiniGame: {
          include: {
            options: true,
          },
        },
        codeCompletionMiniGame: {
          include: {
            options: true,
          },
        },
      },
    });

    return MiniGameFactory.convertOne(miniGame);
  }
}

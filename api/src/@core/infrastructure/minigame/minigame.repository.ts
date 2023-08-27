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
    });

    return MiniGameFactory.convertOne(miniGame);
  }
}

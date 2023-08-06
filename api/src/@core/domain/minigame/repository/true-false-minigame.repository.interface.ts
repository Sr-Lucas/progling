import { MiniGame } from '@prisma/client';

export interface ITrueFalseMiniGameRepository {
  findById(id: string): Promise<MiniGame | null>;
}

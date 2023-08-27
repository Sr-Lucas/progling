import { MiniGame } from '../entity/minigame.entity';

export interface IMiniGameRepository {
  findById(id: string): Promise<MiniGame | null>;
}

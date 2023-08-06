import { Level } from '../entity/level.entity';

export interface ILevelRepository {
  findAll(): Promise<Level[]>;
  findById(id: string): Promise<Level | null>;
}

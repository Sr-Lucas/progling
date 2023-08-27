import { FindLevelByIdDTO } from '../dto/level.dto';
import { Level } from '../entity/level.entity';

export interface ILevelRepository {
  findAll(): Promise<Level[]>;
  findById({}: FindLevelByIdDTO): Promise<Level | null>;
}

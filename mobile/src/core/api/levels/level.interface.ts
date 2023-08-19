import { Level } from "@/core/types/level.types";

export interface ILevelApi {
  findOne(id: string): Promise<Level>;
}
import { Level } from "@/core/types/level.types";
import { ILevelApi } from "./level.interface";
import request from "../request";
import ResponseError from "@/core/error/request.error";

export class LevelApi implements ILevelApi {
  async findOne(id: string): Promise<Level> {
    try {
      const response = await request.get<Level>(`/levels/${id}`);

      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  }
}
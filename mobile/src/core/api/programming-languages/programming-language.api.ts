import { ProgrammingLanguage } from "@/core/types/programming-language.types";
import { IProgrammingLanguageApi } from "./programming-language.interface";
import ResponseError from "@/core/error/request.error";
import request from "../request";

export class ProgrammingLanguageApi implements IProgrammingLanguageApi {
  async findAll(): Promise<ProgrammingLanguage[]> {
    try {
      const response = await request.get<ProgrammingLanguage[]>(`/programming-languages`);

      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  }

  async findOne(id: string): Promise<ProgrammingLanguage> {
    try {
      const response = await request.get<ProgrammingLanguage>(`/programming-languages/${id}`);

      return response.data;
    } catch (e) {
      throw new ResponseError(e);
    }
  }
}
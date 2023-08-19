import { ProgrammingLanguage } from "@/core/types/programming-language.types";

export interface IProgrammingLanguageApi {
  findAll(): Promise<ProgrammingLanguage[]>;
  findOne(id: string): Promise<ProgrammingLanguage>;
}
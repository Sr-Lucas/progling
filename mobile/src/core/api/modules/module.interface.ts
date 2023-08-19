import { Module } from "@/core/types/module.types";

export interface IModuleApi {
  findAll(): Promise<Module[]>;
  findOne(id: string): Promise<Module>;
  findByLanguageId(id: string): Promise<Module[]>;
}
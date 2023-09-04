import {
  CreateStudentRepositoryDTO,
  UpdateStudentRepositoryDTO,
} from '../dto/student.dto';
import { Student } from '../entity/student.entity';

export interface IStudentRepository {
  create({}: CreateStudentRepositoryDTO): Promise<Student | null>;
  findOneByEmail(email: string): Promise<Student | null>;
  findOneById(id: string): Promise<Student | null>;
  update({}: UpdateStudentRepositoryDTO): Promise<Student | null>;
  softDelete(id: string): Promise<void>;
}

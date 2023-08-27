import { CreateStudentDTO, UpdateStudentDTO } from '../dto/student.dto';
import { Student } from '../entity/student.entity';

export interface IStudentRepository {
  create({}: CreateStudentDTO): Promise<Student | null>;
  findOneByEmail(email: string): Promise<Student | null>;
  findOneById(id: string): Promise<Student | null>;
  update({}: UpdateStudentDTO): Promise<Student | null>;
  softDelete(id: string): Promise<void>;
}

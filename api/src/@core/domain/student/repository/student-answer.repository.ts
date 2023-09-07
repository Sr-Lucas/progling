import {
  CreateStudentAnswerDTO,
  DeleteStudentAnswerDTO,
  UpdateStudentAnswerDTO,
} from '../dto/student-answer.dto';
import { StudentAnswer } from '../entity/student-answer.entity';

export type AnswerType = boolean | string | number[];

export interface IStudentAnswerRepository {
  create({}: CreateStudentAnswerDTO): Promise<StudentAnswer | null>;
  findOneById(id: string): Promise<StudentAnswer | null>;
  update({}: UpdateStudentAnswerDTO): Promise<StudentAnswer | null>;
  deleteAllByStudentIdAndLevelId({}: DeleteStudentAnswerDTO): Promise<void>;
}

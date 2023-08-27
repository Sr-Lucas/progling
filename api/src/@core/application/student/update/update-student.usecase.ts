import {
  CreateStudentDTO,
  UpdateStudentDTO,
} from '@domain/student/dto/student.dto';
import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class UpdateStudentUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute({ id, email, name }: UpdateStudentDTO): Promise<Student> {
    const studentExists = await this.studentRepository.findOneById(id);

    if (studentExists) {
      throw new Error('Student already exists');
    }

    const student = await this.studentRepository.update({
      id,
      email,
      name,
    });

    if (!student) {
      throw new Error('Error on create student');
    }

    return student;
  }
}

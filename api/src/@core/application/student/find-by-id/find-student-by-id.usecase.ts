import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class FindStudentByIdUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(id: string): Promise<Student> {
    const student = await this.studentRepository.findOneById(id);

    if (!student) {
      throw new Error('Student not found');
    }

    return student;
  }
}

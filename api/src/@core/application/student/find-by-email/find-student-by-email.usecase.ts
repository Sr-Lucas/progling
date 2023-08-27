import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class FindStudentByEmailUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(email: string): Promise<Student> {
    const student = await this.studentRepository.findOneByEmail(email);

    if (!student) {
      throw new Error('Student not found');
    }

    return student;
  }
}

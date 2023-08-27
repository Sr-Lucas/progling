import { CreateStudentDTO } from '@domain/student/dto/student.dto';
import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class CreateStudentUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute({ email, name, password }: CreateStudentDTO): Promise<Student> {
    const studentExists = await this.studentRepository.findOneByEmail(email);

    if (studentExists) {
      throw new Error('Student already exists');
    }

    const student = await this.studentRepository.create({
      email,
      name,
      password,
    });

    if (!student) {
      throw new Error('Error on create student');
    }

    return student;
  }
}

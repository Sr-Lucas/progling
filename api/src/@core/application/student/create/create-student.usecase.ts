import { DateTime } from 'luxon';
import { CreateStudentDTO } from '@domain/student/dto/student.dto';
import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';
import { IEncrypter } from 'src/@core/adapters/encrypter/encrypter.interface';

export class CreateStudentUseCase {
  constructor(
    private readonly studentRepository: IStudentRepository,
    private readonly encrypter: IEncrypter,
  ) {}

  async execute({ email, name, password }: CreateStudentDTO): Promise<Student> {
    const studentExists = await this.studentRepository.findOneByEmail(email);

    if (studentExists) {
      throw new Error('Student already exists');
    }

    const passwordHash = await this.encrypter.hash(password);

    const student = await this.studentRepository.create({
      email,
      name,
      password: passwordHash,
      hearts: 5,
      heartsRenewAt: DateTime.fromJSDate(new Date())
        .plus({ days: 1 })
        .toJSDate(),
    });

    if (!student) {
      throw new Error('Error on create student');
    }

    return student;
  }
}

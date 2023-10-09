import { DateTime } from 'luxon';
import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class HeartsRenovationUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(userId: string): Promise<Student> {
    const student = await this.studentRepository.findOneById(userId);

    if (!student) {
      throw new Error('Student not found');
    }

    if (student.heartsRenewAt && student.heartsRenewAt > new Date()) {
      return student;
    }

    const nextDay = DateTime.fromJSDate(new Date()).plus({ days: 1 });

    const studentUpdated = await this.studentRepository.update({
      id: student.id!,
      heartsRenewAt: nextDay.toJSDate(),
      hearts: 3,
    });

    if (!studentUpdated) {
      throw new Error('Error updating student');
    }

    return studentUpdated;
  }
}

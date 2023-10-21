import { Student } from '@domain/student/entity/student.entity';
import { IStudentRepository } from '@domain/student/repository/student.repository';
import { DateTime } from 'luxon';

export class StreakHandlerUseCase {
  constructor(private readonly studentRepository: IStudentRepository) {}

  async execute(userId: string): Promise<Student> {
    const student = await this.studentRepository.findOneById(userId);

    if (!student) {
      throw new Error('Student not found');
    }

    const currentDate = new Date();

    if (student.streakRenewAt && student.streakRenewAt > currentDate) {
      return student;
    }

    const shouldReset =
      student.streakResetAt && student.streakResetAt < currentDate;

    const nextDay = DateTime.fromJSDate(currentDate).plus({ days: 1 }).minus({
      hours: currentDate.getHours(),
      minutes: currentDate.getMinutes(),
      seconds: currentDate.getSeconds(),
    });

    const studentUpdated = await this.studentRepository.update({
      id: student.id!,
      streak: shouldReset ? student.streak + 1 : 0,
      streakRenewAt: nextDay.toJSDate(),
      streakResetAt: nextDay.plus({ days: 1 }).toJSDate(),
    });

    if (!studentUpdated) {
      throw new Error('Error updating student');
    }

    return studentUpdated;
  }
}

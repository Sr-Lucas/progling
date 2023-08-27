import { StudentAnswer } from '@domain/student/entity/student-answer.entity';
import { IStudentAnswerRepository } from '@domain/student/repository/student-answer.repository';

export class FindStudentAnswerByIdUseCase {
  constructor(
    private readonly studentAnswerRepository: IStudentAnswerRepository,
  ) {}

  async execute(id: string): Promise<StudentAnswer> {
    const studentAnswer = await this.studentAnswerRepository.findOneById(id);

    if (!studentAnswer) {
      throw new Error('StudentAnswer not found');
    }

    return studentAnswer;
  }
}

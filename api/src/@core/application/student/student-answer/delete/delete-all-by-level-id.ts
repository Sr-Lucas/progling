import { DeleteStudentAnswerDTO } from '@domain/student/dto/student-answer.dto';
import { IStudentAnswerRepository } from '@domain/student/repository/student-answer.repository';

export class DeleteAllStudentAnswerByLevelIdUseCase {
  constructor(
    private readonly studentAnswerRepository: IStudentAnswerRepository,
  ) {}

  async execute({
    levelId,
    studentId,
  }: DeleteStudentAnswerDTO): Promise<boolean> {
    try {
      await this.studentAnswerRepository.deleteAllByStudentIdAndLevelId({
        levelId,
        studentId,
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

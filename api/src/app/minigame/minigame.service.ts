import { Injectable } from '@nestjs/common';
import { RegisterAnswerDTO } from './dto/register-answer.dto';
import { CreateStudentAnswerUseCase } from '@application/student/student-answer/create/create-student-answer.usecase';
import { DeleteAllStudentAnswerByLevelIdUseCase } from '@application/student/student-answer/delete/delete-all-by-level-id';
import { StreakHandlerUseCase } from '../../@core/application/student/streak/streak-handler.usecase';

@Injectable()
export class MiniGameService {
  constructor(
    private readonly createStudentAnswerUseCase: CreateStudentAnswerUseCase,
    private readonly deleteAllAnswerByLevelUseCase: DeleteAllStudentAnswerByLevelIdUseCase,
    private readonly streakHandlerUseCase: StreakHandlerUseCase,
  ) {}

  async registerAnswer(
    id: string,
    studentId: string,
    registerAnswerDTO: RegisterAnswerDTO,
  ) {
    const studentAnswer = await this.createStudentAnswerUseCase.execute({
      answer: registerAnswerDTO.answer,
      miniGameId: id,
      studentId,
    });

    if (studentAnswer?.id) {
      await this.streakHandlerUseCase.execute(studentId);
    }

    return studentAnswer;
  }

  async deleteAllAnswerByLevel(id: string, studentId: string) {
    return this.deleteAllAnswerByLevelUseCase.execute({
      levelId: id,
      studentId,
    });
  }
}

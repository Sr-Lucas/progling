import { Injectable } from '@nestjs/common';
import { RegisterAnswerDTO } from './dto/register-answer.dto';
import { CreateStudentAnswerUseCase } from '@application/student/student-answer/create/create-student-answer.usecase';
import { DeleteAllStudentAnswerByLevelIdUseCase } from '@application/student/student-answer/delete/delete-all-by-level-id';

@Injectable()
export class MiniGameService {
  constructor(
    private readonly createStudentAnswerUseCase: CreateStudentAnswerUseCase,
    private readonly deleteAllAnswerByLevelUseCase: DeleteAllStudentAnswerByLevelIdUseCase,
  ) {}

  async registerAnswer(
    id: string,
    studentId: string,
    registerAnswerDTO: RegisterAnswerDTO,
  ) {
    return this.createStudentAnswerUseCase.execute({
      answer: registerAnswerDTO.answer,
      miniGameId: id,
      studentId,
    });
  }

  async deleteAllAnswerByLevel(id: string, studentId: string) {
    return this.deleteAllAnswerByLevelUseCase.execute({
      levelId: id,
      studentId,
    });
  }
}

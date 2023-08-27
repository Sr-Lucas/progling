import { Injectable } from '@nestjs/common';
import { RegisterAnswerDTO } from './dto/register-answer.dto';
import { CreateStudentAnswerUseCase } from '@application/student/student-answer/create/create-student-answer.usecase';

@Injectable()
export class MiniGameService {
  constructor(
    private readonly createStudentAnswerUseCase: CreateStudentAnswerUseCase,
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
}

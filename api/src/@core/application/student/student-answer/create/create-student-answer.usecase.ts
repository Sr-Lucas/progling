import { MiniGameEnum } from '@domain/minigame/entity/minigame.entity';
import { IMiniGameRepository } from '@domain/minigame/repository/minigame.repository.interface';
import { CreateStudentAnswerDTO } from '@domain/student/dto/student-answer.dto';
import { StudentAnswer } from '@domain/student/entity/student-answer.entity';
import { IStudentAnswerRepository } from '@domain/student/repository/student-answer.repository';
import { IStudentRepository } from '@domain/student/repository/student.repository';

export class CreateStudentAnswerUseCase {
  constructor(
    private readonly studentAnswerRepository: IStudentAnswerRepository,
    private readonly miniGameRepository: IMiniGameRepository,
    private readonly studentRepository: IStudentRepository,
  ) {}

  private isArrayOfIntegers(arr: any): boolean {
    if (!Array.isArray(arr)) {
      return false;
    }

    return arr.every((element) => Number.isInteger(element));
  }

  async execute({
    answer,
    miniGameId,
    studentId,
  }: CreateStudentAnswerDTO): Promise<StudentAnswer | null> {
    const miniGame = await this.miniGameRepository.findById(miniGameId);
    const student = await this.studentRepository.findOneById(studentId);

    if (!miniGame) {
      throw new Error('MiniGame not found');
    }

    if (!student) {
      throw new Error('Student not found');
    }

    if (
      miniGame.stringType === MiniGameEnum.TRUE_FALSE &&
      typeof answer !== 'boolean'
    ) {
      throw new Error('Answer must be boolean');
    }

    if (
      miniGame.stringType === MiniGameEnum.CODE_COMPLETION &&
      typeof answer !== 'string'
    ) {
      throw new Error('Answer must be string');
    }

    if (
      miniGame.stringType === MiniGameEnum.CODE_ORDERING &&
      !this.isArrayOfIntegers(answer)
    ) {
      throw new Error('Answer must be array of integers');
    }

    const isCorrectAnswer = miniGame.isCorrectAnswer(answer);

    if (!miniGame.level) {
      throw new Error('Level not found');
    }

    if (!isCorrectAnswer && student.hearts - 1 === 0) {
      await this.studentAnswerRepository.deleteAllByStudentIdAndLevelId({
        studentId,
        levelId: miniGame.level.id!,
      });

      await this.studentRepository.update({
        id: studentId,
        hearts: student.hearts - 1,
      });

      return null;
    }

    if (!isCorrectAnswer && student.hearts > 0) {
      await this.studentRepository.update({
        id: studentId,
        hearts: student.hearts - 1,
      });
    }

    const studentAnswer = await this.studentAnswerRepository.create({
      answer,
      miniGameId,
      studentId,
    });

    return studentAnswer;
  }
}

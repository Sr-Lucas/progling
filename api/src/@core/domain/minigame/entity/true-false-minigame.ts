import { MiniGame, MiniGameEnum } from './minigame.entity';

export class TrueFalseMiniGame extends MiniGame {
  constructor(
    private _question: string,
    private _correctAnswer: boolean,
    private miniGameId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.TRUE_FALSE, id, createdAt, updatedAt);
  }

  get question(): string {
    return this._question;
  }

  get correctAnswer(): boolean {
    return this._correctAnswer;
  }

  toJSON(): any {
    return {
      id: this.miniGameId,
      question: this.question,
      studentAnswers: this.studentAnswers?.map((studentAnswer) =>
        studentAnswer.toJSON(),
      ),
      type: MiniGameEnum.TRUE_FALSE,
      correctAnswer: this.correctAnswer,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

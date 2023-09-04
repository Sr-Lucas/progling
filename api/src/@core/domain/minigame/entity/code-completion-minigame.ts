import { MiniGame, MiniGameEnum } from './minigame.entity';
import { CodeCompletionMiniGameOption } from '../object-value/code-completion-minigame-option';

export class CodeCompletionMiniGame extends MiniGame {
  constructor(
    private _code: string,
    private _options: CodeCompletionMiniGameOption[],
    private miniGameId: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    super(MiniGameEnum.CODE_COMPLETION, id, createdAt, updatedAt);
  }

  get code(): string {
    return this._code;
  }

  get options(): CodeCompletionMiniGameOption[] {
    return this._options;
  }

  isCorrectAnswer(answer: string | boolean | number[]): boolean {
    const awsr = answer as string;

    return this._options.some(
      (option) => option.isCorrect && option.content === awsr,
    );
  }

  toJSON(): any {
    return {
      id: this.miniGameId,
      code: this.code,
      type: MiniGameEnum.CODE_COMPLETION,
      studentAnswers: this.studentAnswers?.map((studentAnswer) =>
        studentAnswer.toJSON(),
      ),
      options: this.options.map((option) => option.toJSON()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}

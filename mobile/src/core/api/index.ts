import { ModuleApi } from './modules/module.api';
import { LevelApi } from './levels/level.api';
import { AuthApi } from './auth/auth.api';
import { GameApi } from './game/game.api';
import { ProgrammingLanguageApi } from './programming-languages/programming-language.api';

const moduleApi = new ModuleApi();
const levelApi = new LevelApi();
const authApi = new AuthApi();
const gameApi = new GameApi();
const programmingLanguageApi = new ProgrammingLanguageApi();

export { moduleApi, levelApi, authApi, gameApi, programmingLanguageApi };

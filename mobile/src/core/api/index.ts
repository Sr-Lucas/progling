import { ModuleApi } from './modules/module.api';
import { LevelApi } from './levels/level.api';
import { AuthApi } from './auth/auth.api';
import { GameApi } from './game/game.api';

const moduleApi = new ModuleApi();
const levelApi = new LevelApi();
const authApi = new AuthApi();
const gameApi = new GameApi();

export { moduleApi, levelApi, authApi, gameApi };

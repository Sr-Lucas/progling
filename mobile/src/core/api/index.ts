import { ModuleApi } from './modules/module.api';
import { LevelApi } from './levels/level.api';
import { AuthApi } from './auth/auth.api';

const moduleApi = new ModuleApi();
const levelApi = new LevelApi();
const authApi = new AuthApi();

export { moduleApi, levelApi, authApi };

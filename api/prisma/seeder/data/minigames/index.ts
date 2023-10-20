import { module1Mds } from './makdowns/module1-mds';
import { module2Mds } from './makdowns/module2-mds';
import {
  module1CodeCompletionMiniGameOptions,
  module1CodeCompletionMiniGames,
  module1CodeOrderingMiniGameOptions,
  module1CodeOrderingMiniGames,
  module1MarkdownMiniGames,
  module1MiniGames,
  module1TrueFalseMiniGames,
} from './module_1_minigames';
import {
  module2MarkDownMiniGames,
  module2MiniGames,
  module2TrueFalseMiniGames,
} from './module_2_minigames';

export const miniGames = [...module1MiniGames, ...module2MiniGames];

export const trueFalseMiniGames = [
  ...module1TrueFalseMiniGames,
  ...module2TrueFalseMiniGames,
];

export const codeCompletionMiniGames = [...module1CodeCompletionMiniGames];
export const codeCompletionMiniGameOptions = [
  ...module1CodeCompletionMiniGameOptions,
];

export const codeOrderingMiniGames = [...module1CodeOrderingMiniGames];
export const codeOrderingMiniGameOptions = [
  ...module1CodeOrderingMiniGameOptions,
];

export const markDownMiniGames = [
  ...module1MarkdownMiniGames,
  ...module2MarkDownMiniGames,
];

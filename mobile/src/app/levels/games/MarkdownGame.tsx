import { Text } from '@/components/shared/Text';
import { Colors } from '@/core/constants/colors';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useGameStore } from '@/core/store/games/game.store';
import { useModuleStore } from '@/core/store/modules/module.store';
import { router } from 'expo-router';
import { SafeAreaView, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Markdown } from '@ronradtke/react-native-markdown-display';

export default function MarkdownGame() {
  const { programmingLanguage } = useAuthStore();
  const {
    games,
    currentGame,
    setCurrentGame,
    resolveGameNavigationByGameType,
  } = useGameStore();
  const { getModulesByLanguageId } = useModuleStore();

  const continuePressed = () => {
    if (currentGame) {
      const nextGameIndex = games.findIndex((g) => g.id === currentGame.id) + 1;
      const nextGame = games[nextGameIndex];

      if (nextGame) {
        setCurrentGame(nextGame);
      } else {
        programmingLanguage && getModulesByLanguageId(programmingLanguage.id);
        router.back();
        return;
      }

      router.replace(resolveGameNavigationByGameType(currentGame.type));
    }
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{ height: '100%', width: '100%' }}
      >
        <Markdown>{currentGame?.markdown ?? ''}</Markdown>
      </ScrollView>

      <View>
        <TouchableOpacity
          className="rounded-full w-full h-9 flex items-center justify-center"
          style={{
            backgroundColor: Colors.gray[600],
          }}
          onPressOut={() => continuePressed()}
        >
          <Text weight="medium" classNameP="text-white text-base">
            Continuar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

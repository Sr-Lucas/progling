import { Text } from '@/components/shared/Text';
import { Colors } from '@/core/constants/colors';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useGameStore } from '@/core/store/games/game.store';
import { useModuleStore } from '@/core/store/modules/module.store';
import { router } from 'expo-router';
import { SafeAreaView, TouchableOpacity, View, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Markdown from '@ronradtke/react-native-markdown-display';
import { GameHeader } from '@/components/games/Header';
import { useLevelStore } from '@/core/store/levels/level.store';
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

export default function MarkdownGame() {
  const { programmingLanguage } = useAuthStore();
  const {
    games,
    currentGame,
    setCurrentGame,
    resolveGameNavigationByGameType,
    deleteAllAnswersByLevelId,
  } = useGameStore();
  const { level } = useLevelStore();
  const { getModulesByLanguageId } = useModuleStore();

  const continuePressed = () => {
    if (currentGame) {
      const nextGameIndex = games.findIndex((g) => g.id === currentGame.id) + 1;
      const nextGame = games[nextGameIndex];

      console.log('nextGame', nextGame);

      if (nextGame) {
        setCurrentGame(nextGame);
      } else {
        programmingLanguage && getModulesByLanguageId(programmingLanguage.id);
        router.back();
        return;
      }

      console.log(
        currentGame.type,
        resolveGameNavigationByGameType(currentGame.type),
      );

      router.replace(resolveGameNavigationByGameType(nextGame.type));
    }
  };

  return (
    <SafeAreaView className="relative">
      <View className="mb-6 px-5">
        <GameHeader
          onTapClose={() => {
            deleteAllAnswersByLevelId(level.id);
            router.back();
          }}
        />
      </View>

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        className="h-[85%] max-h-[570px] rounded-xl w-full px-7"
      >
        <Markdown style={styles}>{currentGame?.markdown ?? ''}</Markdown>
      </ScrollView>

      <View className="px-5 absolute bottom-0 w-full mb-10">
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

const styles = StyleSheet.create({
  code_block: {
    fontSize: 16,
    fontFamily: 'mplus-regular',
    letterSpacing: 0.4,
    backgroundColor: Colors.gray[200],
    padding: 5,
    borderRadius: 5,
  },
  text: {
    fontFamily: 'mplus-regular',
  },
  paragraph: {
    lineHeight: 23,
    fontSize: 16,
    fontFamily: 'mplus-regular',
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  heading1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  heading2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 10,
    marginTop: 10,
  },
  heading3: {
    marginBottom: 10,
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
  heading4: {},
  heading5: {},
  heading6: {},
  list_item: {
    fontSize: 14,
    marginBottom: 12,
  },
  list_item_number: {
    fontSize: 14,
    marginBottom: 12,
  },
  list_item_bullet: {
    fontSize: 14,
    marginBottom: 12,
  },
});

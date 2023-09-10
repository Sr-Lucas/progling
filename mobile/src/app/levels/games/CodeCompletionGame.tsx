import { Sounds } from '@/core/constants/sounds';
import { useGameStore } from '@/core/store/games/game.store';
import { useLevelStore } from '@/core/store/levels/level.store';
import { useModuleStore } from '@/core/store/modules/module.store';
import { useMemo, useState } from 'react';
import { Audio } from 'expo-av';
import { GameHeader } from '@/components/games/Header';
import { router } from 'expo-router';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { Text } from '@/components/shared/Text';
import { TextCodeCompletion } from '@/components/games/TextCodeCompletion';
import { Images } from '@/core/constants/images';
import clsx from 'clsx';
import { Colors } from '@/core/constants/colors';
import { Option } from '@/core/types/games.types';
import { useAuthStore } from '@/core/store/auth/auth.store';

export default function CodeCompletionGame() {
  const { programmingLanguage } = useAuthStore();
  const {
    games,
    currentGame,
    setCurrentGame,
    hearts,
    setHearts,
    resolveGameNavigationByGameType,
    submitGameAnswer,
    deleteAllAnswersByLevelId,
  } = useGameStore();
  const { level } = useLevelStore();
  const { getModulesByLanguageId } = useModuleStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gameState, setGameState] = useState(0);
  const [userAnswer, setUserAnswer] = useState<Option | null>(null);

  async function continuePressed() {
    if (gameState === 0 && userAnswer !== null) {
      if (userAnswer.id === correctOption?.id) {
        playCorrectSound();
      } else {
        playWrongSound();
        setHearts(hearts - 1);
      }

      setGameState(1);
      setIsSubmitted(true);
      await submitGameAnswer(userAnswer.content);
    } else if (currentGame) {
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
  }

  async function playCorrectSound() {
    const { sound } = await Audio.Sound.createAsync(Sounds.correct, {
      shouldPlay: true,
    });
    sound.setVolumeAsync(0.5);
    sound.setIsLoopingAsync(false);
    sound.setPositionAsync(0);
    await sound.playAsync();
  }

  async function playWrongSound() {
    const { sound } = await Audio.Sound.createAsync(Sounds.wrong, {
      shouldPlay: true,
    });
    sound.setVolumeAsync(0.5);
    sound.setIsLoopingAsync(false);
    sound.setPositionAsync(0);
    await sound.playAsync();
  }

  const correctOption = useMemo(() => {
    return currentGame?.options?.find((o) => o.isCorrect);
  }, [currentGame?.options]);

  return (
    <SafeAreaView className="h-full">
      <View className="flex items-center px-5">
        <GameHeader
          onTapClose={() => {
            deleteAllAnswersByLevelId(level.id);
            router.back();
          }}
        />
      </View>

      <View className="flex items-center justify-center mt-10">
        <Text weight="medium" classNameP="text-md text-center">
          Complete o código abaixo com {'\n'} a opção correta:
        </Text>
      </View>

      <View className="h-72 my-8">
        <ScrollView scrollEnabled={true} persistentScrollbar={true}>
          <TextCodeCompletion>{currentGame?.code ?? ''}</TextCodeCompletion>
        </ScrollView>
      </View>

      <View className="flex items-center justify-center absolute bottom-4 w-full h-[280px] px-6 mb-8">
        <View className="flex flex-row justify-center items-center flex-wrap w-full px-5 ">
          {currentGame?.options?.map((option, index) => (
            <TouchableOpacity
              activeOpacity={userAnswer?.id !== option.id ? 0.8 : 1}
              className={clsx(
                'flex',
                'items-center',
                'justify-center',
                'w-32',
                'h-9',
                'm-2',
                userAnswer?.id === option.id ? 'bg-gray-400' : 'bg-gray-300',
                'rounded-md',
              )}
              key={option.id}
              onPressOut={() => setUserAnswer(option)}
            >
              <Text weight="medium">{option.content}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View className="flex justify-center items-center my-auto">
          <Image
            source={
              correctOption?.id === userAnswer?.id ? Images.check : Images.cross
            }
            className={userAnswer === null || !isSubmitted ? 'hidden' : ''}
          />
        </View>

        <TouchableOpacity
          className="rounded-full w-full h-9 flex items-center justify-center"
          disabled={userAnswer === null}
          style={{
            backgroundColor: isSubmitted
              ? correctOption?.id === userAnswer?.id
                ? Colors.systemColor.success
                : Colors.systemColor.danger
              : Colors.gray[userAnswer === null ? 300 : 600],
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

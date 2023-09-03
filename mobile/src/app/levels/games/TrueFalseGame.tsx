import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { router } from 'expo-router';
import { Audio } from 'expo-av';

import { Text } from '@/components/shared/Text';
import { GameHeader } from '@/components/games/Header';
import { Images } from '@/core/constants/images';
import { useGameStore } from '@/core/store/games/game.store';
import { Sounds } from '@/core/constants/sounds';
import { useMemo, useState } from 'react';
import { Colors } from '@/core/constants/colors';
import { useModuleStore } from '@/core/store/modules/module.store';

export default function TrueFalseGame() {
  const {
    games,
    currentGame,
    setCurrentGame,
    setGames,
    resolveGameNavigationByGameType,
    submitGameAnswer,
  } = useGameStore();
  const { getModulesByLanguageId } = useModuleStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gameState, setGameState] = useState(0);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);

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

  async function continuePressed() {
    if (gameState === 0) {
      if (currentGame?.correctAnswer === userAnswer) {
        playCorrectSound();
      } else {
        playWrongSound();
      }

      setIsSubmitted(true);
      setGameState(1);
    } else if (userAnswer !== null && currentGame) {
      await submitGameAnswer(userAnswer);

      const nextGameIndex = games.findIndex((g) => g.id === currentGame.id) + 1;
      const nextGame = games[nextGameIndex];

      if (nextGame) {
        setCurrentGame(nextGame);
      } else {
        getModulesByLanguageId('7506837e-3f60-4b11-99a0-98f131854999');
        router.back();
        return;
      }
      router.replace(resolveGameNavigationByGameType(currentGame.type));
    }
  }

  const question: string[] = useMemo(() => {
    if (currentGame) {
      return currentGame.question!.split('\\n');
    }
    return [];
  }, [currentGame]);

  return (
    <SafeAreaView>
      <View className="flex items-center px-5 h-full">
        <GameHeader onTapClose={() => router.back()} />

        <View className="h-72 my-24">
          <ScrollView
            scrollEnabled={question.length > 1}
            persistentScrollbar={true}
          >
            {question.map((line, index) => {
              return (
                <Text
                  key={index}
                  weight="medium"
                  classNameP="text-base text-start mb-2"
                >
                  {line.trimStart()}
                </Text>
              );
            })}
          </ScrollView>
        </View>

        <View className="flex items-center justify-center absolute bottom-4 w-full h-[230px]">
          <TouchableOpacity
            disabled={isSubmitted}
            className="w-full h-9 rounded-lg mb-4 flex items-center justify-center"
            style={{
              backgroundColor:
                userAnswer === true
                  ? Colors.systemColor.success
                  : Colors.gray[500],
            }}
            onPressOut={() => !isSubmitted && setUserAnswer(true)}
          >
            <Text weight="medium" classNameP="text-white text-base">
              Verdadeiro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={isSubmitted}
            className="w-full h-9 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor:
                userAnswer === false
                  ? Colors.systemColor.danger
                  : Colors.gray[500],
            }}
            onPressOut={() => !isSubmitted && setUserAnswer(false)}
          >
            <Text weight="medium" classNameP="text-white text-base">
              Falso
            </Text>
          </TouchableOpacity>

          <View className="flex justify-center items-center my-auto">
            <Image
              source={
                currentGame?.correctAnswer === userAnswer
                  ? Images.check
                  : Images.cross
              }
              className={userAnswer === null || !isSubmitted ? 'hidden' : ''}
            />
          </View>

          <TouchableOpacity
            className="rounded-full w-full h-9 flex items-center justify-center"
            disabled={userAnswer === null}
            style={{
              backgroundColor: isSubmitted
                ? currentGame?.correctAnswer === userAnswer
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
      </View>
    </SafeAreaView>
  );
}

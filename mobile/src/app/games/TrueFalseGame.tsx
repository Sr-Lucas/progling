import { SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import { Audio } from 'expo-av';

import { Text } from '@/components/shared/Text';
import { GameHeader } from '@/components/games/Header';
import { Images } from '@/core/constants/images';
import { useGameStore } from '@/core/store/games/game.store';
import { Sounds } from '@/core/constants/sounds';
import { useState } from 'react';
import { Colors } from '@/core/constants/colors';

export default function TrueFalseGame() {
  const {
    games,
    currentGame,
    setCurrentGame,
    setGames,
    resolveGameNavigationByGameType,
  } = useGameStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gameState, setGameState] = useState(0);
  const [userAnswer, setUserAnswer] = useState<boolean | null>(null);

  async function playCorrectSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(Sounds.correct, {
      shouldPlay: true,
    });
    sound.setVolumeAsync(0.5);
    sound.setIsLoopingAsync(false);
    sound.setPositionAsync(0);
    await sound.playAsync();
  }

  async function playWrongSound() {
    console.log('Loading Sound');
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
    } else {
      // TODO: Navigate to next game
    }
  }

  return (
    <SafeAreaView>
      <View className="flex items-center px-5 h-full">
        <GameHeader onTapClose={() => router.back()} />

        <View className="my-32">
          <Text classNameP="text-base text-center">
            {currentGame?.question}
          </Text>
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
                : Colors.gray[300],
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

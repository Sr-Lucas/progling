import { GameHeader } from '@/components/games/Header';
import { TextCodeCompletion } from '@/components/games/TextCodeCompletion';
import { Images } from '@/core/constants/images';
import { Sounds } from '@/core/constants/sounds';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useGameStore } from '@/core/store/games/game.store';
import { useLevelStore } from '@/core/store/levels/level.store';
import { useModuleStore } from '@/core/store/modules/module.store';
import { Option } from '@/core/types/games.types';
import clsx from 'clsx';
import { router } from 'expo-router';
import { Audio } from 'expo-av';
import { useState, useMemo } from 'react';
import { SafeAreaView, View, TouchableOpacity, Image } from 'react-native';
import { Text } from '@/components/shared/Text';
import { compareArrays } from '@/core/utils/functions';
import { Colors } from '@/core/constants/colors';

export default function CodeOrderingGame() {
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
  const [userAnswer, setUserAnswer] = useState<Option[] | null>(null);

  function isAnswerCorrect(userAnswer: Option[], correctAnswer: Option[]) {
    let isCorrect = true;

    userAnswer.forEach((option, index) => {
      if (option.id !== correctAnswer[index].id) {
        isCorrect = false;
      }
    });

    return isCorrect;
  }

  async function continuePressed() {
    if (
      gameState === 0 &&
      userAnswer &&
      correctAnswer &&
      userAnswer.length === correctAnswer.length
    ) {
      console.log(isAnswerCorrect(userAnswer, correctAnswer));

      if (isAnswerCorrect(userAnswer, correctAnswer)) {
        playCorrectSound();
      } else {
        playWrongSound();
        setHearts(hearts - 1);
      }

      setGameState(1);
      setIsSubmitted(true);
      await submitGameAnswer(userAnswer.map((o) => o.order!));
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

      router.replace(resolveGameNavigationByGameType(nextGame.type));
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

  const correctAnswer = useMemo(() => {
    const CA = currentGame?.options
      ?.slice(0)
      ?.sort((a, b) => a.order! - b.order!);
    console.log('CA: ', CA);
    return CA;
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
          Organize o código da forma correta:
        </Text>
      </View>

      <View className="mt-12 px-6">
        <View className="flex flex-row justify-center border-b-[1px] h-14">
          {userAnswer &&
            userAnswer.slice(0, 3).map((option) => (
              <TouchableOpacity
                onPressOut={() =>
                  setUserAnswer(userAnswer.filter((o) => o.id !== option.id))
                }
                className={clsx(
                  'flex',
                  'items-center',
                  'justify-center',
                  'min-w-[32px]',
                  'px-2',
                  'h-9',
                  'bg-gray-300',
                  'm-2',
                  'rounded-md',
                )}
              >
                <Text classNameP="text-center" weight="medium">
                  {option.content}
                </Text>
              </TouchableOpacity>
            ))}
        </View>

        <View className="flex flex-row justify-center border-b-[1px] h-14">
          {userAnswer &&
            userAnswer.slice(3, 6).map((option) => (
              <TouchableOpacity
                onPressOut={() =>
                  setUserAnswer(userAnswer.filter((o) => o.id !== option.id))
                }
                className={clsx(
                  'flex',
                  'items-center',
                  'justify-center',
                  'min-w-[32px]',
                  'px-2',
                  'h-9',
                  'bg-gray-300',
                  'm-2',
                  'rounded-md',
                )}
              >
                <Text classNameP="text-center" weight="medium">
                  {option.content}
                </Text>
              </TouchableOpacity>
            ))}
        </View>

        <View className="flex flex-row justify-center border-b-[1px] h-14">
          {userAnswer &&
            userAnswer.slice(6, 9).map((option) => (
              <TouchableOpacity
                onPressOut={() =>
                  setUserAnswer(userAnswer.filter((o) => o.id !== option.id))
                }
                className={clsx(
                  'flex',
                  'items-center',
                  'justify-center',
                  'min-w-[32px]',
                  'px-2',
                  'h-9',
                  'bg-gray-300',
                  'm-2',
                  'rounded-md',
                )}
              >
                <Text classNameP="text-center" weight="medium">
                  {option.content}
                </Text>
              </TouchableOpacity>
            ))}
        </View>
        <View
          className={`flex flex-row w-full justify-end py-5 ${
            (userAnswer?.length ?? 0) > 0 ? '' : 'hidden'
          }`}
        >
          <TouchableOpacity
            className="px-3 py-2 bg-slate-500 rounded-full"
            onPressOut={() => setUserAnswer([])}
          >
            <Text classNameP="text-white">Resetar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex items-center justify-center absolute bottom-4 w-full h-[280px] px-6 mb-8">
        <View className="flex flex-row justify-center items-center flex-wrap w-full px-5 ">
          {currentGame?.options
            ?.sort(() => 0.5 - Math.random())
            .map((option) => (
              <TouchableOpacity
                className={clsx(
                  'flex',
                  'items-center',
                  'justify-center',
                  'min-w-[32px]',
                  'px-2',
                  'h-9',
                  'bg-gray-300',
                  'm-2',
                  'rounded-md',
                  userAnswer?.includes(option) ? 'hidden' : '',
                )}
                key={option.id}
                onPressOut={() =>
                  setUserAnswer([...(userAnswer ?? []), option])
                }
              >
                <Text classNameP="text-center" weight="medium">
                  {option.content}
                </Text>
              </TouchableOpacity>
            ))}
        </View>

        <View className="flex justify-center items-center my-auto">
          <Image
            source={
              userAnswer &&
              correctAnswer &&
              isAnswerCorrect(userAnswer, correctAnswer)
                ? Images.check
                : Images.cross
            }
            className={!userAnswer || !isSubmitted ? 'hidden' : ''}
          />
        </View>

        <TouchableOpacity
          className="rounded-full w-full h-9 flex items-center justify-center"
          disabled={userAnswer === null}
          style={{
            backgroundColor: isSubmitted
              ? userAnswer &&
                correctAnswer &&
                isAnswerCorrect(userAnswer, correctAnswer)
                ? Colors.systemColor.success
                : Colors.systemColor.danger
              : Colors.gray[
                  userAnswer?.length === correctAnswer?.length ? 600 : 300
                ],
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

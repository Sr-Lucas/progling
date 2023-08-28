import { Text } from '@/components/shared/Text';
import { clsx } from 'clsx';
import { useGlobalSearchParams, router } from 'expo-router';
import React, { useEffect } from 'react';
import { View, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useLevelStore } from '@/core/store/levels/level.store';
import Animated from 'react-native-reanimated';
import { useGameStore } from '@/core/store/games/game.store';

export default function LevelView() {
  const { level, module, getLevelById } = useLevelStore();
  const { setCurrentGame, setGames, resolveGameNavigationByGameType } =
    useGameStore();

  const { id } = useGlobalSearchParams();

  useEffect(() => {
    getLevelById(id as string);
  }, []);

  const handleStartGame = () => {
    if (level.miniGames.length > 0) {
      const currentGame = level.miniGames[0];
      setCurrentGame(currentGame);
      setGames(level.miniGames);
      router.replace(resolveGameNavigationByGameType(currentGame.type));
    }
  };

  return (
    <SafeAreaView className="flex items-center h-full">
      <View className="h-24" />
      <View className="flex flex-row w-full px-8 mt-4 items-center justify-center relative">
        <TouchableOpacity className="mr-6" onPressOut={() => router.back()}>
          <Feather name="arrow-left" size={18} />
        </TouchableOpacity>
        <Text classNameP="text-4xl mr-8 text-center">{module.name}</Text>
      </View>
      <View className="h-14" />

      <Animated.Image
        source={{ uri: module.programmingLanguage.imageUrl }}
        className="w-[170px] h-[170px]"
      />
      <Text classNameP="text-md text-justify px-5 my-auto pb-16">
        {level.description}
      </Text>

      <TouchableOpacity
        className={clsx(
          'flex flex-row items-center justify-center px-5 py-2',
          'bg-secondaryTint-300 rounded-full h-12 w-3/5',
          'absolute bottom-10',
        )}
        onPressOut={() => handleStartGame()}
      >
        <Text classNameP="text-xl text-white">Iniciar</Text>
        <View className="absolute right-3">
          <Feather name="arrow-right" size={20} color="white" />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import { useGameStore } from '@/core/store/games/game.store';
import { useLevelStore } from '@/core/store/levels/level.store';
import { Slot, router } from 'expo-router';
import { useEffect } from 'react';
import { Alert } from 'react-native';

export default function GamesLayout() {
  const { hearts } = useGameStore();

  useEffect(() => {
    if (hearts === 0) {
      Alert.alert('Game Over', 'Você perdeu todas as vidas, tente novamente!');
      router.push('/(tabs)/');
    }
  }, [hearts]);

  return <Slot />;
}

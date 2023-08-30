import { Slot, SplashScreen, Stack, router, useSegments } from 'expo-router';
import '../../global.css';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import request from '@/core/api/request';
import { useAuthStore } from '@/core/store/auth/auth.store';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function () {
  const segments = useSegments();
  const [fontsLoaded, error] = useFonts({
    'mplus-black': require('@/../assets/fonts/MPLUSRounded1c-Black.ttf'),
    'mplus-bold': require('@/../assets/fonts/MPLUSRounded1c-Bold.ttf'),
    'mplus-light': require('@/../assets/fonts/MPLUSRounded1c-Light.ttf'),
    'mplus-medium': require('@/../assets/fonts/MPLUSRounded1c-Medium.ttf'),
    'mplus-regular': require('@/../assets/fonts/MPLUSRounded1c-Regular.ttf'),
    'mplus-thin': require('@/../assets/fonts/MPLUSRounded1c-Thin.ttf'),
    'mplus-extra-bold': require('@/../assets/fonts/MPLUSRounded1c-ExtraBold.ttf'),
  });
  const { token, user, getMe } = useAuthStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    request.defaults.headers.Authorization = `Bearer ${token}`;

    if (!token && !inAuthGroup) {
      router.replace('/(auth)/');
    }

    if (token && inAuthGroup) {
      router.replace('/(tabs)/');
    }
  }, [token, segments]);

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return <Slot />;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}

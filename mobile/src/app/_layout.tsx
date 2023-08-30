import { Slot, SplashScreen, Stack } from 'expo-router';
import '../../global.css';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import { AuthProvider } from '@/core/context/auth.context';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function () {
  const [fontsLoaded, error] = useFonts({
    'mplus-black': require('@/../assets/fonts/MPLUSRounded1c-Black.ttf'),
    'mplus-bold': require('@/../assets/fonts/MPLUSRounded1c-Bold.ttf'),
    'mplus-light': require('@/../assets/fonts/MPLUSRounded1c-Light.ttf'),
    'mplus-medium': require('@/../assets/fonts/MPLUSRounded1c-Medium.ttf'),
    'mplus-regular': require('@/../assets/fonts/MPLUSRounded1c-Regular.ttf'),
    'mplus-thin': require('@/../assets/fonts/MPLUSRounded1c-Thin.ttf'),
    'mplus-extra-bold': require('@/../assets/fonts/MPLUSRounded1c-ExtraBold.ttf'),
  });

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
    <AuthProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </AuthProvider>
  );
}

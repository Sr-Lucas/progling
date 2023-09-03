import { Slot, SplashScreen, Stack, router, useSegments } from 'expo-router';
import '../../global.css';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import request from '@/core/api/request';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { AxiosResponse } from 'axios';

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
  const { token, logOut, refreshAccessToken } = useAuthStore();

  useEffect(() => {
    const inAuthGroup = segments[0] === '(auth)';

    setTimeout(() => {
      if (!token && !inAuthGroup) {
        router.replace('/(auth)/');
      }

      if (token && inAuthGroup) {
        router.replace('/(tabs)/');
      }
    }, 300);
  }, [token, segments]);

  useEffect(() => {
    const requestInterceptor = request.interceptors.request.use(
      async (config) => {
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      (error) => {
        return Promise.reject(error);
      },
    );

    const responseInterceptor = request.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalConfig = error.config;

        if (error.response) {
          if (error.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            await refreshAccessToken();

            return request(originalConfig);
          }

          if (error.response.status === 403) {
            logOut();
          }

          return Promise.reject(error);
        }
      },
    );

    return () => {
      request.interceptors.request.eject(requestInterceptor);
      request.interceptors.response.eject(responseInterceptor);
    };
  }, [token]);

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

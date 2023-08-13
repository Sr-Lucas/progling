import { Slot, Stack } from 'expo-router';
import '../../global.css';
import { useFonts } from 'expo-font';
import AppBar from '@/components/shared/AppBar';

export default function () {
  const [fontsLoaded] = useFonts({
    'mplus-black': require('@/../assets/fonts/MPLUSRounded1c-Black.ttf'),
    'mplus-bold': require('@/../assets/fonts/MPLUSRounded1c-Bold.ttf'),
    'mplus-light': require('@/../assets/fonts/MPLUSRounded1c-Light.ttf'),
    'mplus-medium': require('@/../assets/fonts/MPLUSRounded1c-Medium.ttf'),
    'mplus-regular': require('@/../assets/fonts/MPLUSRounded1c-Regular.ttf'),
    'mplus-thin': require('@/../assets/fonts/MPLUSRounded1c-Thin.ttf'),
    'mplus-extra-bold': require('@/../assets/fonts/MPLUSRounded1c-ExtraBold.ttf'),
  });

  if (!fontsLoaded) return <></>;

  return <Slot />;
}

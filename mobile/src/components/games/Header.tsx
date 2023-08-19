import { Images } from '@/core/constants/images';
import { View, Image } from 'react-native';
import { Life } from './Life';

export function GameHeader() {
  return (
    <View className="flex w-full">
      <View className="mr-auto mt-4">
        <Image
          source={Images.js}
          width={50}
          height={50}
          className="h-12 w-12"
        />
      </View>
      <View className="flex items-center justify-center ">
        <Life hearts={2} />
      </View>
    </View>
  );
}

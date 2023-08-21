import { Images } from '@/core/constants/images';
import { View, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Life } from './Life';
import Animated, {
  SharedTransition,
  withSpring,
} from 'react-native-reanimated';

type Props = {
  onTapClose?: () => void;
};

export function GameHeader({ onTapClose }: Props) {
  return (
    <View className="flex w-full">
      <View className="mr-auto mt-4 flex flex-row items-center justify-between w-full">
        <Animated.Image
          sharedTransitionTag="LevelGameHeaderTS"
          source={Images.js}
          width={50}
          height={50}
          className="h-12 w-12"
        />
        <View onTouchEnd={onTapClose}>
          <Feather name="x" size={25} color="black" />
        </View>
      </View>
      <View className="flex items-center justify-center ">
        <Life hearts={2} />
      </View>
    </View>
  );
}

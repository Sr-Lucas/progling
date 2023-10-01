import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Images } from '@/core/constants/images';
import { Text } from '@/components/shared/Text';
import { useAuthStore } from '@/core/store/auth/auth.store';

export default function AppBar() {
  const { user } = useAuthStore();

  return (
    <LinearGradient
      colors={['#83CFB6', '#1CAE7E']}
      className="flex flex-row items-end justify-evenly h-28 w-full pb-3"
    >
      <View className="flex flex-row items-center">
        <Image source={Images.fire} />
        <Text classNameP="text-white text-base font-medium" weight="medium">
          3
        </Text>
        <View className="w-3" />
        <Image className="mt-1" source={Images.heart} />
        <Text
          classNameP="text-white text-base font-medium pl-1"
          weight="medium"
        >
          {user?.hearts}
        </Text>
      </View>
      <Text classNameP="text-xl text-white" weight="bold">
        Prog:Ling
      </Text>
      <View className="flex flex-row items-center">
        <View className="flex items-end">
          <View className="flex flex-row items-end">
            <Text classNameP="text-xs text-white" weight="light">
              Nv.
            </Text>
            <Text classNameP="text-md text-white" weight="bold">
              2
            </Text>
          </View>
          <View className="w-1" />
          <Text classNameP="text-white" weight="regular">
            {user?.name.split(' ')[0]}
          </Text>
        </View>
        <View className="w-1.5" />
        <View className="rounded-full w-8 h-8 bg-white"></View>
      </View>
    </LinearGradient>
  );
}

import { View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Images } from '@/core/constants/images';
import { Text } from '@/components/shared/Text';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useMemo } from 'react';

export default function AppBar() {
  const { user } = useAuthStore();

  const fireImage = useMemo(() => {
    if (!user) {
      return Images.fire;
    }

    if (user.streak <= 5) {
      return Images.fire;
    } else if (user.streak === 6) {
      return Images.fireGreen;
    } else if (user.streak === 7) {
      return Images.fireCyan;
    } else if (user.streak === 8) {
      return Images.firePurple;
    } else if (user.streak === 9) {
      return Images.firePro;
    }
  }, [user?.streak]);

  return (
    <LinearGradient
      colors={['#83CFB6', '#1CAE7E']}
      className="flex flex-row items-end justify-evenly h-28 w-full pb-3"
    >
      <View className="flex flex-row items-center">
        <Image source={fireImage} className="w-6 h-6" />
        <Text classNameP="text-white text-base font-medium" weight="medium">
          {(user?.streak ?? 0) > 9 ? '9+' : user?.streak}
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

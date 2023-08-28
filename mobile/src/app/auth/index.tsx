import { Text } from '@/components/shared/Text';
import { Images } from '@/core/constants/images';
import clsx from 'clsx';
import { Link } from 'expo-router';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Auth() {
  return (
    <View className="flex items-center h-screen w-full bg-backgroundSecondary">
      <View className="w-full h-[400px] bg-white rounded-ee-xl rounded-b-[100px] relative">
        <View className="absolute h-0 w-full flex items-center top-10">
          <Image source={Images.loginArt} />
        </View>
        <View
          className={clsx(
            'absolute',
            'w-full',
            'flex',
            'items-center',
            'mx-auto',
            'top-64',
          )}
        >
          <Text
            classNameP="text-center text-xl tracking-wider text-[#8EABAF]"
            weight="medium"
          >
            Aprenda a programar da{'\n'} forma divertida!
          </Text>
        </View>
        <TouchableOpacity
          className={clsx(
            'bg-secondary',
            'w-48',
            'h-11',
            'rounded-full',
            'flex',
            'items-center',
            'justify-center',
            'top-[375px]',
            'mx-auto',
          )}
        >
          <Text classNameP="text-white" weight="medium">
            Saiba mais
          </Text>
        </TouchableOpacity>
      </View>

      <SafeAreaView className="mt-auto mb-6 w-full flex justify-end items-center">
        <View className="mb-4">
          <Text classNameP="text-white" weight="medium">
            Entre com:
          </Text>
        </View>

        <TouchableOpacity className="h-10 w-72 bg-white flex flex-row items-center justify-center rounded-lg mb-5">
          <Image source={Images.google} className="h-6 w-6 absolute left-5" />
          <Text weight="medium">Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="h-10 w-72 bg-white flex flex-row items-center justify-center rounded-lg mb-5">
          <Image source={Images.apple} className="h-6 w-6 absolute left-5" />
          <Text weight="medium">Apple</Text>
        </TouchableOpacity>

        <Link href={'/auth/login'} asChild>
          <TouchableOpacity className="opacity-80 h-10 w-72 bg-white flex flex-row items-center justify-center rounded-lg">
            <Text weight="medium">Já possuo uma conta</Text>
          </TouchableOpacity>
        </Link>
      </SafeAreaView>
    </View>
  );
}

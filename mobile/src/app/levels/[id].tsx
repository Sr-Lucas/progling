import { Text } from '@/components/shared/Text';
import { clsx } from 'clsx';
import { Link, useGlobalSearchParams, router } from 'expo-router';
import React from 'react';
import { View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Images } from '@/core/constants/images';

export default function LevelView() {
  const { id } = useGlobalSearchParams();

  return (
    <SafeAreaView className="flex items-center h-full">
      <View className="h-24" />
      <View className="flex flex-row w-full px-8 mt-4 items-center justify-center relative">
        <TouchableOpacity className="mr-6" onPressOut={() => router.back()}>
          <Feather name="arrow-left" size={18} />
        </TouchableOpacity>
        <Text classNameP="text-4xl mr-8">Javascript</Text>
      </View>
      <View className="h-14" />
      <Image
        source={Images.js}
        width={170}
        height={170}
        className="w-[170px] h-[170px]"
      />
      <Text classNameP="text-md text-justify px-5 my-auto pb-16">
        JavaScript permite criar páginas web interativas, desenvolver
        aplicativos tanto para web quanto para dispositivos móveis e construir
        APIs para facilitar a comunicação entre diferentes sistemas e serviços.
        {'\n'}
        {'\n'}É uma linguagem versátil e amplamente utilizada no desenvolvimento
        de soluções digitais modernas.
      </Text>
      <Link href="/games/TrueFalseGame" asChild>
        <TouchableOpacity
          className={clsx(
            'flex flex-row items-center justify-center px-5 py-2',
            'bg-secondaryTint-300 rounded-full h-12 w-3/5',
            'absolute bottom-10',
          )}
        >
          <Text classNameP="text-xl text-white">Iniciar</Text>
          <View className="absolute right-3">
            <Feather name="arrow-right" size={20} color="white" />
          </View>
        </TouchableOpacity>
      </Link>
    </SafeAreaView>
  );
}

import { GameHeader } from '@/components/games/Header';
import { Text } from '@/components/shared/Text';

import { SafeAreaView, Image, View, TouchableOpacity } from 'react-native';
import colors from 'tailwindcss/colors';
import { Images } from '@/core/constants/images';

export default function TrueFalseGame() {
  return (
    <SafeAreaView>
      <View className="flex items-center px-5 h-full">
        <GameHeader />

        <View className="my-32">
          <Text classNameP="text-base text-center">
            Variáveis em JavaScript podem ser declaradas usando as
            palavras-chave "let", "const" e "var"?
          </Text>
        </View>

        <View className="flex items-center justify-center absolute bottom-4 w-full h-[230px]">
          <TouchableOpacity
            className="w-full h-9 rounded-lg mb-4 flex items-center justify-center"
            style={{
              backgroundColor: colors.gray[400],
            }}
          >
            <Text weight="medium" classNameP="text-white text-base">
              Verdadeiro
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-full h-9 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: colors.gray[400],
            }}
          >
            <Text weight="medium" classNameP="text-white text-base">
              Falso
            </Text>
          </TouchableOpacity>

          <View className="flex justify-center items-center my-auto">
            <Image source={Images.check} className="hidden" />
          </View>

          <TouchableOpacity
            className="rounded-full w-full h-9 flex items-center justify-center"
            style={{
              backgroundColor: colors.gray[300],
            }}
          >
            <Text weight="medium" classNameP="text-white text-base">
              Continuar
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

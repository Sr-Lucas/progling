import { Text } from '@/components/shared/Text';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useMemo } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { useProgrammingLanguageStore } from '@/core/store/programming-languages/programming-language.store';

export default function Profile() {
  const { user, logOut } = useAuthStore();
  const { currentLanguage } = useProgrammingLanguageStore();

  const name = useMemo(() => {
    if (user) {
      const [firstName] = user.name.split(' ');
      const lastName = user.name.split(' ').pop();
      return firstName + ' ' + lastName;
    }
  }, [user]);

  return (
    <View>
      <View className="h-full relative">
        <View className="w-full h-72 bg-white shadow-md rounded-b-[56px] items-center justify-center">
          <View className="rounded-full w-36 h-36 bg-black mt-5"></View>
          <View className="justify-center items-center mt-5">
            <Text classNameP="text-2xl font-bold">
              {name ?? 'Olá, seja bem vindo!'}
            </Text>
            <View className="flex-row mb-4">
              <Text classNameP="text-lg text-green-400">
                {currentLanguage?.name}
              </Text>
              <Text classNameP="text-lg ml-4">Nv.</Text>
              <Text classNameP="text-lg" weight="bold">
                2
              </Text>
            </View>
          </View>
        </View>

        <View className="items-center mt-6 px-4 absolute bottom-6 right-0 left-0">
          <TouchableOpacity
            onPressOut={() => logOut()}
            className="shadow-sm bg-white w-full h-12 items-center justify-center rounded-md"
          >
            <Text classNameP="text-red-400 text-xl" weight="medium">
              Sair
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

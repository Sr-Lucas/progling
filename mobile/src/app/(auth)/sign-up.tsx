import { LoginTextField } from '@/components/login/LoginTextField';
import DefaultAppBar from '@/components/shared/DefaultAppBar';
import { Text } from '@/components/shared/Text';
import { Images } from '@/core/constants/images';
import { useAuthStore } from '@/core/store/auth/auth.store';
import clsx from 'clsx';
import { Link } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const { isLoading, signUp } = useAuthStore();

  const onSubmit = async () => {
    if (password !== passwordConfirmation) {
      return alert('As senhas não são iguais');
    }

    await signUp({ name, email, password });
  };

  return (
    <View className="bg-white h-full">
      <ScrollView>
        <DefaultAppBar textSize="xl" textWeight="medium" title="Entre" />
        <SafeAreaView>
          <View className="px-10 pb-4">
            <View className="mb-2">
              <Text classNameP="ml-2 pb-2 pt-2">Nome *:</Text>
              <LoginTextField
                onChange={(value) => setName(value)}
                value={name}
                placeholder="Digite aqui"
                keyboardType="default"
              />
            </View>
            <View className="mb-2">
              <Text classNameP="ml-2 pb-2 pt-2">E-mail *:</Text>
              <LoginTextField
                onChange={(value) => setEmail(value)}
                value={email}
                placeholder="email@mail.com"
                keyboardType="email-address"
              />
            </View>
            <View className="mb-2">
              <Text classNameP="ml-2 pb-2 pt-2">Senha *:</Text>
              <LoginTextField
                onChange={(value) => setPassword(value)}
                value={password}
                placeholder="Digite aqui"
                keyboardType="default"
                isSecure
              />
            </View>
            <View className="mb-2">
              <Text classNameP="ml-2 pb-2 pt-2">Confirmação de senha *:</Text>
              <LoginTextField
                onChange={(value) => setPasswordConfirmation(value)}
                value={passwordConfirmation}
                placeholder="Digite aqui"
                keyboardType="default"
                isSecure
              />
            </View>
            <TouchableOpacity
              className={clsx(
                'bg-secondary',
                'h-11',
                'rounded-full',
                'flex',
                'items-center',
                'justify-center',
                'mx-auto',
                'mb-4',
                'mt-6',
                'transition-all',
                'duration-300',
                isLoading ? 'w-20' : 'w-full',
                isLoading ? 'opacity-50' : 'opacity-100',
              )}
              onPressOut={onSubmit}
            >
              {isLoading ? (
                <Image
                  source={require('@/../assets/gifs/ripple-loading-light.gif')}
                  className="w-12 h-12"
                />
              ) : (
                <Text classNameP="text-white" weight="medium">
                  Cadastrar
                </Text>
              )}
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-center items-center w-screen px-36 hidden">
            <View className="h-[1px] w-full bg-gray-300 mr-3" />
            <Text classNameP="text-grey-500">Entrar com</Text>
            <View className="h-[1px] w-full bg-gray-300 ml-3" />
          </View>

          <View className="flex flex-row justify-center gap-5 mt-3 hidden">
            <TouchableOpacity
              className={clsx(
                'bg-white',
                'w-36',
                'h-16',
                'rounded-lg',
                'flex',
                'flex-row',
                'justify-center',
                'items-center',
                'border-2',
                'border-gray-300',
              )}
            >
              <Image source={Images.google} className="h-4 w-4 mr-3" />
              <Text>Google</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={clsx(
                'bg-white',
                'w-36',
                'h-16',
                'rounded-lg',
                'flex',
                'flex-row',
                'justify-center',
                'items-center',
                'border-2',
                'border-gray-300',
              )}
            >
              <Image source={Images.apple} className="h-4 w-4 mr-3" />
              <Text>Apple</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-center mt-6">
            <Text classNameP="text-grey-500 text-md">
              Já possui uma conta?{' '}
            </Text>
            <Link href={'/(auth)/sign-in'} asChild>
              <TouchableOpacity>
                <Text classNameP="text-black" weight="medium">
                  Entrar
                </Text>
              </TouchableOpacity>
            </Link>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

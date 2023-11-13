import { LoginTextField } from '@/components/login/LoginTextField';
import DefaultAppBar from '@/components/shared/DefaultAppBar';
import { Text } from '@/components/shared/Text';
import { Images } from '@/core/constants/images';
import { useAuthStore } from '@/core/store/auth/auth.store';
import clsx from 'clsx';
import { Link, router } from 'expo-router';
import React from 'react';
import {
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [error, setError] = React.useState<string | null>(null);

  const { isLoading, signIn } = useAuthStore();

  const createAlert = ({ title = 'Alert Title', message = 'My Alert Msg' }) =>
    Alert.alert(title, message, [
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const onSubmit = async () => {
    try {
      await signIn({ email, password });
    } catch (e) {
      console.log(e);
      createAlert({
        title: 'Erro ao entrar',
        message: 'Verifique se os dados estão corretos',
      });

      setError('Senha ou email incorretos!');
    }
  };

  return (
    <View className="bg-white h-full">
      <DefaultAppBar textSize="xl" textWeight="medium" title="Entre" />
      <SafeAreaView>
        <View className="p-10 mt-36">
          <View className="mb-7">
            <LoginTextField
              onChange={setEmail}
              value={email}
              trailingIcon="user"
              placeholder="E-mail"
              keyboardType="email-address"
            />
          </View>
          <View className="mb-6">
            <LoginTextField
              onChange={setPassword}
              value={password}
              trailingIcon="lock"
              placeholder="Senha"
              keyboardType="default"
              error={error}
              isSecure
            />
          </View>
          <View className="flex flex-row justify-end mt-3 mr-2">
            <TouchableOpacity>
              <Text classNameP="text-md text-[#8e8e8e]" weight="regular">
                Esqueci minha senha
              </Text>
            </TouchableOpacity>
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
              'mt-10',
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
                Entrar
              </Text>
            )}
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-center items-center w-screen px-36 hidden">
          <View className="h-[1px] w-full bg-gray-300 mr-3" />
          <Text classNameP="text-grey-500">Entrar com</Text>
          <View className="h-[1px] w-full bg-gray-300 ml-3" />
        </View>

        <View className="flex flex-row justify-center gap-5 mt-6 hidden">
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
          <Text classNameP="text-grey-500 text-md">Não possui uma conta? </Text>
          <Link href={'/(auth)/sign-up'} asChild>
            <TouchableOpacity>
              <Text classNameP="text-black" weight="medium">
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
    </View>
  );
}

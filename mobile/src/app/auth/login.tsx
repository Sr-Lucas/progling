import { LoginTextField } from '@/components/login/LoginTextField';
import DefaultAppBar from '@/components/shared/DefaultAppBar';
import { Text } from '@/components/shared/Text';
import { Images } from '@/core/constants/images';
import clsx from 'clsx';
import React from 'react';
import { View, SafeAreaView, TouchableOpacity, Image } from 'react-native';

export default function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const onSubmit = () => {
    console.log('submit', email, password);
  };

  return (
    <View className="bg-backgroundSecondary h-full">
      <View className="bg-white h-full rounded-b-[100px]">
        <DefaultAppBar textSize="xl" textWeight="medium" title="Entre" />
        <SafeAreaView>
          <View className="p-10 mt-36">
            <View className="mb-7">
              <LoginTextField
                onChange={setEmail}
                value={email}
                icon="user"
                placeholder="E-mail"
                keyboardType="email-address"
              />
            </View>
            <View>
              <LoginTextField
                onChange={setPassword}
                value={password}
                icon="lock"
                placeholder="Senha"
                keyboardType="default"
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
                'w-full',
                'h-11',
                'rounded-full',
                'flex',
                'items-center',
                'justify-center',
                'mx-auto',
                'mt-10',
              )}
              onPressOut={onSubmit}
            >
              <Text classNameP="text-white" weight="medium">
                Entrar
              </Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row justify-center items-center w-screen px-36">
            <View className="h-[1px] w-full bg-gray-300 mr-3" />
            <Text classNameP="text-grey-500">Entrar com</Text>
            <View className="h-[1px] w-full bg-gray-300 ml-3" />
          </View>

          <View className="flex flex-row justify-center gap-5 mt-6">
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
              Não possui uma conta?{' '}
            </Text>
            <TouchableOpacity>
              <Text classNameP="text-black" weight="medium">
                Cadastre-se
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

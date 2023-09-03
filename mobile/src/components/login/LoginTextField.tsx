import { Colors } from '@/core/constants/colors';
import { Images, ImagesSvg } from '@/core/constants/images';
import clsx from 'clsx';
import React from 'react';
import { TextInput, View } from 'react-native';

import User from '@/../assets/images/svgs/user.svg';
import Lock from '@/../assets/images/svgs/lock.svg';
import Eye from '@/../assets/images/svgs/eye.svg';
import EyeHide from '@/../assets/images/svgs/eye-hide.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from '../shared/Text';

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  trailingIcon?: keyof typeof ImagesSvg;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  isSecure?: boolean;
  error?: string | null;
};

export function LoginTextField({
  value,
  onChange,
  placeholder,
  keyboardType,
  trailingIcon: icon,
  isSecure = false,
  error,
}: Props) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  const iconStroke = isFocused
    ? error
      ? Colors.systemColor.danger
      : Colors.systemColor.warning[300]
    : Colors.gray[500];

  return (
    <View className="relative">
      {error && (
        <View className="absolute left-4 top-[70px]">
          <Text classNameP="text-systemColor-danger">{error}</Text>
        </View>
      )}

      <View className={clsx('absolute', 'z-10', 'top-5', icon && 'left-4')}>
        {icon === 'user' && <User stroke={iconStroke} />}
        {icon === 'lock' && <Lock stroke={iconStroke} />}
      </View>

      <TextInput
        value={value}
        onChangeText={onChange}
        passwordRules="minlength: 8; required: lower; required: upper; required: digit;"
        textContentType={icon === 'user' ? 'username' : 'password'}
        secureTextEntry={isSecure && !isPasswordVisible}
        placeholder={placeholder}
        cursorColor={Colors.systemColor.warning[300]}
        focusable={true}
        keyboardType={keyboardType ?? 'default'}
        keyboardAppearance="default"
        autoCapitalize="none"
        autoCorrect={false}
        style={{
          borderColor: isFocused ? Colors.systemColor.warning[300] : '#f1f1f1',
          borderWidth: 1,
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={clsx(
          'bg-[#f1f1f1]',
          'w-full',
          'caret-systemColor-warning-300',
          'h-16',
          'rounded-3xl',
          'p-4',
          icon && 'px-12',
          isSecure ? 'pr-12' : '',
          'focus:border-1',
          'focus:border-systemColor-warning-300',
          error && !isFocused ? 'border-1' : '',
          error && !isFocused ? 'border-systemColor-danger' : '',
        )}
      />

      <View
        className={clsx(
          'absolute',
          'right-4',
          !isSecure ? 'hidden' : '',
          isPasswordVisible ? 'top-[23.2px]' : 'top-[25px]',
        )}
      >
        {isPasswordVisible ? (
          <TouchableOpacity onPressOut={() => setIsPasswordVisible(false)}>
            <EyeHide stroke={Colors.gray[800]} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPressOut={() => setIsPasswordVisible(true)}>
            <Eye stroke={Colors.gray[500]} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

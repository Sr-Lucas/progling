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

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  icon: keyof typeof ImagesSvg;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
};

export function LoginTextField({
  value,
  onChange,
  placeholder,
  keyboardType,
  icon,
}: Props) {
  const [isFocused, setIsFocused] = React.useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View className="relative">
      <View className="absolute z-10 top-5 left-4">
        {icon === 'user' && (
          <User
            stroke={
              isFocused ? Colors.systemColor.warning[300] : Colors.gray[500]
            }
          />
        )}
        {icon === 'lock' && (
          <Lock
            stroke={
              isFocused ? Colors.systemColor.warning[300] : Colors.gray[500]
            }
          />
        )}
      </View>

      <TextInput
        value={value}
        onChangeText={onChange}
        passwordRules="minlength: 8; required: lower; required: upper; required: digit;"
        textContentType={icon === 'user' ? 'username' : 'password'}
        secureTextEntry={icon === 'lock' && !isPasswordVisible}
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
          'px-12',
          'focus:border-1',
          'focus:border-systemColor-warning-300',
        )}
      />

      <View
        className={clsx(
          'absolute',
          'right-4',
          icon === 'user' ? 'hidden' : '',
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

import { Images } from '@/core/constants/images';
import { Image, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { View } from 'react-native';
import { CircularProgressIndicator } from './circular-progress-indicator';
import { Text } from '../shared/Text';

export function CourseHeader() {
  return (
    <View
      className={clsx(
        'flex',
        'flex-row',
        'items-center',
        'px-2',
        'absolute',
        'top-7',
        'w-[280px]',
        'h-[80px]',
        'bg-white',
        'border-[4px]',
        'border-primaryTint-300',
        'rounded-full',
      )}
    >
      <Image
        source={Images.js}
        width={200}
        height={200}
        className="w-10 h-10"
      />
      <View className="mx-2 h-12 w-[2px] bg-secondaryTint-300" />
      <View className="flex flex-col justify-center mb-1">
        <Text weight="bold" classNameP="text-secondaryTint-300 text-lg">
          JAVASCRIPT
        </Text>
        <View className="h-[2px]" />
        <Text weight="regular" classNameP="text-gray-600 text-sm">
          Módulo 1 :: Nv. 3
        </Text>
      </View>

      <CircularProgressIndicator progress={86} />
    </View>
  );
}

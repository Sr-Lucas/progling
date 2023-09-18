import { Images } from '@/core/constants/images';
import { Image, TouchableOpacity } from 'react-native';
import clsx from 'clsx';
import { View } from 'react-native';
import { CircularProgressIndicator } from './circular-progress-indicator';
import { Text } from '../shared/Text';
import { useModuleStore } from '@/core/store/modules/module.store';

type Props = {
  title: string;
  imageUrl: string;
  progress: number;
};

export function CourseHeader({ title, imageUrl, progress }: Props) {
  const { currentLevel, currentModule } = useModuleStore();

  return (
    <View
      className={clsx(
        'flex',
        'flex-row',
        'items-center',
        'px-2',
        'w-full',
        'h-[90px]',
        'bg-white',
        'border-[4px]',
        'border-primaryTint-300',
        'rounded-full',
      )}
    >
      <Image
        source={{ uri: imageUrl }}
        width={200}
        height={200}
        className="w-10 h-10"
      />
      <View className="mx-2 h-12 w-[2px] bg-secondaryTint-300" />
      <View className="flex flex-col justify-center mb-1">
        <Text weight="bold" classNameP="text-secondaryTint-300 text-lg">
          {title}
        </Text>
        <View className="h-[2px]" />
        <Text weight="regular" classNameP="text-gray-600 text-sm">
          Módulo {(currentModule?.order ?? 0) + 1} :: Lvl.{' '}
          {currentLevel?.name.slice(0, 1)}
        </Text>
      </View>

      <CircularProgressIndicator progress={progress} />
    </View>
  );
}

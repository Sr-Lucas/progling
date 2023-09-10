import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { clsx } from 'clsx';
import Svg, { Line } from 'react-native-svg';
import { useLocalSearchParams } from 'expo-router';

type Props = {
  onTap?: () => void;
  status: 'blocked' | 'done' | 'doing';
  showLine?: boolean;
};

export function Level({ status, onTap, showLine = true }: Props) {
  const iconState =
    status === 'blocked' ? 'lock' : status === 'done' ? 'check' : 'play';

  const isCurrent = status === 'doing';
  const isDone = status === 'done';

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPressOut={() => onTap?.()}
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'w-[120px]',
        'h-[63px]',
        {
          'rounded-2xl': isCurrent,
          'rounded-full': !isCurrent,
        },
        isDone ? 'bg-primary' : isCurrent ? 'bg-[#06333A]' : 'bg-[#8EABAF]',
        'border-white',
        'border-[2px]',
        'shadow-sm',
        'relative',
        'overflow-visible',
      )}
    >
      <View
        className={clsx(
          'absolute',
          'bottom-[-80]',
          'h-[130px]',
          'w-1',
          showLine ? 'block' : 'hidden',
        )}
      >
        <Svg>
          <Line
            x1={0}
            y1={0}
            x2={0}
            y2={200}
            stroke={isDone ? '#83CFB6' : isCurrent ? '#06333A' : '#8EABAF'}
            strokeWidth={10}
          />
        </Svg>
      </View>

      <View
        className={clsx(
          'flex',
          'items-center',
          'justify-center',
          'w-[105px]',
          'h-[50px]',
          'rounded-full',
          isDone ? 'bg-primary' : isCurrent ? 'bg-[#06333A]' : 'bg-[#8EABAF]',
          'border-white',
          'border-[1px]',
        )}
      >
        <View className="ml-1">
          <Feather name={iconState} size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

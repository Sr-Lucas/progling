import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { clsx } from 'clsx';
import Svg, { Line } from 'react-native-svg';

type Props = {
  onTap?: () => void;
  isCurrent?: boolean;
  isDone?: boolean;
  showLine?: boolean;
};

export function Level({ isCurrent, isDone, onTap, showLine = true }: Props) {
  const iconState = isDone ? 'check' : isCurrent ? 'play' : 'lock';

  return (
    <View
      onTouchEndCapture={() => onTap?.()}
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
    </View>
  );
}

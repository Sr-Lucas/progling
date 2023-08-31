import React from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import clsx from 'clsx';
import { Text } from '../shared/Text';
import Svg, { Line } from 'react-native-svg';

type props = {
  status: 'doing' | 'done' | 'blocked';
  showLine?: boolean;
  doneLevels: number;
  maxLevels: number;
};

export function Module({
  status,
  doneLevels,
  maxLevels,
  showLine = true,
}: props) {
  console.log('status', status);

  const icon = {
    done: 'check',
    blocked: 'lock',
  };

  return (
    <View
      className={clsx(
        'flex',
        'flex-row',
        'items-center',
        'justify-center',
        'rotate-45',
        'w-[80px]',
        'h-[80px]',
        'rounded-lg',
        status === 'done'
          ? 'bg-primary'
          : status === 'doing'
          ? 'bg-[#06333A]'
          : 'bg-[#8EABAF]',
        'border-white',
        'border-[2px]',
        'shadow-sm',
        'relative',
      )}
    >
      <View
        className={clsx(
          'absolute',
          'bottom-[-60]',
          'h-[100px]',
          'w-1',
          '-rotate-45',
          'right-[-12px]',
          showLine ? 'block' : 'hidden',
        )}
      >
        <Svg>
          <Line
            x1={0}
            y1={0}
            x2={0}
            y2={200}
            stroke={
              status === 'done'
                ? '#83CFB6'
                : status === 'doing'
                ? '#DFEC28'
                : '#ffffff'
            }
            strokeWidth={10}
          />
        </Svg>
      </View>

      <View
        className={clsx(
          'flex',
          'flex-row',
          'items-center',
          'justify-center',
          'rotate-45',
          'w-[70px]',
          'h-[70px]',
          'rounded-full',
          status === 'done'
            ? 'bg-primary'
            : status === 'doing'
            ? 'bg-[#06333A]'
            : 'bg-[#8EABAF]',
          status === 'doing' ? 'border-[#DFEC28]' : 'border-white',
          'border-[2px]',
        )}
      >
        <View className={clsx('mb-0', '-rotate-90')}>
          {status === 'doing' ? (
            <Text weight="medium" classNameP="text-white text-lg">
              {doneLevels}/{maxLevels}
            </Text>
          ) : (
            <Feather name={icon[status] as any} size={20} color="white" />
          )}
        </View>
      </View>
    </View>
  );
}

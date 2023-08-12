import clsx from 'clsx';
import { View } from 'react-native';
import Svg, { Defs, Stop, Circle, LinearGradient } from 'react-native-svg';
import { Text } from '../shared/Text';

type Props = {
  progress: number;
};

export function CircularProgressIndicator({ progress }: Props) {
  const progressPercent = (-160 * (progress - 110)) / 100;

  return (
    <View
      className={clsx(
        'flex',
        'items-center',
        'justify-center',
        'ml-auto',
        'h-[65px] w-[65px]',
        'rounded-full',
        'relative',
      )}
    >
      <Svg
        width={65}
        height={65}
        className={clsx('absolute', 'h-[65px] w-[65px]')}
      >
        <Defs>
          <LinearGradient id="GradientColor">
            <Stop offset={0} stopColor={'#e91e63'} />
            <Stop offset={100} stopColor={'#673ab7'} />
          </LinearGradient>
        </Defs>
        <Circle
          cx={32.5}
          cy={32.5}
          r={26}
          strokeLinecap="square"
          fill="none"
          stroke="#9CD9C5"
          strokeWidth={12}
          strokeDasharray={170}
          strokeDashoffset={-progressPercent + 10}
          transform="rotate(-96 32.5 32.5)"
        />
      </Svg>

      <View
        className={clsx(
          'h-14',
          'w-14',
          'flex',
          'items-center',
          'justify-center',
          'rounded-full',
          'bg-secondaryTint-300',
        )}
      >
        <Text weight="bold" classNameP="text-white">
          {progress}%
        </Text>
      </View>
    </View>
  );
}

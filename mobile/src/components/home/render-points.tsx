import clsx from 'clsx';
import { Dimensions, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

const calculatePoints = (maxWidth: number, maxHeight: number) => {
  const points = [];

  for (let i = 50; i < maxWidth; i += 50) {
    for (let j = 50; j < maxHeight; j += 50) {
      points.push({ x: i, y: j });
    }
  }

  return points;
};

export function RenderGridPoints() {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const points = calculatePoints(screenWidth, screenHeight * 2);

  const renderPoints = () => {
    return (
      <View className="flex flex-row flex-wrap justify-center">
        {points.map((_, index) => (
          <View key={index} className={`m-[30px]`}>
            <Svg width={6} height={6}>
              <Circle
                key={index}
                cx={3}
                cy={3}
                r="2"
                stroke="#C1C1C16E"
                strokeWidth="1"
                fill="#C1C1C16E"
              />
            </Svg>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View
      className={clsx('h-full', `w-full`, 'flex', 'items-center', 'mt-[100px]')}
    >
      {renderPoints()}
    </View>
  );
}

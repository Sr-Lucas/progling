import { View } from 'react-native';
import { Level } from './level';
import { Module } from './module';
import { Link, useNavigation } from 'expo-router';

type Props = {
  levels: {
    isModule: boolean;
    state: string;
    title: string;
  }[];
};

export function RenderLevels({ levels }: Props) {
  const navigation = useNavigation();

  const renderLevels = () => {
    const moduleH = 60;
    const firstModuleMT = moduleH + 100;
    const levelH = 30;
    const levelMT = levelH + 6;
    const moduleMT = moduleH + 18;

    return levels.map((e, index) => {
      let mt = 0;

      if (index === 0 && e.isModule) {
        mt = firstModuleMT;
      } else if (e.isModule) {
        mt = moduleMT;
      } else if (levels[index - 1].isModule) {
        mt = levelH;
      } else {
        mt = levelMT;
      }

      const isLastElement = index === levels.length - 1;

      if (e.isModule) {
        return (
          <View
            key={index}
            className="flex items-center"
            style={{
              marginTop: mt,
              marginBottom: 40,
            }}
          >
            <Module status={e.state as any} showLine={!isLastElement} />
          </View>
        );
      }

      return (
        <View
          key={index}
          className="flex items-center"
          style={{
            marginTop: mt,
          }}
        >
          <Link href={'/levels/17'}>
            <Level
              isCurrent={e.state === 'doing'}
              isDone={e.state === 'done'}
              showLine={!isLastElement}
            />
          </Link>
        </View>
      );
    });
  };

  return <View className="h-full w-full absolute">{renderLevels()}</View>;
}

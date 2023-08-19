import { View } from 'react-native';
import { Level } from './level';
import { Link, useNavigation } from 'expo-router';
import { Module } from '@/core/types/module.types';
import { Module as ModuleC } from './module';

type Props = {
  modules: Module[];
};

export function RenderLevels({ modules }: Props) {
  const renderLevels = () => {
    const firstModuleMT = 180;

    const moduleH = 60;
    const moduleMT = moduleH + 6;
    const levelH = 30;
    const levelMT = levelH + 6;

    return modules.map((module, index) => {
      const levels = module.levels.map((level, index) => {
        const isLast = index === module.levels.length - 1;

        return (
          <View
            key={index}
            className="flex items-center"
            style={{
              marginTop: levelMT,
            }}
          >
            <Link href={`/levels/${level.id}`}>
              <Level isCurrent={false} isDone={false} showLine={!isLast} />
            </Link>
          </View>
        );
      });

      const moduleHasLevels = module.levels.length > 0;

      return (
        <View
          key={index}
          className="flex items-center"
          style={{
            marginTop: index === 0 ? firstModuleMT : moduleMT,
          }}
        >
          <ModuleC status={'blocked'} showLine={moduleHasLevels} />

          {levels}
        </View>
      );
    });
  };

  return <View className="h-full w-full absolute">{renderLevels()}</View>;
}

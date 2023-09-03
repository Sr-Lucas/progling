import { View } from 'react-native';
import { Level as LevelC } from './level';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { Module } from '@/core/types/module.types';
import { Module as ModuleC } from './module';
import { useLevelStore } from '@/core/store/levels/level.store';
import { Level } from '@/core/types/level.types';

type Props = {
  modules: Module[];
};

export function RenderLevels({ modules }: Props) {
  const { setModule } = useLevelStore();

  const navigateToLevel = (level: Level, module: Module) => {
    setModule(module);
    router.push(`/levels/${level.id}`);
  };

  const renderLevels = () => {
    const firstModuleMT = 180;

    const moduleH = 60;
    const moduleMT = moduleH + 6;
    const levelH = 30;
    const levelMT = levelH + 6;

    return modules.map((module, index) => {
      const isFirstModule = index === 0;

      const levels = module.levels.map((level, index) => {
        const isLast = index === module.levels.length - 1;

        let levelStatus: 'blocked' | 'done' | 'doing' = 'blocked';

        if (level.levelProgress > 0) {
          levelStatus = 'done';
        }

        if (
          level.levelProgress === 0 &&
          index > 0 &&
          module.levels[index - 1].levelProgress > 0
        ) {
          levelStatus = 'doing';
        } else if (index == 0 && module.levels[index].levelProgress === 0) {
          levelStatus = 'doing';
        }

        return (
          <View
            key={level.id}
            className="flex items-center"
            style={{
              marginTop: levelMT,
            }}
          >
            <LevelC
              status={levelStatus}
              showLine={!isLast}
              onTap={() =>
                levelStatus === 'doing' && navigateToLevel(level, module)
              }
            />
          </View>
        );
      });

      const moduleHasLevels = module.levels.length > 0;

      let moduleStatus: 'blocked' | 'done' | 'doing' = 'blocked';

      if (module.doneLevels === module.numberOfLevels) {
        moduleStatus = 'done';
      }

      if (module.doneLevels > 0 && module.doneLevels < module.numberOfLevels) {
        moduleStatus = 'doing';
      }

      const isLastModuleDone =
        modules[modules.length - 1].doneLevels ===
        modules[modules.length - 1].numberOfLevels;

      if (!isLastModuleDone) {
        moduleStatus = 'doing';
      }

      return (
        <View
          key={module.id}
          className="flex items-center"
          style={{
            marginTop: index === 0 ? firstModuleMT : moduleMT,
          }}
        >
          <ModuleC
            status={moduleStatus}
            showLine={moduleHasLevels}
            doneLevels={module.doneLevels}
            maxLevels={module.numberOfLevels}
          />
          {levels}
        </View>
      );
    });
  };

  return <View className="h-full w-full absolute">{renderLevels()}</View>;
}

import { View } from 'react-native';
import { Level as LevelC } from './level';
import { Link } from 'expo-router';
import { router } from 'expo-router';
import { Module } from '@/core/types/module.types';
import { Module as ModuleC } from './module';
import { useLevelStore } from '@/core/store/levels/level.store';
import { Level } from '@/core/types/level.types';
import { useModuleStore } from '@/core/store/modules/module.store';
import React, { useEffect, useMemo } from 'react';

type Props = {
  modules: Module[];
};

export function RenderLevels({ modules }: Props) {
  const { setModule } = useLevelStore();
  const { currentModule, setCurrentModule, setCurrentLevel } = useModuleStore();

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

    const myCurrentModule = useMemo(() => {
      return modules.find(
        (module) => module.doneLevels < module.numberOfLevels,
      );
    }, [modules]);

    const myCurrentLevel = useMemo(() => {
      if (myCurrentModule) {
        return myCurrentModule.levels.find(
          (level) => level.levelProgress === 0,
        );
      }
    }, [myCurrentModule]);

    useEffect(() => {
      if (myCurrentModule) {
        setCurrentModule(myCurrentModule);
      }
    }, [myCurrentModule]);

    useEffect(() => {
      if (myCurrentLevel) {
        setCurrentLevel(myCurrentLevel);
      }
    }, [myCurrentLevel]);

    return modules.map((module, index) => {
      const moduleHasLevels = module.levels.length > 0;

      let moduleStatus: 'blocked' | 'done' | 'doing' = 'blocked';

      if (myCurrentModule?.id === module.id) {
        moduleStatus = 'doing';
      } else {
        if (module.doneLevels === module.numberOfLevels) {
          moduleStatus = 'done';
        } else {
          moduleStatus = 'blocked';
        }
      }

      const levels = module.levels.map((level, index) => {
        const isLast = index === module.levels.length - 1;

        let levelStatus: 'blocked' | 'done' | 'doing' = 'blocked';

        if (myCurrentLevel?.id === level.id) {
          levelStatus = 'doing';
        } else {
          if (level.levelProgress > 0) {
            levelStatus = 'done';
          } else {
            levelStatus = 'blocked';
          }
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

import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { clsx } from 'clsx';
import { CourseHeader } from '@/components/home/course-header';
import { StatusBar } from 'expo-status-bar';
import { RenderLevels } from '@/components/home/render-levels';
import { RenderGridPoints } from '@/components/home/render-points';
import { useModuleStore } from '@/core/store/modules/module.store';
import { useEffect } from 'react';

const levels = [
  {
    isModule: true,
    state: 'doing',
    title: 'Módulo 1',
  },
  {
    isModule: false,
    state: 'done',
    title: 'Nível 1',
  },
  {
    isModule: false,
    title: 'Nível 2',
    state: 'doing',
  },
  {
    isModule: false,
    title: 'Nível 3',
    state: 'blocked',
  },
  {
    isModule: true,
    title: 'Modulo 2',
    state: 'blocked',
  },
  {
    isModule: false,
    title: 'Nível 4',
    state: 'blocked',
  },
  {
    isModule: false,
    title: 'Nível 5',
    state: 'blocked',
  },
  {
    isModule: false,
    title: 'Nível 6',
    state: 'blocked',
  },
  {
    isModule: true,
    title: 'Modulo 3',
    state: 'blocked',
  },
  {
    isModule: false,
    title: 'Nível 8',
    state: 'blocked',
  },
  {
    isModule: false,
    title: 'Nível 9',
    state: 'blocked',
  },
];

export default function Home() {
  const { getModulesByLanguageId, modules } = useModuleStore();

  useEffect(() => {
    getModulesByLanguageId('7506837e-3f60-4b11-99a0-98f131854999');
  }, []);

  return (
    <ScrollView className="w-full">
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <View
        className={clsx(
          'flex',
          'w-full',
          'items-center',
          'bg-[#f1f1f1]',
          'relative',
        )}
      >
        <RenderGridPoints />

        <CourseHeader />

        <RenderLevels modules={modules} />
      </View>
    </ScrollView>
  );
}

import {
  RefreshControl,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import { clsx } from 'clsx';
import { CourseHeader } from '@/components/home/course-header';
import { StatusBar } from 'expo-status-bar';
import { RenderLevels } from '@/components/home/render-levels';
import { RenderGridPoints } from '@/components/home/render-points';
import { useModuleStore } from '@/core/store/modules/module.store';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useEffect, useState } from 'react';
import { router, useSegments } from 'expo-router';
import { useProgrammingLanguageStore } from '../../core/store/programming-languages/programming-language.store';

export default function Home() {
  const segments = useSegments();
  const { getModulesByLanguageId, modules, currentModule, setCurrentModule } =
    useModuleStore();
  const { getMe, programmingLanguage, setProgrammingLanguage, token } =
    useAuthStore();
  const { getOneLanguageById } = useProgrammingLanguageStore();

  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const inHomePage = segments[0] === '(tabs)';

    if (inHomePage) {
      if (!currentModule) {
        setCurrentModule(modules[0]);
      }

      loadScreen();
    }
  }, [segments]);

  useEffect(() => {
    if (!programmingLanguage && token) {
      router.push('/languages/');
    }
  }, [programmingLanguage, segments]);

  const refreshScreen = async () => {
    setIsRefreshing(true);
    try {
      await loadScreen();
    } finally {
      setIsRefreshing(false);
    }
  };

  const loadScreen = async () => {
    programmingLanguage &&
      (await getModulesByLanguageId(programmingLanguage.id));
    programmingLanguage &&
      getOneLanguageById(programmingLanguage.id).then((language) => {
        setProgrammingLanguage(language);
      });
    getMe();
  };

  return (
    <ScrollView
      className="w-full"
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={() => refreshScreen()}
        />
      }
    >
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

        <RenderLevels modules={modules} />

        {programmingLanguage && (
          <TouchableOpacity
            activeOpacity={0.8}
            onPressOut={() => router.push('/languages/')}
            className="h-[80px] w-[280px] absolute top-7"
          >
            <CourseHeader
              imageUrl={programmingLanguage.imageUrl}
              title={programmingLanguage.name}
              progress={programmingLanguage.progression}
            />
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

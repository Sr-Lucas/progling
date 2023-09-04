import { TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { clsx } from 'clsx';
import { CourseHeader } from '@/components/home/course-header';
import { StatusBar } from 'expo-status-bar';
import { RenderLevels } from '@/components/home/render-levels';
import { RenderGridPoints } from '@/components/home/render-points';
import { useModuleStore } from '@/core/store/modules/module.store';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useEffect } from 'react';
import { useSegments } from 'expo-router';

export default function Home() {
  const segments = useSegments();
  const { getModulesByLanguageId, modules } = useModuleStore();
  const { getMe } = useAuthStore();

  useEffect(() => {
    const inHomePage = segments[0] === '(tabs)';

    if (inHomePage) {
      getModulesByLanguageId('7506837e-3f60-4b11-99a0-98f131854999');
      getMe();
    }
  }, [segments]);

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

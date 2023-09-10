import { CourseHeader } from '@/components/home/course-header';
import DefaultAppBar from '@/components/shared/DefaultAppBar';
import { Text } from '@/components/shared/Text';
import { useAuthStore } from '@/core/store/auth/auth.store';
import { useProgrammingLanguageStore } from '@/core/store/programming-languages/programming-language.store';
import { ProgrammingLanguage } from '@/core/types/programming-language.types';
import clsx from 'clsx';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { ScrollView, View } from 'react-native';

export default function Languages() {
  const { programmingLanguage, setProgrammingLanguage } = useAuthStore();
  const { languages, currentLanguage, setCurrentLanguage, getAllLanguages } =
    useProgrammingLanguageStore();

  useEffect(() => {
    getAllLanguages().then(() => {
      if (programmingLanguage) {
        setCurrentLanguage(programmingLanguage);
      } else if (languages.length > 0) {
        setCurrentLanguage(languages[0]);
      }
    });
  }, []);

  const handleSelectLanguage = (language: ProgrammingLanguage) => {
    setCurrentLanguage(language);
    setProgrammingLanguage(language);
    router.back();
  };

  return (
    <>
      <DefaultAppBar title={'Linguagens'} textSize={'xl'} textWeight={'bold'} />
      <View className="flex flex-row justify-center py-5">
        <Text classNameP="text-gray-400 text-md text-center" textSize={'lg'}>
          Selecione uma linguagem {'\n'}para aprender:
        </Text>
      </View>
      <ScrollView className="flex px-5">
        {languages.map((language) => (
          <View
            key={language.id}
            className={clsx(
              'mb-4',
              currentLanguage?.id === language.id
                ? 'opacity-100'
                : 'opacity-60',
            )}
            onTouchEndCapture={() => handleSelectLanguage(language)}
          >
            <CourseHeader
              title={language.name}
              imageUrl={language.imageUrl}
              progress={language.progression}
            />
          </View>
        ))}
      </ScrollView>
    </>
  );
}

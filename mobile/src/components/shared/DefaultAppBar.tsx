import { TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Text } from '@/components/shared/Text';
import clsx from 'clsx';
import { router } from 'expo-router';

type Props = {
  title: string;
  textSize: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  textWeight: 'light' | 'regular' | 'medium' | 'bold';
};

export default function DefaultAppBar({ title, textWeight, textSize }: Props) {
  const popPage = () => {
    router.canGoBack() && router.back();
  };

  return (
    <View className="flex flex-row items-end justify-start h-24 mb-4 pl-4">
      <TouchableOpacity onPress={popPage}>
        <Feather name="chevron-left" size={20} color="black" />
      </TouchableOpacity>
      <Text
        classNameP={clsx('mx-auto', 'pr-8', `text-${textSize}`)}
        weight={textWeight}
      >
        {title}
      </Text>
    </View>
  );
}

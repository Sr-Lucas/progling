import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Text } from '@/components/shared/Text';

export default function DefaultAppBar() {
  return (
    <View className="flex flex-row items-end justify-start h-24 mb-4 pl-4">
      <Feather name="chevron-left" size={20} color="black" />
      <Text classNameP="mx-auto pr-8 mb-1">Title</Text>
    </View>
  );
}

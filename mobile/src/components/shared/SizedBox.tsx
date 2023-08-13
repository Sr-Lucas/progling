import { View } from 'react-native';

type Props = {
  width?: number;
  height?: number;
};

export default function SizedBox({ width, height }: Props) {
  return <View style={{ width, height }} />;
}

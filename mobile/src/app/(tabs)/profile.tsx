import { Text, View, StatusBar, StyleSheet } from 'react-native';
import Button from '@/components/Button';

export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        onPress={function (): void {
          console.log('Teste');
        }}
      >
        <Text>Teste</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

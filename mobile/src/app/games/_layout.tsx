import { Stack } from 'expo-router';

export default function GameLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="TrueFalseGame"
        options={{
          headerShown: false,
          animation: 'slide_from_left',
        }}
      />
    </Stack>
  );
}

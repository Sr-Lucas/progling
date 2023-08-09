import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';

export default function TabRoutesLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: (props) => {
            return (
              <MaterialIcons
                name="home"
                size={props.size}
                color={props.focused ? 'black' : props.color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon(props) {
            return (
              <MaterialIcons
                name="person"
                size={props.size}
                color={props.focused ? 'black' : props.color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}

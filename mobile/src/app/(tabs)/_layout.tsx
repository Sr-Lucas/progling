import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import AppBar from '@/components/shared/AppBar';
import { View } from 'react-native';

export default function TabRoutesLayout() {
  return (
    <>
      <AppBar />
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Início',
            tabBarStyle: {},
            tabBarIcon: (props) => {
              return (
                <MaterialIcons
                  name="home"
                  size={props.size}
                  color={props.color}
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
                  color={props.color}
                />
              );
            },
          }}
        />
      </Tabs>
    </>
  );
}

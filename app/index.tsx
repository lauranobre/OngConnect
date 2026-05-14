// o stack screen é a tela, o name é o nome da tela, o component é o componente que vai ser renderizado quando a tela for acessada, e o options é para configurar a tela

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import LoginScreen from "./screens/LoginScreen";
import TabsNavigator from "./screens/TabNavigator";

import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />

      <Stack.Screen
        name="Tabs"
        component={TabsNavigator}
      />
    </Stack.Navigator>
  );
}
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import { RootStackParamList } from "./types/navigation";

const Stack = createNativeStackNavigator<RootStackParamList>();
// gerencia a navegação entre as telas

export default function App() {

  return (

    <Stack.Navigator initialRouteName = "Login"
    screenOptions={{ headerShown: false }}
    >

      <Stack.Screen
        name = "Login"
        component ={LoginScreen}
        options={{ title: 'Acesso', headerShown: false }}
      />
      <Stack.Screen
        name = "Dashboard"
        component ={DashboardScreen}
        options={{ title: 'Dashboard Principal'}}
      />

    </Stack.Navigator>
  );
}

// o stack screen é a tela, o name é o nome da tela, o component é o componente que vai ser renderizado quando a tela for acessada, e o options é para configurar a tela

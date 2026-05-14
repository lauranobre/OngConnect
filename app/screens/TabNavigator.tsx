import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';

import DashboardScreen from './DashboardScreen';
import ExplorarScreen from './ExplorarScreen';
import PerfilScreen from './PerfilScreen';

import Ionicons from '@expo/vector-icons/Ionicons';

import { RootStackParamList } from '../types/navigation';

const Tab = createBottomTabNavigator();

type TabsRouteProp = RouteProp<RootStackParamList, 'Tabs'>;

type Props = {
  route: TabsRouteProp;
};

export default function TabsNavigator({ route }: Props) {
  const { userName, userId } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: '#005CFF',
        tabBarInactiveTintColor: '#64748B',

        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        initialParams={{ userName, userId }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Explorar"
        component={ExplorarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        initialParams={{ userName, userId }}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 65,
    paddingBottom: 8,
    paddingTop: 8,
    backgroundColor: '#FFFFFF',

    borderTopWidth: 0, // Remove the default border

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },

    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 8,
  },
});
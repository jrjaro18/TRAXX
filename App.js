import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const statusBarHeight = Constants.statusBarHeight
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={{ marginTop: statusBarHeight, backgroundColor: '#FFF' }}
        screenOptions={{
          tabBarActiveTintColor: '#000',
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIndicatorStyle: { backgroundColor: '#000', height: 3 },
          tabBarStyle: { backgroundColor: '#FFF' },
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
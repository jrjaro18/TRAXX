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
        style={{paddingTop: statusBarHeight, backgroundColor: '#000400'}}
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: 'white', height: 3,borderBottomLeftRadius: 100, borderBottomRightRadius: 100 },
          tabBarStyle: { backgroundColor: 'black'},
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tasks" component={TaskScreen} />        
      </Tab.Navigator>
    </NavigationContainer>
  );
}
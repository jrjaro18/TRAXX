import React from 'react';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import Constants from 'expo-constants';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const statusBarHeight = Constants.statusBarHeight
  return (
    <TamaguiProvider config={config}>
      <NavigationContainer>
        <Tab.Navigator
          style={{ backgroundColor: '#fff' }}
          screenOptions={{
            tabBarActiveTintColor: '#000',
            tabBarLabelStyle: { fontSize: 14 },
            tabBarIndicatorStyle: { backgroundColor: '#000', height: 3 },
            tabBarStyle: { backgroundColor: '#fff',paddingTop: statusBarHeight },
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Tasks" component={TaskScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </TamaguiProvider>
  );
}
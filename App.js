import React from 'react';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import TaskScreen from './screens/TaskScreen';
import Constants from 'expo-constants';
import AddTaskScreen from './screens/AddTaskScreen';
import { SafeAreaView } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <TamaguiProvider config={config}>
      <SafeAreaView style={{marginTop:Constants.statusBarHeight, flex:1}}>
        <NavigationContainer
          threshold={20}
        >
          <Stack.Navigator>
            <Stack.Screen name="FirstPage" component={FirstPage} options={{ headerShown: false }} />
            <Stack.Screen name="AddTaskScreen" component={AddTaskScreen} options={{
              headerShown: false,
              animation: 'slide_from_right',
              animationDuration: 100,
            }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </TamaguiProvider>
  );
}

const FirstPage = () => {
  const statusBarHeight = Constants.statusBarHeight;
  return (
    <Tab.Navigator
      style={{ backgroundColor: '#fff' }}
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarLabelStyle: { fontSize: 14 },
        tabBarIndicatorStyle: { backgroundColor: '#000' },
        tabBarStyle: { backgroundColor: '#FFF', paddingTop: 0},
        swipeEnabled: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Tasks" component={TaskScreen} />
    </Tab.Navigator>
  )
}
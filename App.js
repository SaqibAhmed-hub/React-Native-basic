import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DashBoardScreen from './src/screens/DashBoardScreen';
import MainScreen from './src/screens/mainScreen';
import HomeScreen from './src/screens/HomeScreen'

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='DashBoard' component={DashBoardScreen}/>
        <Stack.Screen name='Main' component={MainScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import DashBoardScreen from './src/screens/DashBoardScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/mainScreen';


function App() {

  // const Stack = createNativeStackNavigator();
  const Tabs = createMaterialBottomTabNavigator();


  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        activeColor="#000025"
        inactiveColor="#3e2465"
      >
        <Tabs.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen name='DashBoard' component={DashBoardScreen} />
        <Tabs.Screen name='Main' component={MainScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default App;

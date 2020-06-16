import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import DetailScreen from './screens/Detail';
import PointsScreen from './screens/Points';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator 
        headerMode="none"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#f0f0f5',
          }
        }}
      >
        <AppStack.Screen name="Home" component={HomeScreen} />
        <AppStack.Screen name="Detail" component={DetailScreen} />
        <AppStack.Screen name="Points" component={PointsScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
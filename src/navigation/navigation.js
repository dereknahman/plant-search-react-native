import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlantDetailScreen from '../screens/PlantDetailScreen';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

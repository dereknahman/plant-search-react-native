import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PlantDetailScreen from '../screens/PlantDetailScreen';

const Stack = createStackNavigator();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#005031'},
        headerTintColor: 'white',
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'Plant Search',
        }}
      />
      <Stack.Screen
        name="PlantDetail"
        component={PlantDetailScreen}
        options={({route}) => ({title: route.params.plantName})}
      />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

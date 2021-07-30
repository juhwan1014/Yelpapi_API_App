
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import { StyleSheet, Text, View } from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="FeedMe" component={SearchScreen} />
    <Stack.Screen name="FoodDetail" component={FoodDetailScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

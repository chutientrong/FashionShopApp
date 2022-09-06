import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './TabNavigation';
import StackHome from './StackHome';
import StackExplore from './StackExplore';
import StackCart from './StackCart';
import StackOffer from './StackOffer';
import StackAccount from './StackAccount';
const Stack = createStackNavigator();
const StackMain = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
      name="Tab"
      component={TabNavigation}
      options={{ headerShown: false }}
    />
        <Stack.Screen name='StackHome' component={StackHome}></Stack.Screen>
        <Stack.Screen name='StackExplore' component={StackExplore}></Stack.Screen>
        <Stack.Screen name='StackCart' component={StackCart}></Stack.Screen>
        <Stack.Screen name='StackOffer' component={StackOffer}></Stack.Screen>
        <Stack.Screen name='StackAccount' component={StackAccount}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default StackMain
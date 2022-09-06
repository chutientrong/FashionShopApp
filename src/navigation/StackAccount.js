import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
// import ChangeName from '../screens/ChangeName';
import StackProfile from './StackProfile';
// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="StackProfile" component={StackProfile} />
    {/* <Stack.Screen name="ChangName" component={ChangeName} /> */}
  </Stack.Navigator>
);

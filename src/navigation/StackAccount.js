import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
import StackProfile from './StackProfile';
import StackAddress from './StackAddress';
import StackOrder from './StackOrder';
import StackPayment from './StackPayment';
// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="StackProfile" component={StackProfile} />
    <Stack.Screen name="StackAddress" component={StackAddress} />
    <Stack.Screen name="StackOrder" component={StackOrder} />
    <Stack.Screen name="StackPayment" component={StackPayment} />
  </Stack.Navigator>
);

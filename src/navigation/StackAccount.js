import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Account from '../screens/Account';
// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account} />
  </Stack.Navigator>
);

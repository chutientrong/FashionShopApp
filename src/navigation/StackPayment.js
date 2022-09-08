import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Payment from '../screens/Payment';


// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Payment" component={Payment} />

  </Stack.Navigator>
);
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Order from '../screens/Order';
import OrderDetails from '../screens/OrderDetails';

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Order" component={Order} />
    <Stack.Screen name="OrderDetails" component={OrderDetails} />
  </Stack.Navigator>
);

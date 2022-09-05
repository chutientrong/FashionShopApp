import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Cart from '../screens/Cart';
import ShipTo from '../screens/ShipTo';
import PaymentMethod from '../screens/PaymentMethod';
import ChooseCard from '../screens/ChooseCard';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={Cart}   options={{ headerShown: false }}/>
    <Stack.Screen name="ShipTo" component={ShipTo}   options={{ headerShown: false }}/>
    <Stack.Screen name="PaymentMethod" component={PaymentMethod}   options={{ headerShown: false }}/>
    <Stack.Screen name="ChooseCard" component={ChooseCard}   options={{ headerShown: false }}/>
  </Stack.Navigator>
);

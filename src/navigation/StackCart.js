import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Cart from '../screens/Cart';
import ShipTo from '../screens/ShipTo';
import PaymentMethod from '../screens/PaymentMethod';
import ChooseCard from '../screens/ChooseCard';
import PaySuccess from '../screens/PaySuccess';
import Order from '../screens/Order';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Cart" component={Cart}  />
    <Stack.Screen name="ShipTo" component={ShipTo}  />
    <Stack.Screen name="PaymentMethod" component={PaymentMethod}  />
    <Stack.Screen name="ChooseCard" component={ChooseCard}  />
    <Stack.Screen name="PaySuccess" component={PaySuccess}   />
    <Stack.Screen name="Order" component={Order}   />
  </Stack.Navigator>
);

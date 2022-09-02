import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Cart from '../screens/Cart';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={Cart} />
  </Stack.Navigator>
);

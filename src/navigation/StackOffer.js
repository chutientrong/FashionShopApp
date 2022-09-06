import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// s
import Offer from '../screens/Offer';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Offer" component={Offer} />
  </Stack.Navigator>
);

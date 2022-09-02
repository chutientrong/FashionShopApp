import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import HomeScreen from '../screens/Home';
import OfferDetails from '../screens/OfferDetails';
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OfferDetails"
      component={OfferDetails}
      options={{ headerShown: false ,}}
    />
    <Stack.Screen
      name="Favorite"
      component={Favorite}
      options={{ headerShown: false ,}}
    />
  </Stack.Navigator>
);

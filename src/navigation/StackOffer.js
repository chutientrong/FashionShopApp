import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// s
import Offer from '../screens/Offer';
import OfferDetails from '../screens/OfferDetails';

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Offer" component={Offer} />
    <Stack.Screen name="OfferDetails" component={OfferDetails} />
  </Stack.Navigator>
);

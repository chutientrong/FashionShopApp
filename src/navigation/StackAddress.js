import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Address from '../screens/Address';
import AddAddress from '../screens/AddAddress';
import EditAddress from '../screens/EditAddress';
import DeleteAddress from '../screens/DeleteAddress';

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Address" component={Address} />
    <Stack.Screen name="AddAddress" component={AddAddress} />
    <Stack.Screen name="EditAddress" component={EditAddress} />
    <Stack.Screen name="DeleteAddress" component={DeleteAddress} />
  </Stack.Navigator>
);

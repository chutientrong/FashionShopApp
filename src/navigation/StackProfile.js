import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import ChangeName from '../screens/ChangeName';
import ChangeGender from '../screens/ChangeGender';
import ChangePassword from '../screens/ChangePassword';
import ChangePhoneNumber from '../screens/ChangePhoneNumber';
import ChangeEmail from '../screens/ChangeEmail';
import ChangeBirthday from '../screens/ChangeBirthday';
// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="ChangeName" component={ChangeName} />
    <Stack.Screen name="ChangeBirthday" component={ChangeBirthday} />
    <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
    <Stack.Screen name="ChangePhoneNumber" component={ChangePhoneNumber} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="ChangeGender" component={ChangeGender} />
  </Stack.Navigator>
);

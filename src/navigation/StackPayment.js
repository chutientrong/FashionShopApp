import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Payment from '../screens/Payment';
import CreditCardAndDebit from '../screens/CreditCardAndDebit';
import AddCard from '../screens/AddCard';
import CardInfo from '../screens/CardInfo';


// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>

    <Stack.Screen name="Payment" component={Payment} />
    <Stack.Screen name="CreditCardAndDebit" component={CreditCardAndDebit} />
    <Stack.Screen name="AddCard" component={AddCard} />
    <Stack.Screen name="CardInfo" component={CardInfo} />
  </Stack.Navigator>
);
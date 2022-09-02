import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import Explore from '../screens/Explore';
import MultiLevel2Screen from '../screens/MultiLevel2';

// components


const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Explore"
      component={Explore}
      options={{
        headerShown: false,
      }}
    />
    {/* <Stack.Screen
      name="MultiLevel2"
      component={MultiLevel2Screen}
      options={{
        headerTintColor: '#432818',
        headerStyle: { backgroundColor: '#bb9457' },
        title: 'Multi Level 2'
      }}
    /> */}
  </Stack.Navigator>
);
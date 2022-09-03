import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AppNavigator from "./AppNavigator";
import Splash from "../screens/Splash";
import StackAuth from "./StackAuth";

const Stack = createStackNavigator();

export const RootStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="SplashNav" component={Splash}></Stack.Screen>
      <Stack.Screen name="AppNavigator" component={AppNavigator}></Stack.Screen>
    </Stack.Navigator>
  </NavigationContainer>
);

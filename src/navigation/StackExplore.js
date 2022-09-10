import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// screens
import Explore from "../screens/Explore";
import StackSearch from "./StackSearch";


// components

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Explore" component={Explore} />
    <Stack.Screen name="StackSearch" component={StackSearch} />
  </Stack.Navigator>
);

import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchProduct from "../screens/SearchProduct";
import SearchCategory from "../screens/SearchCategory";
import SearchSort from "../screens/SearchSort";
import SearchFilter from "../screens/SearchFilter";

// screens

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchProduct" component={SearchProduct} />
      <Stack.Screen name="SearchCategory" component={SearchCategory} />
      <Stack.Screen name="SearchSort" component={SearchSort} />
      <Stack.Screen name="SearchFilter" component={SearchFilter} />
  </Stack.Navigator>
);
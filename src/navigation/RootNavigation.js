// import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNavigation from "./BottomNavigation";

import Settings from "../screens/Settings";
import TabNavigation from "./TabNavigation";
import ShopNavigator from "./ShopNavigator";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <MainStack.Screen name="ShopNavigation" component={ShopNavigator} />
      {/* <MainStack.Screen name="Home" component={Tabs} /> */}
      <MainStack.Screen name="Setting" component={Settings} />

    </MainStack.Navigator>
  );
}

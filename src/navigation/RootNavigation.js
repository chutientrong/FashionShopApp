// import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
import TabNavigation from "./TabNavigation";

const MainStack = createNativeStackNavigator();

export default function MainStackNavigator() {

  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <MainStack.Screen name="TabNavigation" component={TabNavigation} />
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="Setting" component={Settings} />

    </MainStack.Navigator>
  );
}

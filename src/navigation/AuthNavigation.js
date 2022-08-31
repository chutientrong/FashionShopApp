// import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Register from "../screens/Register";
import Login from "../screens/Login";
import ForgotPassword from "../screens/ForgotPassword";
import TabNavigation from "./TabNavigation";

const Auth = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Auth.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      
      <Auth.Screen
        name="TabNav"
        component={TabNavigation}
        options={{ headerShown: false }}
      />
    </Auth.Navigator>
  );
}

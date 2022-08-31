import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import StackAuth from "./StackAuth";
import Splash from "../screens/Splash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainStackNavigator from "./RootNavigation";
import ShopNavigator from "./ShopNavigator";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  const isAuth = useSelector((state) => state.auth.token);
  const didTryAutoLogin = useSelector((state) => state.auth.didTryAutoLogin);

  const { user, isLogin } = useSelector((state) => state.auth);
  // const isLogin = false;
  function renderScreens() {
    return isLogin ? (
      <Stack.Screen name={"ShopStack"} component={ShopNavigator} />
    ) : (
      <Stack.Screen name={"StackAuth"} component={StackAuth} />
    );
  }
  return (
    // <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name={"Splash"} component={Splash}></Stack.Screen> */}
        {renderScreens()}
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default AppNavigator;

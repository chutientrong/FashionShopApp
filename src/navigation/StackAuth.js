import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword"
import Splash from "../screens/Splash";
import { defaultNavOptions } from "./DefaultNavOptions";
const Stack = createStackNavigator();

export default function StackAuth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
      <Stack.Screen
    name="ForgotPassword"
    component={ForgotPassword}
    options={{ headerShown: false }}
  />
<Stack.Screen
    name="Splash"
    component={Splash}
    options={{ headerShown: false }}
  />

    </Stack.Navigator>
  );
}

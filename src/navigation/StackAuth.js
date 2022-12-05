import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import Register from "../screens/Register";
import ForgotPassword from "../screens/ForgotPassword";
// import StackMain from "./StackMain";
const Stack = createStackNavigator();

export default function StackAuth() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      {/* To Release */}
      {/* <Stack.Screen name="Main" component={StackMain} /> */}
    </Stack.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import StackHome from "./StackHome";
import StackMulti from "./StackMulti";
import StackSettings from "./StackSettings";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={StackHome}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Multi"
      component={StackMulti}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Settings"
      component={StackSettings}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

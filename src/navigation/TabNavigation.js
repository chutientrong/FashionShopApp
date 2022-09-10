import * as React from "react";
// import { Appearance } from 'react-native-appearance';
import {
  BottomTabBar,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { COLORS } from "../constants";
import Icon from "react-native-vector-icons/AntDesign";
import IconUser from "react-native-vector-icons/Feather";

// grabs stacks
import StackHome from "./StackHome";
import StackExplore from "./StackExplore";
import StackOffer from "./StackOffer";
import StackCart from "./StackCart";
import { View } from "react-native";
import StackAccount from "./StackAccount";

const Tab = createBottomTabNavigator();

const CustomTabBar = (props) => {
  return (
    <View>
      <View
        style={{
          // position: 'absolute',
          // bottom: 0,
          left: 0,
          right: 0,
          // height: 20,
          backgroundColor: COLORS.white,
          alignItems: "center",
        }}
      />
      <BottomTabBar {...props.props} />
    </View>
  );
};
const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : "";

  if (routeName === "Home") {
    return true;
  }

  return false;
};
export default () => {
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: "transparent",
          height: Platform.OS == "android" ? 55 : 80,
        },
        tabBarActiveTintColor: COLORS.primaryBlue,
      }}
      tabBar={(props) => <CustomTabBar props={props} />}
    >
      <Tab.Screen
        name="HomeStack"
        component={StackHome}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              color={focused ? COLORS.primaryBlue : COLORS.grey}
              size={24}
            ></Icon>
          ),
          tabBarLabel: "Home",
          // tabBarVisible: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="ExploreStack"
        component={StackExplore}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="search1"
              color={focused ? COLORS.primaryBlue : COLORS.grey}
              size={24}
            ></Icon>
          ),
          tabBarLabel: "Explore",
        }}
      />
      <Tab.Screen
        name="CartStack"
        component={StackCart}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shoppingcart"
              color={focused ? COLORS.primaryBlue : COLORS.grey}
              size={24}
            ></Icon>
          ),
          tabBarLabel: "Cart",
        }}
      />
      <Tab.Screen
        name="OfferStack"
        component={StackOffer}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="tago"
              color={focused ? COLORS.primaryBlue : COLORS.grey}
              size={24}
            ></Icon>
          ),
          tabBarLabel: "Offer",
        }}
      />
      <Tab.Screen
        name="AccountStack"
        component={StackAccount}
        options={{
          tabBarIcon: ({ focused }) => (
            <IconUser
              name="user"
              color={focused ? COLORS.primaryBlue : COLORS.grey}
              size={24}
            ></IconUser>
          ),
          tabBarLabel: "Account",
        }}
      />
    </Tab.Navigator>
  );
};

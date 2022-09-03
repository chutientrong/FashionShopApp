import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import HomeScreen from "../screens/Home";
import OfferDetails from "../screens/OfferDetails";
import Favorite from "../screens/Favorite";
import ProductDetails from "../screens/ProductDetails";
import Notification from "../screens/Notification";
import Reviews from "../screens/Reviews";
import WriteReview from "../screens/WriteReview";
import NotificationOffer from "../screens/NotificationOffer";
import NotificationFeed from "../screens/NotificationFeed";
import NotificationActivity from "../screens/NotificationActivity";

const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OfferDetails"
      component={OfferDetails}
      options={{ headerShown: false, tabBarVisible: false }}
    />
    <Stack.Screen
      name="Favorite"
      component={Favorite}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="ProductDetails"
      component={ProductDetails}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name="Reviews"
      component={Reviews}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="WriteReview"
      component={WriteReview}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Notification"
      component={Notification}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NotificationOffer"
      component={NotificationOffer}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NotificationFeed"
      component={NotificationFeed}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="NotificationActivity"
      component={NotificationActivity}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

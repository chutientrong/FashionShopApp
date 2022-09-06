import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// screens
import Home from "../screens/Home";
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
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="OfferDetails" component={OfferDetails} />
    <Stack.Screen name="Favorite" component={Favorite} />
    <Stack.Screen name="ProductDetails" component={ProductDetails} />
    <Stack.Screen name="Reviews" component={Reviews} />
    <Stack.Screen name="WriteReview" component={WriteReview} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="NotificationOffer" component={NotificationOffer} />
    <Stack.Screen name="NotificationFeed" component={NotificationFeed} />
    <Stack.Screen
      name="NotificationActivity"
      component={NotificationActivity}
    />
  </Stack.Navigator>
);

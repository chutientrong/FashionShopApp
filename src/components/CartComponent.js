import { View, Text, ScrollView } from "react-native";
import React from "react";
import CartCard from "./CartCard";

const Cart = ({ data }) => {
  // console.log("cart = ", data);
  return (
    <View style={{ }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map(( item, index ) => (
          <View key={index}>
            <CartCard data={item}></CartCard>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Cart;

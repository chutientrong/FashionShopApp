import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants";

const StarRating = (props) => {
  // This array will contain our star tags. We will include this
  // array between the view tag.
  let stars = [];
  // Loop 5 times
  for (var i = 1; i <= 5; i++) {
    // set the path to filled stars
    
    let color = COLORS.yellow;
    // If ratings is lower, set the path to unfilled stars
    if (i > props.rating) {
      color = COLORS.grey;
    }

    stars.push(
      <Ionicons
        name={"ios-star"}
        size={10}
        style={{
          color: color,
        }}
        key={i}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      {stars}
      {/* <Text style={{ fontSize: 12, marginLeft: 5, color: COLORS.neutralLight }}>
        ({props.reviews})
      </Text> */}
    </View>
  );
};

export default StarRating;

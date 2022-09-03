import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS } from "../constants";

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
        size={props.size}
        style={{
          color: color,
        }}
        key={i}
      />
    );
  }

  return (
    <View style={{ flexDirection: "row", marginTop: 4 }}>
      {stars}
      {props.showReview ? (
        <View style={{ marginLeft: 8 ,flexDirection: "row", }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "700",
              color: COLORS.grey,
              textAlign:'center',
              marginTop: 2 ,
              letterSpacing: 0.5,
              ...FONTS.fontPopinBold
            }}
          >
            {props.rating}
          </Text>
          <Text
            style={{ fontSize: 10, marginLeft: 3 , marginTop: 2 , color: COLORS.grey ,textAlign:'center',letterSpacing: 0.5}}
          >
            ({props.reviews} Reviews)
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default StarRating;

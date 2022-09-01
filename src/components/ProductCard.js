import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const ProductCard = ({ image, name, cost, preCost, discount, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 140,
        // height: 238,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        marginRight: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.neutralLight,
        padding:16
      }}
      onpress={onPress}
    >
      <Image source={image} style={{ height: 110, width: 110,borderRadius:5 }}></Image>
      <View style={{}}>
        <Text
        numberOfLines={2}
          style={{
            color: COLORS.neutralDark,
            marginTop: 8,
            fontSize: 12,
            height: 36,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            lineHeight: 18,
            textAlignVertical: "top",
            textAlign: "left",
            
          }}
        >
          {name}
        </Text>
        <Text
          style={{
            color: COLORS.primaryBlue,
            marginTop: 8,
            fontSize: 12,
            height: 22,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            textAlignVertical: "top",
            textAlign: "left",
          }}
        >
          ${cost}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{
              color: COLORS.grey,
              marginTop: 8,
              fontSize: 10,
              height: 15,
              fontWeight: "400",
              ...FONTS.fontPopinRegular,
              textAlignVertical: "top",
              textDecorationLine: "line-through",
              textAlign: "left",
            }}
          >
            ${preCost}
          </Text>

          <Text
            style={{
              color: COLORS.primaryRed,
              marginTop: 8,
              marginLeft: 8,
              fontSize: 10,
              height: 15,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              textAlignVertical: "top",
            }}
          >
            {discount}% Off
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

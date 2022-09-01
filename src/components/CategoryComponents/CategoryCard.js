import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

const CategoryCard = ({ image, title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: 70,
        height: 108,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 8,
      }}
      onPress={onPress}
    >
      <Image source={image} style={{ height: 70, width: 70 }}></Image>
      <Text
        style={{
          color: COLORS.grey,
          marginTop: 8,
          fontSize: 10,
          height:30,
          fontWeight: "400",
          ...FONTS.fontPopinRegular,
          textAlignVertical:'top'
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;

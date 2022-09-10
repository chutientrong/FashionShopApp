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
        marginRight: 8,

      }}
      onPress={onPress}
    >
      <View
        style={{
          height: 70,
          width: 70,
          borderWidth: 1,
          borderRadius: 50,
          borderColor: COLORS.neutralLight,
          alignItems: "center",
          justifyContent:"center"
        }}
      >
        <Image source={image} style={{ height: 24, width: 24 }}></Image>
      </View>
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

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, CUSTOMFONTS, FONTS } from "../constants";

const SocialButton = ({
  label,
  disabled,
  labelStyle,
  buttonContainerStyle,
  onPress,
  image,
}) => {
  return (
    <TouchableOpacity
      style={{
        // alignItems: "center",
        // borderColor: COLORS.primaryBlue,
        // borderWidth: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        ...buttonContainerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Image source={image} style={{}}></Image>
      <Text style={{ color: COLORS.grey, fontWeight: "700", ...labelStyle }}>
        {label}
      </Text>
      <View></View>
    </TouchableOpacity>
  );
};

export default SocialButton;

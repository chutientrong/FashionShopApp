import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, CUSTOMFONTS, FONTS } from "../constants";

const TextButton = ({
  label,
  label2 = "",
  label2Style,
  disabled,
  labelStyle,
  buttonContainerStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        justifyContent: "center",
        ...buttonContainerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      {label2 != "" && (
        <Text
          style={{
            // flex: 1,
            textAlign: "left",
            color: COLORS.primary,
            ...FONTS.h3,
            ...label2Style,letterSpacing:0.5
          }}
        >
          {label2}
        </Text>
      )}
      <Text style={{ color: COLORS.white, fontWeight:"700",...labelStyle,letterSpacing:0.5 }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default TextButton;

import { View, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { COLORS } from "../constants";

const ColorButton = ({ color }) => {
  const checkColor = (color) => {
    switch (color) {
      case "yellow":
        return COLORS.primaryYellow;

      case "blue":
        return COLORS.primaryBlue;

      case "red":
        return COLORS.primaryRed;

      case "green":
        return COLORS.primaryGreen;

      case "purple":
        return COLORS.primaryPurple;
      case "dark":
        return COLORS.primaryDark;

      default:
        return COLORS.neutralLight;
    }
  };
  const [sel, setSel] = useState(false);
  return (
    <View style={{ marginRight: 16, marginTop: 12 }}>
      <TouchableOpacity
        onPress={() => setSel(!sel)}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          backgroundColor: checkColor(color),
          borderRadius: 50,
        }}
      >
        {sel ? (
          <View style={{
            alignItems: "center",
            justifyContent: "center",
            width: 20,
            height: 20,
            backgroundColor: COLORS.white,
            borderRadius: 50,
          }}></View>
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

export default ColorButton;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS } from "../constants";

const BorderButton = ({ title }) => {
  const [sel, setSel] = useState(false);
  return (
    <View style={{marginRight: 16, marginTop: 12 }}>
      <TouchableOpacity
        onPress={() => setSel(true)}
        style={{
          borderWidth: 1,
          borderColor: sel ? COLORS.primaryBlue : COLORS.neutralLight,
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          backgroundColor: "#fff",
          borderRadius: 50,
        }}
      >
        <Text
          style={{
            color: COLORS.neutralDark,
            fontSize: 14,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            lineHeight: 21,letterSpacing:0.5
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BorderButton;

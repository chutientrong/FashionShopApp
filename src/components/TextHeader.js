import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
const TextHeader = ({
  title,
  rightIconName,
  children,
  navigation,
}) => {
  return (
    <View
      style={{
        height: 90,
        width: WIDTH,
        padding: 16,
        flexDirection: "column",
        justifyContent: "space-between",

      }}
    >
      <View style={{ marginBottom: 16 }}></View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft:8,
          marginRight:8
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Icon
            name="arrow-back-ios"
            color={COLORS.grey}
            size={16}
            style={{ fontWeight: "700" }}
            onPress={() => navigation.goBack()}
          ></Icon>
          <Text
            style={{
              color:COLORS.neutralDark,
              marginLeft: 12,
              ...FONTS.fontPopinBold,
              fontSize: 16,
              fontWeight: "700",
              lineHeight: 24,
            }}
          >
            {title}
          </Text>
        </View>
        {rightIconName ? (
          <Icon
            name={rightIconName}
            color={COLORS.grey}
            size={24}
            style={{ fontWeight: "700" }}
          ></Icon>
        ) : null}
      </View>
      {children}
    </View>
  );
};

export default TextHeader;

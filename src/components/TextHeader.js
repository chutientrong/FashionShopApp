import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/Ionicons";

const TextHeader = ({
  title,
  rightIconName,
  rightIconName2,
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
          // marginLeft: 8,
          // marginRight: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Icon2
            name="chevron-back-outline"
            color={COLORS.grey}
            size={24}
            onPress={() => navigation.goBack()}
          ></Icon2>
          <View style={{ width: 200 }}>
            <Text
              numberOfLines={1}
              style={{
                color: COLORS.neutralDark,
                // width:"80%",
                marginLeft: 8,
                ...FONTS.fontPopinBold,
                fontSize: 16,
                fontWeight: "700",
                lineHeight: 24,
                textAlign: "left",letterSpacing:0.5
              }}
            >
              {title}
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              // justifyContent: "space-between",
              // alignItems: "center",
            }}
          >
            {rightIconName ? (
              <Icon
                name={rightIconName}
                color={COLORS.grey}
                size={24}

              ></Icon>
            ) : null}
            {rightIconName2 ? (
              <Icon
                name={rightIconName2}
                color={COLORS.grey}
                size={24}
                style={{  marginLeft: 8 }}
              ></Icon>
            ) : null}
          </View>
        </View>
        {children}
      </View>
     
    </View>
  );
};

export default TextHeader;

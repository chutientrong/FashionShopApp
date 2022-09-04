import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";

const HomeHeader = ({ title }) => {
  return (
    <View
      style={{
        height: 90,
        width: WIDTH,
        padding: 16,
        // marginTop: 16,
        // marginLeft: 16,
        alignItems:"flex-start"
        // flexDirection: "c",
        // justifyContent: "space-between",
      }}
    ><View style={{ marginBottom: 32 }}></View>
      <View style={{ width: 200}}>
        <Text
          numberOfLines={1}
          style={{
            color: COLORS.neutralDark,
            // width:"80%",

            ...FONTS.fontPopinBold,
            fontSize: 16,
            fontWeight: "700",
            lineHeight: 24,
            textAlign: "left",
            letterSpacing: 0.5,
            // alignSelf: "center",
          }}
        >
          {title}
        </Text>
      </View>
    </View>
  );
};

export default HomeHeader;

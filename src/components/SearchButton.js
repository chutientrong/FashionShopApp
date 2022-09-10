import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

const SearchButton = ({ data }) => {
  const [selButton, setSelButton] = useState(false);
  return (
    <View
      // key={index}
      style={{
        // width: item.name.length * 8 ,
        height: 50,
        justifyContent: "center",
        // flex: 1,
        backgroundColor: selButton ? COLORS.bgBlue : COLORS.white,
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 4,
        marginRight: 8,
        padding: 16,

        borderRadius: 5,
        borderColor: COLORS.neutralLight,
        borderWidth:  1,
      }}
    >
      <TouchableOpacity onPress={() => setSelButton(!selButton)}>
        <Text
          style={{
            color: COLORS.primaryBlue,
            fontSize: 12,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            lineHeight: 21,
            letterSpacing: 0.5,
            // margin:16
            // marginBottom: 12,
          }}
        >
          {data.name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchButton;

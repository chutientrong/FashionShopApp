import { View, Text } from "react-native";
import React from "react";
import StepIcon from "./StepIcon";
import { COLORS, FONTS, WIDTH } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";

const Step = ({ label, isComplete, isHideSlideEnd, lineWidth }) => {
  return (
    // <View style={{  flexDirection: "row", alignItems: "center",justifyContent:"space-around" }}>
    <View
      style={{ flex: 1, flexDirection: "column", justifyContent: "center",alignItems: "center", }}
    >
      {/* <StepIcon></StepIcon> */}

      <View style={{ flexDirection: "row" ,justifyContent:"center",}}>
        {isHideSlideEnd ? null : (
          <View
            style={{
              position: "absolute",
              // left:14,
              right: 24,
              top: 14,
              width: lineWidth || (WIDTH - 96) / 4,
              height: 1,
              // borderWidth: 1,
              backgroundColor: isComplete
                ? COLORS.primaryBlue
                : COLORS.neutralLight,
              // justifyContent:"center",
              // alignItems: "center"
              // alignSelf:"center"
            }}
          ></View>
        )}
        <Icon
          name="checkmark-circle"
          size={24}
          color={isComplete ? COLORS.primaryBlue : COLORS.neutralLight}
        ></Icon>
      </View>
      <Text
        style={{
          color: isComplete ? COLORS.primaryBlue : COLORS.grey,
          marginTop:12,
          fontSize: 12,
          fontWeight: "400",
          ...FONTS.fontPopinRegular,
          lineHeight: 21,
          letterSpacing: 0.5,
          alignItems: "center",
        }}
      >
        {label}
      </Text>

      {/* </View> */}
    </View>
  );
};

export default Step;

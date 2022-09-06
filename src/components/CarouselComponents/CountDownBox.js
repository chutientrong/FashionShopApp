import { View, Text } from "react-native";
import React from "react";

import { COLORS, FONTS } from "../../constants";
import CountDown from "./CountDown";

const CountDownBox = ({ time, componentStyle }) => {
  return (
    <View style={{ }}>
      <CountDown
        size={15}
        until={time}
        // onFinish={() => alert("Finished")}
        digitStyle={{
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.neutralLight,
        }}
        digitTxtStyle={{ color: COLORS.neutralDark ,fontWeight:"700",...FONTS.bodyNumber}}
        timeLabelStyle={{ color: "red", fontWeight: "bold" }}
        separatorStyle={{
          color: COLORS.white,
        }}
        timeToShow={["H", "M", "S"]}
        timeLabels={{ m: null, s: null }}
        showSeparator
      />
    </View>
  );
};

export default CountDownBox;

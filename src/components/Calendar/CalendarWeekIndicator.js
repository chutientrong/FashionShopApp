import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../../constants";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const CalendarWeekIndicator = ({ dateContainerStyle, weekHeaderTextColor }) => {
  return (
    <View
      style={{

        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // justifyContent: "center",
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: COLORS.neutralLight,
        ...weekHeaderTextColor,
      }}
    >
      {weekDays.map((weekday) => (
        <View
          style={[
            dateContainerStyle,
            {
              height: 40,
              width: 40,
              alignItems: "center",
              justifyContent: "center",
            },
          ]}
          key={weekday}
        >
          <Text
            style={[
              {
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
                // marginBottom: 12,
                color: weekday == "Sun" ? COLORS.primaryRed : COLORS.grey,
              },
            ]}
          >
            {weekday}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default CalendarWeekIndicator;

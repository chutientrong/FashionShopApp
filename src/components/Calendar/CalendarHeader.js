import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import moment from "moment";
import { COLORS, FONTS } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";

const CalendarHeader = ({
  date,
  customHeader,
  headerStyles,
  year,
  setYear,
  month,
  setMonth,
}) => {
  return (
    <View
      style={[
        {
          width: "100%",
          // height:50,
          padding: 16,
          justifyContent: "space-between",
          flexDirection: "row",
        },
        headerStyles && headerStyles,
      ]}
    >
      {customHeader ? (
        <View style={{ width: "100%", }}>
          {customHeader(date, month, year, setMonth, setYear)}
        </View>
      ) : (
        <>
          <Icon
            name="chevron-back"
            size={24}
            color={COLORS.grey}
            onPress={() => setMonth(month - 1)}
            style={{ alignItems: "center", justifyContent: "center" }}
          ></Icon>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 16,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              lineHeight: 26,
              letterSpacing: 0.5,
              textAlign: "center",
            }}
          >
            {moment().month(month).format("MMMM YYYY")}
          </Text>
          <Icon
            name="chevron-forward"
            size={24}
            color={COLORS.grey}
            onPress={() => setMonth(month + 1)}
            style={{ alignItems: "center", justifyContent: "center" }}
          ></Icon>

        </>
      )}
    </View>
  );
};

export default CalendarHeader;

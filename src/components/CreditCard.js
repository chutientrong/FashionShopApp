import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";

const CreditCard = ({ data }) => {
  const defaultcard = {
    name: "FULL NAME",
    number: "1234 5678 1234 5678",
    expiry: "MM/YY",
    cvc: "CVC",
    color: COLORS.primaryBlue,
  };
  return (
    <View
      style={{
        height: 190,
        backgroundColor: COLORS.primaryBlue,
        borderRadius: 5,
        padding: 21,
      }}
    >
      <View style={{ height: 55 }}></View>
      <View
        style={{ justifyContent: "center", alignItems: "center", height: 36 }}
      >
        {data.number ? (
          <Text
            style={{
              color: COLORS.white,

              fontSize: 24,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              lineHeight: 36,
              letterSpacing: 0.5,
            }}
          >
            {data.number}
          </Text>
        ) : (
          <Text
            style={{
              color: COLORS.white,

              fontSize: 24,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              lineHeight: 36,
              letterSpacing: 0.5,
            }}
          >
            {defaultcard.number}
          </Text>
        )}
      </View>
      <View style={{ flexDirection: "row", marginTop: 20 }}>
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: COLORS.white,
              // marginTop: 8,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 15,
              letterSpacing: 0.5,
              opacity: 0.5,
            }}
          >
            CARD HOLDER
          </Text>
          {data.name ? (
            <Text
              style={{
                color: COLORS.white,
                marginTop: 4,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 15,
                letterSpacing: 0.5,
              }}
            >
              {data.name}
            </Text>
          ) : (
            <Text
              style={{
                color: COLORS.white,
                marginTop: 4,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 15,
                letterSpacing: 0.5,
              }}
            >
              {defaultcard.name}
            </Text>
          )}
        </View>
        <View style={{ flexDirection: "column", marginLeft: 48 }}>
          <Text
            style={{
              color: COLORS.white,
              // marginTop: 8,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 15,
              letterSpacing: 0.5,
              opacity: 0.5,
            }}
          >
            CARD SAVE
          </Text>
          {data.expiry ? (
            <Text
              style={{
                color: COLORS.white,
                marginTop: 4,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 15,
                letterSpacing: 0.5,
              }}
            >
              {data.expiry}
            </Text>
          ) : (
            <Text
              style={{
                color: COLORS.white,
                marginTop: 4,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 15,
                letterSpacing: 0.5,
              }}
            >
              {defaultcard.expiry}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default CreditCard;

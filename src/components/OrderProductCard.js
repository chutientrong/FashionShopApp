import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS } from "../constants";

const OrderProductCard = ({ data }) => {
  // console.log("cart card= ", data);
  return (
    <View
      style={{
        height: 104,
        flexDirection: "row",
        padding: 16,
        borderColor: COLORS.neutralLight,
        marginBottom: 8,
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Image
        source={data.image}
        style={{ width: 72, height: 72, borderRadius: 5 }}
      ></Image>
      <View style={{ flex:1,flexDirection: "column", marginLeft: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between",}}>
          <Text
            numberOfLines={2}
            style={{
              width: 140,
              color: COLORS.neutralDark,
              marginRight: 10,
              fontSize: 12,

              fontWeight: "700",

              lineHeight: 18,
              textAlignVertical: "top",
              textAlign: "left",
              letterSpacing: 0.5,
            }}
          >
            {data.name}
          </Text>

          {data.like ? (
            <Icon name="favorite" size={24} color={COLORS.primaryRed}></Icon>
          ) : (
            <Icon name="favorite-border" size={24} color={COLORS.grey}></Icon>
          )}
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: COLORS.primaryBlue,
              marginTop: 16,
              fontSize: 12,
              height: 22,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              textAlignVertical: "top",
              textAlign: "left",
              letterSpacing: 0.5,
            }}
          >
            ${data.cost}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OrderProductCard;

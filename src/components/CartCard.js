import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/FontAwesome";
import { COLORS, FONTS } from "../constants";

const CartCard = ({ data }) => {
  // console.log("cart card= ", data);
  return (
    <View
      style={{
        height: 104,
        flexDirection: "row",
        padding: 16,
        borderColor: COLORS.neutralLight,
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 5,
      }}
    >
      <Image
        source={data.image}
        style={{ width: 72, height: 72, borderRadius: 5 }}
      ></Image>
      <View style={{ flexDirection: "column", marginLeft: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            {data.like ? (
              <Icon name="favorite" size={24} color={COLORS.primaryRed}></Icon>
            ) : (
              <Icon name="favorite-border" size={24} color={COLORS.grey}></Icon>
            )}
            <Icon
              name="delete-outline"
              size={24}
              color={COLORS.grey}
              style={{ marginLeft: 4 }}
            ></Icon>
          </View>
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
          <View
            style={{
              flexDirection: "row",
              borderRadius: 5,
              borderColor: COLORS.neutralLight,
              borderWidth: 1,
              marginTop: 10,
              height: 24,
              width: 104,
            }}
          >
            <View style={{ height: 24, width: 32 }}>
              <Icon2
                name="minus"
                size={16}
                color={COLORS.grey}
                style={{
                  alignSelf: "center",
                  fontWeight: "700",
                  ...FONTS.fontPopinBold,
                  fontSize: 12,padding:5
                }}
              ></Icon2>
            </View>
            <TextInput
              placeholder="1"
              style={{
                height: 22,
                width: 40,
                backgroundColor: COLORS.neutralLight,
                textAlign: "center",
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinBold,
              }}
            ></TextInput>
            <View
              style={{
                height: 24,
                width: 32,
                padding:5
              }}
            >
              <Icon2
                name="plus"
                size={16}
                color={COLORS.grey}
                style={{
                  
                  textAlign: "center",
                  alignSelf: "center",
                  fontWeight: "700",
                  ...FONTS.fontPopinBold,
                  fontSize: 12,
                }}
              ></Icon2>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

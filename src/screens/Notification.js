import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS } from "../constants";
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
const Notification = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Notification"}
        rightIconName={"search"}
        rightIconName2={"more-vert"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{ margin: 16 }}>
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            height: 56,
          }}
          onPress={() => navigation.navigate("NotificationOffer")}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
            }}
          >
            <Icon name="tago" size={24} color={COLORS.primaryBlue}></Icon>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,
              }}
            >
              Offer
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              backgroundColor: COLORS.primaryRed,
              borderRadius: 50,
              alignItems: "center",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
            }}
            //
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            height: 56,
          }}
          onPress={() => navigation.navigate("NotificationFeed")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Icon name="profile" size={24} color={COLORS.primaryBlue}></Icon>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,
              }}
            >
              Feed
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              backgroundColor: COLORS.primaryRed,
              borderRadius: 50,
              alignItems: "center",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            height: 56,
          }}
          onPress={() => navigation.navigate("NotificationActivity")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Icon2
              name="notifications-outline"
              size={24}
              color={COLORS.primaryBlue}
            ></Icon2>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,
              }}
            >
              Activity
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 20,
              height: 20,
              backgroundColor: COLORS.primaryRed,
              borderRadius: 50,
              alignItems: "center",
              flexDirection: "row",
              alignSelf: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                fontSize: 12,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
              }}
            >
              3
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notification;

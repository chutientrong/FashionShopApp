import { View, Text, Toucha, TouchableHighlightbleHighlight, TouchableHighlight } from "react-native";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import { COLORS, FONTS } from "../constants";
// import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon from "react-native-vector-icons/Feather";
const Account = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HomeHeader title={"Account"}></HomeHeader>
      {/* ADD LINE */}

      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

      {/* <View style={{ marginHorizontal: 16 }}> */}
        <TouchableHighlight
        underlayColor={COLORS.neutralLight}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            height: 56,
            padding:16
          }}
          onPress={() => navigation.navigate("StackProfile")}
        >
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",

            }}
          >
            <Icon name="user" size={24} color={COLORS.primaryBlue}></Icon>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,
textAlignVertical:"center"
              }}
            >
              Profile
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.neutralLight}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",

            height: 56,
            padding:16
          }}
          onPress={() => navigation.navigate("NotificationFeed")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Icon name="shopping-bag" size={24} color={COLORS.primaryBlue}></Icon>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,textAlignVertical:"center"
              }}
            >
              Order
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.neutralLight}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding:16,
            height: 56,
          }}
          onPress={() => navigation.navigate("NotificationActivity")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <Icon2
              name="location-outline"
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
                marginLeft: 16,textAlignVertical:"center"
              }}
            >
              Address
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
        underlayColor={COLORS.neutralLight}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            padding:16,
            height: 56,
          }}
          onPress={() => navigation.navigate("NotificationActivity")}
        >
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Icon name="credit-card" size={24} color={COLORS.primaryBlue}></Icon>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 18,
                letterSpacing: 0.5,
                marginLeft: 16,textAlignVertical:"center"
              }}
            >
              Payment
            </Text>
          </View>
        </TouchableHighlight>
      {/* </View> */}
    </View>
  );
};

export default Account;

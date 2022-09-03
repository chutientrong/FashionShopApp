import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { notioffer } from "../models/Notification";
import Icon from "react-native-vector-icons/AntDesign";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS } from "../constants";
const NotificationOffer = ({ navigation }) => {
  return (
    <View style={{ flex: 1,  backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Offer"}
        rightIconName={"search"}
        rightIconName2={"more-vert"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <ScrollView>
        {notioffer.map((item, index) => (
          <View key={index}>
            <View style={{ flexDirection: "row", margin: 16 }}>
              <Icon name="tago" size={24} color={COLORS.primaryBlue}></Icon>
              <View style={{ flexDirection: "column", marginLeft: 12 ,marginRight:16}}>
                <Text
                numberOfLines={1}
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    marginTop: 4,
                  }}
                >
                  {item.discription}
                </Text>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginTop:4,
                  }}
                >
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationOffer;

import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { notioactivity } from "../models/Notification";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS, icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const NotificationActivity = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={"Activity"}
          rightIconName={"search"}
          rightIconName2={"more-vert"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <ScrollView>
          {notioactivity.map((item, index) => (
            <View key={index}>
              <View style={{ flexDirection: "row", margin: 16 }}>
                <Image
                  source={icons.transaction}
                  style={{ height: 24, width: 24, resizeMode: "stretch" }}
                ></Image>
                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 12,
                    marginRight: 16,
                  }}
                >
                  <Text
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
                      marginTop: 4,
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
    </SafeAreaView>
  );
};

export default NotificationActivity;

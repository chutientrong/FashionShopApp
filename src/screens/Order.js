import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { order } from "../models/Order";
import { COLORS, FONTS } from "../constants";
import TextHeader from "../components/TextHeader";
import DashedLine from "../components/DashedLine";
import { SafeAreaView } from "react-native-safe-area-context";

const Order = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Order"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <ScrollView showsVerticalScrollIndicator={false}>
          {order.map((item, index) => (
            <View key={index}>
              <TouchableOpacity
                style={{
                  marginTop: 16,
                  marginHorizontal: 16,
                  padding: 16,
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: COLORS.neutralLight,
                }}
                onPress={() => navigation.navigate("OrderDetails")}
              >
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                  }}
                >
                  {item.id}
                </Text>
                <Text
                  numberOfLines={2}
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    opacity: 0.5,
                    marginTop: 12,
                  }}
                >
                  Order at {item.address}: {item.time}
                </Text>
                <View style={{}}>
                  <DashedLine
                    spacing={20}
                    color={COLORS.neutralLight}
                  ></DashedLine>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 12,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 12,
                      fontWeight: "400",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                      opacity: 0.5,
                    }}
                  >
                    Order Status
                  </Text>
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 12,
                      fontWeight: "400",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                    }}
                  >
                    {item.status}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 12,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 12,
                      fontWeight: "400",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                      opacity: 0.5,
                    }}
                  >
                    Items
                  </Text>
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 12,
                      fontWeight: "400",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                    }}
                  >
                    {item.item} Items purchased
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    marginTop: 12,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 12,
                      fontWeight: "400",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                      opacity: 0.5,
                    }}
                  >
                    Price
                  </Text>
                  <Text
                    style={{
                      color: COLORS.primaryBlue,
                      fontSize: 12,
                      fontWeight: "700",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                    }}
                  >
                    ${item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Order;

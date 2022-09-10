import { View, Text, ScrollView, TouchableHighlight } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import TextHeader from "../components/TextHeader";

const SearchSort = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Short By"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Best Match
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Time: ending soonest
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Time: newly listed
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Price + Shipping: lowest first
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Price + Shipping: highest first
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            underlayColor={COLORS.neutralLight}
            style={{
              justifyContent: "space-between",
              flexDirection: "row",

              height: 56,
              padding: 16,
            }}
            onPress={() => {
              navigation.navigate("SearchProduct");
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
                // marginLeft: 16,
                textAlignVertical: "center",
              }}
            >
              Distance: nearest first
            </Text>
          </TouchableHighlight>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchSort;

import { View, Text, TouchableHighlight, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS } from "../constants";
import { searchcate } from "../models/Explore";
import TextHeader from "../components/TextHeader";

const SearchCategory = ({ navigation,route }) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Category"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <ScrollView showsVerticalScrollIndicator={false} >
          {searchcate.map((item, index) => (
            <View key={index}>
              <TouchableHighlight
                underlayColor={COLORS.neutralLight}
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",

                  height: 56,
                  padding: 16,
                }}
                onPress={() => {
                  navigation.navigate("SearchProduct"),
                    { cateName: item.title };
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignSelf: "center",
                  }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 24, height: 24 }}
                  ></Image>
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 14,
                      fontWeight: "700",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 18,
                      letterSpacing: 0.5,
                      marginLeft: 16,
                      textAlignVertical: "center",
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
              </TouchableHighlight>
            </View>
          ))}
         
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SearchCategory;

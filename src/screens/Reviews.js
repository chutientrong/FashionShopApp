import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS, WIDTH } from "../constants";
import { productReview, reviewimage } from "../models/Review";
import ReviewSortButton from "../components/ReviewSortButton";
import Review from "../components/Review";
import TextButton from "../components/TextButton";

const Reviews = ({ navigation }) => {
  const star = [1, 2, 3, 4, 5];
  const [sel, setSel] = useState(false);
  return (
    <View style={{ flex: 1, height: "100%", backgroundColor: COLORS.white }}>
      <TextHeader title={"5 Reviews"} navigation={navigation}></TextHeader>
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <ScrollView>
        {/* ADD LINE */}
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              marginLeft: 16,
              marginTop: 16,
            }}
          >
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: sel ? COLORS.white : "#40BFFF1A",
                borderColor: COLORS.neutralLight,
                borderWidth: 1,
                borderRadius: 5,
                width: 100,
                height: 45,
              }}
              onPress={() => setSel(!sel)}
            >
              <Text
                style={{
                  color: COLORS.primaryBlue,
                  fontSize: 12,
                  fontWeight: "700",
                  ...FONTS.fontPopinBold,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                }}
              >
                All Review
              </Text>
            </TouchableOpacity>
            {star.map((item, index) => (
              <View key={index} style={{ marginLeft: 16 }}>
                {/* <Text>{item.name}</Text> */}
                <ReviewSortButton item={item}></ReviewSortButton>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={{}}>
          {productReview.map((item, index) => (
            <View key={index}>
              <Review data={item}></Review>
              {/* <Review data={item}></Review> */}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={{ marginLeft: 16, marginTop: 16 }}>
        <TextButton
          label="Write Review"
          // disabled={isEnableSignIn() ? false : true}
          buttonContainerStyle={{
            borderRadius: 5,
            height: 57,
            width: WIDTH - 32,
            padding: 16,
            backgroundColor: COLORS.primaryBlue,
          }}
          labelStyle={{
            color: COLORS.white,
            ...FONTS.btnFont,
          }}
          onPress={() => navigation.navigate("WriteReview")}
        />
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default Reviews;

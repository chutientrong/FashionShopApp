import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import StarRating from "./StarRating";

const Review = ({ data }) => {
    console.log("reviewdata= ",data)
  return (
    <View style={{ margin: 16 }}>
      <View style={{ flexDerection: "row" }}>
        {/* PROFILE  */}

        <View style={{ flexDirection: "row" }}>
          <Image
            style={{ width: 48, height: 48, resizeMode: "stretch" }}
            source={data.userImage}
          ></Image>

          <View style={{ marginLeft: 16 }}>
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
              {data.userName}
            </Text>

            <StarRating rating={data.rating} size={16}></StarRating>
          </View>
        </View>

        <Text
          style={{
            color: COLORS.grey,
            fontSize: 12,
            fontWeight: "400",
            ...FONTS.fontPopinRegular,
            lineHeight: 21,
            letterSpacing: 0.5,
            marginTop: 16,
          }}
        >
          {data.comment}
        </Text>
      </View>
      {data.image === undefined || data.image.length == 0 ? null : (
        <View style={{ marginTop: 16 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.image.map((item, index) => (
              <View key={index}>
                <Image
                  style={{
                    width: 72,
                    height: 72,
                    marginRight: 12,
                    borderRadius: 8,
                  }}
                  source={item}
                ></Image>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      <Text
        style={{
          color: COLORS.grey,
          fontSize: 10,
          fontWeight: "400",
          ...FONTS.fontPopinRegular,
          lineHeight: 15,
          letterSpacing: 0.5,
          marginTop: 16,
        }}
      >
        {data.time}
      </Text>
    </View>
  );
};

export default Review;

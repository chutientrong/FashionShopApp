import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS, WIDTH } from "../constants";
import StarRating from "../components/StarRating";
import Icon from "react-native-vector-icons/MaterialIcons";
import TextButton from "../components/TextButton";

const WriteReview = ({ navigation }) => {
  const [border, setBorder] = useState(COLORS.neutralLight);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Write Review"}
        rightIconName={"search"}
        rightIconName2={"more-vert"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

      <View style={{ margin: 16 }}>
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
          Please write Overall level of satisfaction with your shipping /
          Delivery Service
        </Text>

        <View style={{ flexDirection: "row", marginTop: 8 }}>
          <StarRating rating={4} size={30}></StarRating>
          <Text
            style={{
              textAlignVertical: "center",

              marginLeft: 16,
              color: COLORS.grey,
              fontSize: 16,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              //   lineHeight: 22,
              letterSpacing: 0.5,
            }}
          >
            4/5
          </Text>
        </View>
        <View>
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
            Write Your Review
          </Text>
          <TextInput
            multiline
            placeholder="Write your review here"
            textAlignVertical={"top"}
            placeholderTextColor={COLORS.grey}
            onPressIn={() => setBorder(COLORS.primaryBlue)}
            style={{
              height: 160,
              borderWidth: 1,
              borderColor: border,
              marginTop: 12,
              borderRadius: 5,
              padding: 16,
              color: COLORS.grey,
              letterSpacing: 0.5,
            }}
          ></TextInput>
        </View>
        <View>
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
            Add Photo
          </Text>
          <View>

            <TouchableOpacity
              style={{
                width: 70,
                height: 70,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: COLORS.neutralLight,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 12,
              }}
            >
              <Icon name={"add"} size={20} style={{}}></Icon>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginLeft: 16, marginTop: 16 }}>
        <TextButton
          label="Write"
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
            // onPress={{}}
        />
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default WriteReview;

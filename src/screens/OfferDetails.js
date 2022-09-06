import { View, Text, Image, ScrollView, ImageBackground } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import CountDownBox from "../components/CarouselComponents/CountDownBox";
import OfferLists from "../components/OfferLists";
import { productRecommend } from "../models/ProductSale";
import TextHeader from "../components/TextHeader";

const OfferDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Super Flash Sale"}
        rightIconName={"search"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}

      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      
      <ScrollView>
      <View
        style={{
          flext: 1,
          borderRadius: 5,
          // borderWidth: 1,
          marginTop: 16,
          marginHorizontal:16,overflow: 'hidden'
        }}
      >
        <ImageBackground
          source={require("../assets/images/product/recommend.png")}
          style={{
            height: 160,
            padding: 16,
          }}
        >
          <Text
            style={{
              color: COLORS.white,
              width: "75%",
              fontSize: 24,
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              lineHeight: 46,
              letterSpacing: 0.5,
            }}
          >
            Super Flash Sale 50% Off
          </Text>
          <View style={{ position: "absolute", marginLeft: 16, bottom: 16 }}>
            <CountDownBox time={1000}></CountDownBox>
          </View>
        </ImageBackground>
        {/* <CountDownBox time={1000}></CountDownBox> */}
      </View>
        <ScrollView horizontal>
          <OfferLists
            data={productRecommend}
            navigation={navigation}
          ></OfferLists>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default OfferDetails;

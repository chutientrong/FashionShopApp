import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { COLORS, WIDTH } from "../constants";
import CountDownBox from "../components/CarouselComponents/CountDownBox";
import OfferLists from "../components/OfferLists";
import { productRecommend } from "../models/ProductSale";
import TextHeader from "../components/TextHeader";

const OfferDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <TextHeader
          title={"Super Flash Sale"}
          rightIconName={"search"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.neutralLight }}
        />
        <View
          style={{ flext: 1, marginLeft: 16, width: WIDTH - 32, marginTop: 16 }}
        >
          <Image
            source={require("../assets/images/product/recommend.png")}
            style={{
              flext: 1,
              height: 160,
              width: WIDTH - 32,
              borderRadius: 5,
              borderWidth: 2,
            }}
          ></Image>
          <CountDownBox time={1000}></CountDownBox>
        </View>
        <ScrollView horizontal>
          <OfferLists data={productRecommend}></OfferLists>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default OfferDetails;

import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, WIDTH } from "../constants";
import { useLinkProps } from "@react-navigation/native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import FlatListSlider from "./CarouselComponents/FlatlistSlider";
import CountDownBox from "./CarouselComponents/CountDownBox";

const CarouselFlashSale = ({ data,navigation }) => {
  const [isVertical, setIsVertical] = useState(false);
  // console.log(data);

  return (
    <View
      style={{
        flex: 1,
        height: 160,
      }}
    >
      <FlatListSlider
        data={data}
        timer={5000}
        imageKey={"image"}
        local={false}
        width={WIDTH-32}
        separator={0}
        loop={true}
        autoscroll={true}
        
        onPress={(item) => navigation.navigate('OfferDetails')}
        indicator
        animation
        contentContainerStyle={{
          // width: WIDTH - 32,
        }}
      />
      <CountDownBox time={1000}></CountDownBox>
    </View>
  );
};
export default CarouselFlashSale;

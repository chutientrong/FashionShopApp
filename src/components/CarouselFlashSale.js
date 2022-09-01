import { View, Text, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { COLORS, WIDTH } from "../constants";
import { useLinkProps } from "@react-navigation/native";
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import FlatListSlider from "./CarouselComponents/FlatlistSlider";
import CountDownBox from "./CountDownBox";
// import ViewSlider from 'react-native-view-slider'

const CarouselFlashSale = ({data}) => {
  const [isVertical, setIsVertical] = useState(false);
  // const ref = useRef();
  console.log(data);

  return (
    <View
      style={{
        flex: 1,
        // paddingTop: 10,
        // alignItems: "center",
        // justifyContent: "center",
        
      }}
    >
      <FlatListSlider
            data={data}
            timer={5000}
            imageKey={'image'}
            local={false}
            width={WIDTH}
            separator={0}
            loop={true}
            autoscroll={true}
            // onPress={item => alert(JSON.stringify(item))}
            indicator
            animation
            
          />
<CountDownBox time={1000} ></CountDownBox>
    </View>
  );
};
export default CarouselFlashSale;


import React, { useState, useEffect } from "react";
import { View, StyleSheet, Dimensions, Text, Image } from "react-native";

import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel";
import { useRef } from "react";
import { COLORS } from "../constants";

const DiscountCategories = (data) => {
  const [isVertical, setIsVertical] = useState(false);
  const { width, heigth } = Dimensions.get("window");
  const ref = useRef();
  // console.log(data);

  let result = data.data.map(({ url }) => url);
  // console.log(result);

  return (
    <View
      style={{
        flex: 1,
        // paddingTop: 10,
        alignItems: "center",
        justifyContent: "center",
        
      }}
    >
      <Carousel
        vertical={false}
        width={width - 20}
        height={width / 3}
        loop
        // ref={ref}
        autoPlay={true}
        mode="vertical-stack"
        // style={{ marginLeft:10}}
        autoPlayInterval={5000}
        scrollAnimationDuration={2000}
        data={result}
        modeConfig={{
          snapDirection: "left",
          moveSize: window.width,
          stackInterval: 30,
          scaleInterval: 0.08,
          rotateZDeg:135,
        }}
        pagingEnabled
        snapEnabled
        // onSnapToItem={(index) => console.log("current index={", result[index])}
        renderItem={({ index }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.red2,
              flex: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              flex: 1,
              justifyContent: "center",
              // backgroundColor: "#fff",
              backgroundColor:COLORS.primary,
              overflow: "hidden",
            }}
          >
            <Image
              style={styles.tinyLogo}
              source={{ uri: result[index] }}
            ></Image>
            {/* <Text>{index}</Text> */}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dotView: { flexDirection: "row", justifyContent: "center" },
  tinyLogo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default DiscountCategories;

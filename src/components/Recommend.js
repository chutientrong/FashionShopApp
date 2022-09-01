import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

import ProductCardBigger from "./ProductCardBigger";
import { COLORS, FONTS, WIDTH } from "../constants";

const Recommend = ({ data }) => {
  console.log("Recommend = ", data);
  const renderItem = ({ item }) => (
    <ProductCardBigger
      image={item.image}
      name={item.name}
      cost={item.cost}
      preCost={item.preCost}
      discount={item.discount}
      onPress={() => console.log(item.title)}
    ></ProductCardBigger>
  );
  return (
    <View style={{ marginTop: 12, }}>
      <View style={{ }}>
        <Image
          source={require("../assets/images/product/recommend.png")}
          style={{ marginLeft:16 ,width:(WIDTH-32),borderRadius: 5}}
        ></Image>
        <Text
          style={{
            position: "absolute",
            top: 48,
            marginLeft: 32,
            color: COLORS.white,
            width: 170,
            fontSize: 24,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            lineHeight: 36,
            textAlignVertical: "top",
          }}
        >
          Recommend Product
        </Text>
        <Text
          style={{
            position: "absolute",
            bottom: 48,
            marginLeft: 32,
            color: COLORS.white,
            fontSize: 12,
            fontWeight: "400",
            ...FONTS.fontPopinRegular,
            lineHeight: 22,
            textAlignVertical: "top",
          }}
        >
          We recommend the best for you
        </Text>
      </View>

      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
            // flex:2
        }}
        // extraData={selectedId}
      />
    </View>
  );
};

export default Recommend;

const styles = StyleSheet.create({});

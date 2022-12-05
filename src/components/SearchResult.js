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

const SearchResult =({ data ,navigation}) => {
  // console.log("Search Result = ", data);
  const renderItem = ({ item }) => (
    <ProductCardBigger
      image={item.image}
      name={item.name}
      cost={item.cost}
      preCost={item.preCost}
      discount={item.discount}
      rating={item.rating}
      onPressed={() => navigation.navigate('ProductDetails',item)}
    ></ProductCardBigger>
  );
  return (
    <View style={{flex:1,  }}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
       }}
       showsVerticalScrollIndicator={false}
       
        // extraData={selectedId}
      />
    </View>
  );
};

export default SearchResult
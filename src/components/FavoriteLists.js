import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCardBigger from "./ProductCardBigger";

const FavoriteLists = ({ data, navigation }) => {
  // console.log("Favorite = ", data);
  const renderItem = ({ item }) => (
    <View>
      <ProductCardBigger
        image={item.image}
        name={item.name}
        cost={item.cost}
        preCost={item.preCost}
        discount={item.discount}
        rating={item.rating}
        onPressed={() => navigation.navigate('ProductDetails',item)}
        showIconRemove={true}
        onRemove={() => console.log("remove", item)}
      ></ProductCardBigger>
    </View>
  );
  return (
    <View style={{}}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{}}
        // onPress={()=>navigation.navigate('ProductDetails',item)}
        showsVerticalScrollIndicator={false}

        // extraData={selectedId}
      />
    </View>
  );
};

export default FavoriteLists;

import { View, Text, ScrollView } from "react-native";
import React from "react";
import TextHeader from "../components/TextHeader";
import { productRecommend } from "../models/ProductSale";
import FavoriteLists from "../components/FavoriteLists";
import { COLORS } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorite = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <TextHeader
          title={"Favorite Product"}
          rightIconName={"search"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <ScrollView>
          <ScrollView horizontal>
            <FavoriteLists
              data={productRecommend}
              navigation={navigation}
            ></FavoriteLists>
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favorite;

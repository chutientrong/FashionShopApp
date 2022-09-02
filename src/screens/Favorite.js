import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import TextHeader from '../components/TextHeader'
import { productRecommend } from '../models/ProductSale'
import FavoriteLists from "../components/FavoriteLists";
import { COLORS } from '../constants';

const Favorite = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView>
        <TextHeader
          title={"Favorite Product"}
          rightIconName={"search"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.neutralLight }}
        />
        <ScrollView horizontal>
          <FavoriteLists data={productRecommend}></FavoriteLists>
        </ScrollView>
      </ScrollView>
    </View>
  )
}

export default Favorite
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { COLORS } from '../constants';

const FlashSale = ({ data,onPress }) => {
  // console.log("Flash = ",data);
  return (
    <View style={{height:244,marginTop:12}}>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        style={{ width: "100%" }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <View key={index}>
            {/* <Text>{item.name}</Text> */}
            <ProductCard
              image={item.image}
              name={item.name}
              cost={item.cost}
              preCost={item.preCost}
              discount={item.discount}
              onPress={onPress}
              // navigation={navigation}
            ></ProductCard>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({})
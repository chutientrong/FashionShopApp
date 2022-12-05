import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'
import { COLORS } from '../constants';

const MegaSale = ({ data,navigation }) => {
  // console.log("Mega = ",data);
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
              onPressed={() => navigation.navigate('ProductDetails',item)}
            ></ProductCard>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default MegaSale

const styles = StyleSheet.create({})
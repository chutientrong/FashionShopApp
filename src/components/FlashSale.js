import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductCard from './ProductCard'

const FlashSale = ({data}) => {
  return (
    <View style={{height:238,marginTop:12}}>
      <ProductCard></ProductCard>
    </View>
  )
}

export default FlashSale

const styles = StyleSheet.create({})
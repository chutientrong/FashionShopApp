import { View, Text } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { COLORS } from '../constants'

const Offer = () => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <HomeHeader title={"Your Cart"}></HomeHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

      <Text>Offer</Text>
    </View>
  )
}

export default Offer
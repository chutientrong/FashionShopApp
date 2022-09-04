import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'
import TextHeader from '../components/TextHeader'

const PaymentMethod = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>

      <TextHeader title={"Payment"} navigation={navigation}></TextHeader>
            {/* ADD LINE */}
            <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
            <TouchableOpacity>
                
            </TouchableOpacity>
    </View>
  )
}

export default PaymentMethod
import { View, Text } from 'react-native'
import React from 'react'
import TextHeader from '../components/TextHeader'
import { COLORS } from '../constants'

const Notification = ({navigation}) => {
  return (
    <View>
            <TextHeader
        title={"Notification"}
        rightIconName={"search"}
        rightIconName2={"more-vert"}
        navigation={navigation}
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

    </View>
  )
}

export default Notification
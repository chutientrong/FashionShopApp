import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { COLORS, FONTS, WIDTH } from '../constants'
import TextHeader from '../components/TextHeader'
import TextButton from '../components/TextButton'
import { addressinfo } from '../models/Address'
import AddressCard from '../components/AddressCard'

const Address = ({navigation}) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Address"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {addressinfo.map((item, index) => (
          <View key={index}>
            <AddressCard data={item} onEdit={()=>navigation.navigate("EditAddress")} onRemove={()=>navigation.navigate("DeleteAddress")}></AddressCard>
          </View>
        ))}
      </ScrollView>
      <View>
        <View style={{ marginLeft: 16 }}>
          <TextButton
            label="Add Address"
            // disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
              borderRadius: 5,
              height: 57,
              width: WIDTH - 32,
              padding: 16,
              backgroundColor: COLORS.primaryBlue,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.btnFont,
            }}
            onPress={() => navigation.navigate("AddAddress")}
          />
        </View>
        <View style={{ marginBottom: 60 }}></View>
      </View>
    </View>
  )
}

export default Address
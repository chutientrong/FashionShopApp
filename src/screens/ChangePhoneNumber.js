import { View, Text } from 'react-native'
import React, { useState } from 'react'
import TextHeader from '../components/TextHeader'
import { COLORS, FONTS } from '../constants'
import TextInput from '../components/TextInput'
import TextButton from '../components/TextButton'
import utils from '../utils/utils'

const ChangePhoneNumber = ({navigation}) => {


  const [phone, setPhone] = useState("(+84)969072235");
  const [phoneError, setPhoneError] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Phone Number"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ marginTop: 16 }}>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 21,
              letterSpacing: 0.5,
              marginBottom: 12,
              marginHorizontal: 16,
            }}
          >
            Phone Number
          </Text>

          <TextInput
            icon2="smartphone"
            placeholder={phone}
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChange={(value) => {
              utils.validatePhone(value, setPhoneError);
              setPhone(value);
            }}
            active={phoneError ? false : true}
            error={phoneError ? true : false}
            errorMsg={phoneError}
          />
          
        </View>
        <View style={{ marginHorizontal: 16 }}>
          <TextButton
            label="Save"
            // disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
              borderRadius: 5,
              height: 57,

              padding: 16,
              backgroundColor: COLORS.primaryBlue,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.btnFont,
            }}
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  )
}

export default ChangePhoneNumber
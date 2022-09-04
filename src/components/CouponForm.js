import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS, WIDTH } from '../constants';


const CouponForm = ({error,errorMsg,onChange,active}) => {
    let validationColor = active
    ? COLORS.primaryBlue
    : error
    ? COLORS.primaryRed
    : COLORS.neutralLight;
  return (
    <View>
      <View
        style={{
          marginHorizontal: 16,
          height: 45,
          flexDirection: "row",
          // marginTop: 16,
          borderColor: validationColor,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: "space-between",
        }}
      >
        <TextInput
          numberOfLines={1}
          placeholder="Enter Cupon Code"
          placeholderTextColor={COLORS.grey}
          keyboardAppearance="dark"
          onChangeText={(text) => onChange(text)}
          onFocus={()=>validationColor=COLORS.primaryRed}
          style={{
            color: COLORS.grey,
            width: WIDTH - 32 - 88,
            alignItems: "center",
            paddingHorizontal: 14,
            fontSize: 15,

            fontWeight: "700",

            lineHeight: 18,

            letterSpacing: 0.5,
          }}
        ></TextInput>

        <Text
          adjustsFontSizeToFit={true}

          style={{
            width: 87, 
            backgroundColor: COLORS.primaryBlue,
            color: COLORS.white,
            fontSize: 15,
            fontWeight: "700",
            textAlignVertical: "center",
            textAlign: "center",
            letterSpacing: 0.5,
            borderBottomRightRadius:5,
            borderTopRightRadius:5

            // alignSelf:"center"
          }}
        >
          Apply
        </Text>
      </View>
      {errorMsg?<Text
          style={{
            marginTop:4,
            marginLeft:16,
            color: COLORS.primaryRed,
            ...FONTS.bodyerror,
            fontWeight: "700",letterSpacing:0.5
          }}
        >
          {errorMsg}
        </Text>
:null}
    </View>
  )
}

export default CouponForm
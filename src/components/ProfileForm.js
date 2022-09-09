import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants';
import { useState } from 'react';

const ProfileForm = ({error,errorMsg,onChange,active,value,numberOfLines,containerStyle}) => {

    let validationColor = error
    ? COLORS.primaryRed
    : COLORS.primaryBlue;

  return (
    <View style={{...containerStyle}}>
      <View
        style={{
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
          numberOfLines={numberOfLines||1}
          placeholderTextColor={COLORS.grey}
          keyboardAppearance="dark"
          
          // autoFocus={true}
          onChangeText={(text) => onChange(text)}
          onFocus={()=>validationColor=COLORS.primaryBlue}
          value={value}
          style={{
            color: COLORS.grey,

            paddingHorizontal: 14,
            fontSize: 15,

            fontWeight: "700",

            lineHeight: 18,

            letterSpacing: 0.5,
          }}
        ></TextInput>

      </View>
      {errorMsg?<Text
          style={{
            marginTop:4,

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
export default ProfileForm
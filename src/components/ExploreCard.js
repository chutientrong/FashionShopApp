import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants';

const ExploreCard = ({image,title,onPress}) => {
    console.log("item explore =",{image,title})
    return (
      <TouchableOpacity
        style={{
            // flex:.4,
          width: 70,
          height: 108,
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          alignSelf:"center",
        //   borderWidth: 2 
        //   marginRight: 12,
  
        }}
        onPress={onPress}
      >
        <Image source={image} style={{ height: 70, width: 70, }}></Image>
        <Text
          style={{
            // alignItems: "center",
            textAlign:"center",
            // textAlignVertical:"center",
            color: COLORS.grey,
            marginTop: 8,
            fontSize: 10,
            height:30,
            fontWeight: "400",
            ...FONTS.fontPopinRegular,
            textAlignVertical:'top'
          }}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );}

export default ExploreCard
import { View, Text } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, WIDTH } from '../../constants';

const StepIcon = ({isComplete,isHideSlideEnd,containerStyle,lineWidth}) => {
  return (
    <View style={{flex:1,flexDirection:"row",...containerStyle}}>
       <Icon name='checkmark-circle' size={24} color={isComplete?COLORS.primaryBlue:COLORS.neutralLight}></Icon>
       {/* {isHideSlideEnd?null:<View style={{
          // position: 'absolute',
          // left:20,
          width: lineWidth||(WIDTH-96)/4,
        height:1,
          // borderWidth: 1, 
          backgroundColor: isComplete?COLORS.primaryBlue:COLORS.neutralLight ,
          justifyContent:"center",
          alignSelf:"center"
          
        }}></View>} */}
       
    </View>
  )
}

export default StepIcon
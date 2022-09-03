import { TextInput as RNTextInput, StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, WIDTH } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";
export default function TextInput({
  containerStyle,
  icon,
  active,
  error,
  onChange,
  errorMsg,
  appendComponent,
  ...otherProps
}) {
  let validationColor = active
    ? COLORS.primaryBlue
    : error
    ? COLORS.primaryRed
    : COLORS.neutralLight;
    const [border,setBorder]=useState(COLORS.neutralLight);
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   width: 343,
          marginLeft:16,
          width: WIDTH-32,
          height: 48,
          borderRadius: 5,
          borderColor: validationColor,
          borderWidth: 1,
          padding: 4,
          //   left: 16,
        }}
      >
        <View style={{ padding: 8 }}>
          <Icon name={icon} color={validationColor} size={24} />
        </View>
        <View style={{ flex: 1 }}>
          <RNTextInput
            underlineColorAndroid="transparent"
            placeholderTextColor="#9098B1"
            showSoftInputOnFocus={true} 
            autoFocus={true}
            style={{ color: "#9098B1",fontSize:12,lineHeight:21.6,fontWeight:"700" }}
            onChangeText={(text) => onChange(text)}
            onFocus={()=>validationColor=COLORS.primaryRed}
            {...otherProps}
          />
          {appendComponent}
        </View>
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
  );
}

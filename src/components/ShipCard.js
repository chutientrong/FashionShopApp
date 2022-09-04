import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONTS } from "../constants";

const ShipCard = ({ data, onRemove, onEdit }) => {
  return (
    <View
      style={{
        flex: 1,
        padding: 16,
        marginTop:16,
        marginHorizontal:16,
        borderWidth: 1,
        borderColor: COLORS.neutralLight,
        borderRadius: 5,
      }}
    >
      <Text
        style={{
          color: COLORS.neutralDark,
          fontSize: 12,
          fontWeight: "700",
          ...FONTS.fontPopinRegular,
          lineHeight: 21,
          letterSpacing: 0.5,
        }}
      >
        {data.name}
      </Text>
      <Text
        style={{
          color: COLORS.grey,
          marginTop: 16,
          fontSize: 12,

          fontWeight: "700",
          ...FONTS.fontPopinRegular,
          textAlignVertical: "top",
          textAlign: "left",
          letterSpacing: 0.5,
        }}
      >
        {data.address}
      </Text>
      <Text
        style={{
          color: COLORS.grey,
          marginTop: 16,
          fontSize: 12,
          fontWeight: "700",
          ...FONTS.fontPopinRegular,
          letterSpacing: 0.5,
        }}
      >
        {data.phone}
      </Text>
      <View style={{ height:45,width:120,flexDirection: "row" ,marginTop: 16,}}>
        <TouchableOpacity
          onPress={onEdit}
          style={{width:70,height:45,}}
        ><Text style={{
            flex:1,
            backgroundColor: COLORS.primaryBlue,
            color: COLORS.white,
            fontSize: 15,
            fontWeight: "700",
            textAlignVertical: "center",
            textAlign: "center",
            letterSpacing: 0.5,
            borderRadius:5,
          }}>Edit</Text></TouchableOpacity>
        <Icon
          name="delete-outline"
          size={24}
          onPress={onRemove}
          style={{fontSize: 25, color: COLORS.grey, textAlignVertical: "center",
          textAlign: "center",marginLeft:20}}
        ></Icon>
      </View>
    </View>
  );
};

export default ShipCard;

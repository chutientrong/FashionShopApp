import { View, Text } from "react-native";
import React from "react";
import { WIDTH } from "../constants";

const Header = ({children}) => {
  return (
    <View style={{ height: 90, width: WIDTH ,padding:16,flexDirection:'column',justifyContent:'space-between',}}>
        <View style={{marginBottom:16}}></View>
      {children}
    </View>
  );
};

export default Header;

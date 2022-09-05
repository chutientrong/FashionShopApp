import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import Icon from "react-native-vector-icons/MaterialIcons";

import { shipinfo } from "../models/Ship";
import ShipCard from "../components/ShipCard";
import TextButton from "../components/TextButton";
const ShipTo = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Ship To"}
        navigation={navigation}
        children={
          <Icon
            name="add"
            size={24}
            color={COLORS.primaryBlue}
            style={{
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              //   fontSize: 18,
            }}
          ></Icon>
        }
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />



      <ScrollView
        showsVerticalScrollIndicator={false}
      
      >
        {shipinfo.map((item, index) => (
          <View key={index}>
            <ShipCard data={item}></ShipCard>
          </View>
        ))}
      </ScrollView>

      <View style={{ marginLeft: 16 }}>
        <TextButton
          label="Next"
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
          onPress={() => navigation.navigate("PaymentMethod")}
        />
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default ShipTo;

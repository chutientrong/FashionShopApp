import { View, Text, TouchableHighlight,Image  } from "react-native";
import React from "react";
import { COLORS, FONTS, icons } from "../constants";
import TextHeader from "../components/TextHeader";
import Icon from "react-native-vector-icons/AntDesign";
const PaymentMethod = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Payment"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <TouchableHighlight
        underlayColor={COLORS.neutralLight}
        onPress={()=>navigation.navigate("ChooseCard")}
        style={{ height: 56,textAlign: "center",padding:16 }}
      >
        <View style={{ flexDirection:"row",}}>
          <Image source={icons.creditcard} style={{}}></Image>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 21,
              letterSpacing: 0.5,
              marginLeft:16
            }}
          >
            Credit Cart Or Debit
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.neutralLight}
        onPress={()=>navigation.navigate("ChooseCard")}
        style={{ height: 56,textAlign: "center",padding:16 }}
        >
          <View style={{ flexDirection:"row",}}>
            <Image source={icons.paypal} style={{}}></Image>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
                marginLeft:16
              }}
            >
            Paypal
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor={COLORS.neutralLight}
        style={{ height: 56,textAlign: "center",padding:16 }}
        >
          <View style={{ flexDirection:"row",}}>
            <Image source={icons.bank} style={{}}></Image>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
                marginLeft:16
              }}
            >
            Bank
          </Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default PaymentMethod;

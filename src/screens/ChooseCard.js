import { View, Text } from "react-native";
import React from "react";
import TextHeader from "../components/TextHeader";
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextButton from "../components/TextButton";
import CreditCard from "../components/CreditCard";
import { creditcard } from "../models/CreditCard";
import { SafeAreaView } from "react-native-safe-area-context";

const ChooseCard = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={"Choose Card"}
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
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.neutralLight,
          }}
        />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ margin: 16 }}>
            <CreditCard data={creditcard}></CreditCard>
          </View>

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
              onPress={() => navigation.navigate("PaySuccess")}
            />
            {/* <View style={{ marginBottom: 60 }}></View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChooseCard;

import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import { creditcard } from "../models/CreditCard";
import TextButton from "../components/TextButton";
import CreditCard from "../components/CreditCard";
import { SafeAreaView } from "react-native-safe-area-context";

const CreditCardAndDebit = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={"Credit Card And Debit"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ margin: 16 }}>
            <CreditCard data={creditcard}></CreditCard>
          </View>

          <View style={{ marginLeft: 16 }}>
            <TextButton
              label="Add Card"
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
              onPress={() => navigation.navigate("AddCard")}
            />
            {/* <View style={{ marginBottom: 60 }}></View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreditCardAndDebit;

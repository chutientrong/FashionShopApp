import { View, Text } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import TextButton from "../components/TextButton";
import { ScrollView } from "react-native-gesture-handler";
import CreditCard from "../components/CreditCard";
import { SafeAreaView } from "react-native-safe-area-context";

const CardInfo = ({ navigation }) => {
  const creditcard = {
    id: "0",
    type: "",
    holder: "Lailyfa Febbrina",
    number: "6326 9124 8124 9875",
    expiry: "19/2042",
    cvc: "123",
    color: "primaryBlue",
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Add Card"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ margin: 16 }}
          >
            <CreditCard data={creditcard}></CreditCard>
            <View
              style={{
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 14,
                  fontWeight: "700",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  marginBottom: 12,
                }}
              >
                Card Number
              </Text>
              <View
                style={{
                  height: 45,
                  borderColor: COLORS.neutralLight,
                  borderRadius: 5,
                  borderWidth: 1,
                  // padding:12
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,

                    paddingHorizontal: 14,
                    fontSize: 15,
                    fontWeight: "700",
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    //   textAlign:"center",
                    textAlignVertical: "center",
                  }}
                >
                  {creditcard.number}
                </Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  marginTop: 16,
                  //   borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Expiration Date
                </Text>

                <View
                  style={{
                    height: 45,
                    width: WIDTH / 2 - 24,
                    borderColor: COLORS.neutralLight,
                    borderRadius: 5,
                    borderWidth: 1,
                    // padding:12
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.grey,

                      paddingHorizontal: 14,
                      fontSize: 15,
                      fontWeight: "700",
                      lineHeight: 18,
                      letterSpacing: 0.5,
                      //   textAlign:"center",
                      textAlignVertical: "center",
                    }}
                  >
                    {creditcard.expiry}
                  </Text>
                </View>
              </View>

              <View
                style={{
                  marginTop: 16,
                  //   borderWidth: 1,
                }}
              >
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    marginBottom: 12,
                  }}
                >
                  Security Code
                </Text>
                <View
                  style={{
                    height: 45,
                    width: WIDTH / 2 - 24,
                    borderColor: COLORS.neutralLight,
                    borderRadius: 5,
                    borderWidth: 1,
                    // padding:12
                    justifyContent: "center",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      color: COLORS.grey,

                      paddingHorizontal: 14,
                      fontSize: 15,
                      fontWeight: "700",
                      lineHeight: 18,
                      letterSpacing: 0.5,
                      //   textAlign:"center",
                      textAlignVertical: "center",
                    }}
                  >
                    {creditcard.cvc}
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                marginTop: 16,
              }}
            >
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 14,
                  fontWeight: "700",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  marginBottom: 12,
                }}
              >
                Card Holder
              </Text>

              <View
                style={{
                  height: 45,
                  borderColor: COLORS.neutralLight,
                  borderRadius: 5,
                  borderWidth: 1,
                  // padding:12
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,

                    paddingHorizontal: 14,
                    fontSize: 15,
                    fontWeight: "700",
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    //   textAlign:"center",
                    textAlignVertical: "center",
                  }}
                >
                  {creditcard.holder}
                </Text>
              </View>
            </View>
          </ScrollView>
          <View style={{ marginLeft: 16 }}>
            <TextButton
              label="Save"
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
              onPress={() => navigation.navigate("Payment")}
            />
            {/* <View style={{ marginBottom: 60 }}></View> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CardInfo;

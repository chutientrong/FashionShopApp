import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, icons, WIDTH } from "../constants";
import TextButton from "../components/TextButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const PaySuccess = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: COLORS.primaryBlue,
              borderRadius: 50,
              justifyContent: "center",
            }}
          >
            <Icon
              name="check"
              size={50}
              color={COLORS.white}
              style={{ alignSelf: "center" }}
            ></Icon>
          </View>

          {/* <Image
            source={icons.success}
            style={{ width: 150, height: 150, resizeMode: 'stretch',}}
          ></Image> */}
        </View>
        <Text
          style={{
            color: COLORS.neutralDark,
            marginTop: 16,
            fontSize: 24,
            fontWeight: "700",
            ...FONTS.fontPopinBold,
            lineHeight: 36,
            letterSpacing: 0.5,
          }}
        >
          Success
        </Text>
        <Text
          style={{
            color: COLORS.grey,
            marginTop: 8,
            fontSize: 14,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            lineHeight: 21,
            letterSpacing: 0.5,
            opacity: 0.5,
          }}
        >
          thank you for shopping using lafyuu
        </Text>
        <View style={{ marginLeft: 16, marginTop: 16 }}>
          <TextButton
            label="Back To Order"
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
            onPress={() => navigation.navigate("StackOrder")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaySuccess;

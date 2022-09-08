import { View, Text } from "react-native";
import React, { useState } from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS, SIZES } from "../constants";
import TextInput from "../components/TextInput";
import utils from "../utils/utils";
import TextButton from "../components/TextButton";

const ChangeEmail = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Email"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View style={{ marginTop: 16 }}>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 21,
              letterSpacing: 0.5,
              marginBottom: 12,
              marginHorizontal: 16,
            }}
          >
            Your Birthday
          </Text>

          <TextInput
            icon="mail-outline"
            placeholder="Delaxy@gmail.com"
            autoCapitalize="none"
            autoCompleteType="email"
            keyboardType="email-address"
            keyboardAppearance="dark"
            returnKeyType="next"
            returnKeyLabel="next"
            onChange={(value) => {
              utils.validateEmail(value, setEmailError);
              setEmail(value);
            }}
            active={emailError ? false : true}
            error={emailError ? true : false}
            errorMsg={emailError}
          />
          <Text
            style={{
              color: COLORS.primaryBlue,
              fontSize: 12,
              fontWeight: "400",
              ...FONTS.fontPopinRegular,
              lineHeight: 21,
              letterSpacing: 0.5,
              marginTop: 12,
              marginHorizontal: 16,
            }}
          >
            We Will Send verification to your New Email
          </Text>
        </View>
        <View style={{ marginHorizontal: 16 }}>
          <TextButton
            label="Change Email"
            // disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
              borderRadius: 5,
              height: 57,

              padding: 16,
              backgroundColor: COLORS.primaryBlue,
            }}
            labelStyle={{
              color: COLORS.white,
              ...FONTS.btnFont,
            }}
            onPress={() => navigation.navigate("Profile")}
          />
        </View>
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default ChangeEmail;

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES, WIDTH } from "../constants";
import TextButton from "../components/TextButton";
import TextInput from "../components/TextInput";
import AuthLayout from "./AuthLayout";
import utils from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";

const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function isEnableReset() {
    return email != "" && emailError == "";
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        //   flexDirection:'column',
        // flexWrap:'wrap',
        backgroundColor: COLORS.white,
      }}
    >
      <ScrollView>
        <AuthLayout
          title="Forgot Password"
          subTitle="Fill you email to reset your password"
        >
          <View
            style={{
              flex: 1,
              // marginTop: SIZES.sm,
            }}
          >
            <TextInput
              icon="mail-outline"
              placeholder="Your email"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              containerStyle={{
                marginTop: SIZES.x,
              }}
              onChange={(value) => {
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              active={emailError ? false : true}
              error={emailError ? true : false}
              errorMsg={emailError}
            />

            <TextButton
              label="Reset Password"
              disabled={isEnableReset() ? false : true}
              buttonContainerStyle={{
                borderRadius: 5,
                height: 57,
                width: WIDTH - 32,
                padding: 16,
                marginTop: 16,
                backgroundColor: isEnableReset()
                  ? COLORS.primaryBlue
                  : COLORS.transparentPrimary,

                // backgroundColor: null,
                marginLeft: 16,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.btnFont,
              }}
              onPress={() => navigation.navigate("Login")}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 24,
            }}
          >
            <Text style={{ marginTop: 4, color: COLORS.grey, ...FONTS.body5 }}>
              Have an account?
            </Text>
            <TextButton
              label=" Sign In"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primaryBlue,
                ...FONTS.btnFont,
              }}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});

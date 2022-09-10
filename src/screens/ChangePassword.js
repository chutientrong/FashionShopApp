import { View, Text } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, SIZES } from "../constants";
import TextInput from "../components/TextInput";
import TextHeader from "../components/TextHeader";
import TextButton from "../components/TextButton";
import utils from "../utils/utils";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangePassword = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [cfPasswordError, setCfPasswordError] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const fakePass = "123456789";
  const dot = (pass) => {
    let s = "";
    for (let i = 0; i < pass.length; i++) {
      s = s + "*";
    }
    return s;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={"Change Password"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
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
                Old Password
              </Text>

              <TextInput
                icon="lock-outline"
                placeholder={dot(fakePass)}
                secureTextEntry={true}
                autoCompleteType="password"
                keyboardAppearance="dark"
                // editable={true}
                returnKeyType="next"
                returnKeyLabel="next"
                onChange={(value) => {
                  utils.validateCfPassword(value, fakePass, setPasswordError);
                  setPassword(value);
                }}
                active={passwordError ? false : true}
                error={passwordError ? true : false}
                errorMsg={passwordError}
              />
            </View>
            <View style={{ marginTop: 16,}}>
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
                New Password
              </Text>
              <TextInput
                icon="lock-outline"
                placeholder={dot(fakePass)}
                secureTextEntry={true}
                autoCompleteType="password"
                keyboardAppearance="dark"
                // editable={true}
                returnKeyType="next"
                returnKeyLabel="next"
                onChange={(value) => {
                  utils.validatePassword(value, setNewPasswordError);
                  setNewPassword(value);
                }}
                active={newPasswordError ? false : true}
                error={newPasswordError ? true : false}
                errorMsg={newPasswordError}
              />
            </View>
            <View style={{ marginTop: 16,}}>
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
                New Password Again
              </Text>
              <TextInput
                icon="lock-outline"
                placeholder={dot(fakePass)}
                secureTextEntry={true}
                autoCompleteType="password"
                keyboardAppearance="dark"
                // editable={true}
                returnKeyType="next"
                returnKeyLabel="next"
                onChange={(value) => {
                  utils.validateCfPassword(
                    value,
                    newPassword,
                    setCfPasswordError
                  );
                  setCfPassword(value);
                }}
                active={cfPasswordError ? false : true}
                error={cfPasswordError ? true : false}
                errorMsg={cfPasswordError}
              />
            </View>
          </View >
          <View style={{ marginHorizontal: 16 }}>
            <TextButton
              label="Save"
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
        {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default ChangePassword;

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { registerUser } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthLayout from "./AuthLayout";
import { COLORS, FONTS, images, SIZES, WIDTH } from "../constants";
import TextInput from "../components/TextInput";
import TextButton from "../components/TextButton";
import utils from "../utils/utils";

import SocialButton from "../components/SocialButton";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setName] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cfPasswordError, setCfPasswordError] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [showCfPass, setShowCfPass] = useState(false);
  const [nameError, setNameError] = useState("");
  const [isLoad, setIsLoad] = useState(false);

  const dispatch = useDispatch();
  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  function isEnableSignUp() {
    return email != "" && username != "" && password != "" && emailError == "";
  }

  const handleRegister = () => {
    setIsLoad(true);
    let values = {
      username,
      email,
      password,
      // phoneNumber: '',
      // termsCondition: true,
    };
    dispatch(registerUser(values, navigation));
    setIsLoad(false);
  };

  useEffect(() => {
    let timeoutVariable;

    if (isLoad) {
      timeoutVariable = setTimeout(() => setIsLoad(false), 3000);
    }

    return () => clearTimeout(timeoutVariable);
  }, [isLoad]);

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
        <AuthLayout title="Let's Get Started" subTitle="Create a new account">
          <View
            style={
              {
                flex: 1,
                // marginTop: SIZES.sm,
              }
            }
          >
            <View></View>
            <TextInput
              icon="person-outline"
              placeholder="Full Name"
              autoCapitalize="none"
              autoCompleteType="name-family"
              keyboardType="default"
              keyboardAppearance="dark"
              returnKeyType="next"
              returnKeyLabel="next"
              containerStyle={{
                marginTop: SIZES.x,
              }}
              onChange={(value) => {
                utils.validateUsername(value, setNameError);
                setName(value);
              }}
              active={nameError ? false : true}
              error={nameError ? true : false}
              errorMsg={nameError}
            />
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
                marginTop: 8,
              }}
              onChange={(value) => {
                utils.validateEmail(value, setEmailError);
                setEmail(value);
              }}
              active={emailError ? false : true}
              error={emailError ? true : false}
              errorMsg={emailError}
            />
            <TextInput
              icon="lock-outline"
              placeholder="Password"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              keyboardAppearance="dark"
              // editable={true}
              returnKeyType="next"
              returnKeyLabel="next"
              containerStyle={{
                marginTop: SIZES.sm,
              }}
              onChange={(value) => {
                utils.validatePassword(value, setPasswordError);
                setPassword(value);
              }}
              active={passwordError ? false : true}
              error={passwordError ? true : false}
              errorMsg={passwordError}
            />
            <TextInput
              icon="lock-outline"
              placeholder="Password Again"
              secureTextEntry={!showPass}
              autoCompleteType="password"
              keyboardAppearance="dark"
              // editable={true}
              returnKeyType="next"
              returnKeyLabel="next"
              containerStyle={{
                marginTop: SIZES.sm,
              }}
              onChange={(value) => {
                utils.validateCfPassword(value, password, setCfPasswordError);
                setCfPassword(value);
              }}
              active={cfPasswordError ? false : true}
              error={cfPasswordError ? true : false}
              errorMsg={cfPasswordError}
            />
            <TextButton
              label="Sign In"
              disabled={isEnableSignUp() ? false : true}
              buttonContainerStyle={{
                borderRadius: 5,
                height: 57,
                width: WIDTH - 32,
                padding: 16,
                marginTop: 16,
                backgroundColor: isEnableSignUp()
                  ? COLORS.primaryBlue
                  : COLORS.transparentPrimary,

                // backgroundColor: null,
                marginLeft: 16,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.btnFont,
              }}
              onPress={handleRegister}
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
export default Register;

const styles = StyleSheet.create({});

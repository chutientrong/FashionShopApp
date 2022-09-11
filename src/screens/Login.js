import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { login } from "../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import AuthLayout from "./AuthLayout";
import { COLORS, FONTS, icons, images, SIZES, WIDTH } from "../constants";
import TextInput from "../components/TextInput";
import TextButton from "../components/TextButton";
import utils from "../utils/utils";

import SocialButton from "../components/SocialButton";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPass, setShowPass] = useState(false);
  const [saveMe, setSaveMe] = useState(false);
  const [isLoad, setIsLoad] = useState(true);

  const [colorActive, setColorActive] = useState("");
  const dispatch = useDispatch();

  const { user, isLoading, error, token } = useSelector((state) => state.auth);

  // let token = AsyncStorage.getItem('auth');

  function isEnableSignIn() {
    return email != "" && password != "" && emailError == "";
  }

  const handleLogin = () => {
    setIsLoad(true);
    let values = {
      email,
      password,
    };
    dispatch(login(values));
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
        <AuthLayout title="Wellcome to Lafyuu" subTitle="Sign in to continue">
          <View
            style={{
              flex: 1,
              // marginTop: SIZES.sm,
            }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "#fff",
                // alignItems: "center",
                // justifyContent: "flex-start",
              }}
            >
              <View
                style={{
                  // paddingHorizontal: 32,
                  marginBottom: 21,
                  // width: "100%",
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
                <TextButton
                  label="Sign In"
                  disabled={isEnableSignIn() ? false : true}
                  buttonContainerStyle={{
                    borderRadius: 5,
                    height: 57,
                    width: WIDTH - 32,
                    padding: 16,
                    marginTop: 16,
                    backgroundColor: isEnableSignIn()
                      ? COLORS.primaryBlue
                      : COLORS.transparentPrimary,

                    // backgroundColor: null,
                    marginLeft: 16,
                  }}
                  labelStyle={{
                    color: COLORS.white,
                    ...FONTS.btnFont,
                  }}
                  // onPress={handleLogin}
                  onPress={()=>navigation.navigate("Main")} // FOR RELEASE
                />
              </View>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,
                    fontWeight: "700",
                    ...FONTS.body3,
                  }}
                >
                  OR
                </Text>
              </View>
              <View style={{ alignItems: "center", flexDirection: "column" }}>
                <SocialButton
                  buttonContainerStyle={{
                    borderRadius: 5,
                    height: 57,
                    width: WIDTH - 32,
                    padding: 16,
                    // marginTop: 16,
                  }}
                  image={images.google}
                  label="Login with Google"
                  labelStyle={{ ...FONTS.btnFont }}
                ></SocialButton>
                <SocialButton
                  buttonContainerStyle={{
                    borderRadius: 5,
                    height: 57,
                    width: WIDTH - 32,
                    padding: 16,
                    // marginTop: 8,
                  }}
                  image={images.facebook}
                  label="Login with Facebook"
                  labelStyle={{ ...FONTS.btnFont }}
                ></SocialButton>
              </View>
              <View
                style={{
                  marginTop: 16,
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <TextButton
                  label="Forgot Password?"
                  buttonContainerStyle={{
                    backgroundColor: null,
                  }}
                  labelStyle={{
                    color: COLORS.primaryBlue,
                    ...FONTS.btnFont,
                  }}
                  onPress={() => navigation.navigate("ForgotPassword")}
                />
                <View
                  style={{
                    flexDirection: "row",
                    // marginTop: 8,
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{ marginTop: 4, color: COLORS.grey, ...FONTS.body5 }}
                  >
                    Don't have account?
                  </Text>
                  <TextButton
                    label=" Register"
                    buttonContainerStyle={{
                      backgroundColor: null,
                    }}
                    labelStyle={{
                      color: COLORS.primaryBlue,
                      ...FONTS.btnFont,
                    }}
                    onPress={() => navigation.navigate("Register")}
                  />
                </View>
              </View>
            </View>
          </View>
        </AuthLayout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

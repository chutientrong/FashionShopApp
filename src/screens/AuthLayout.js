import { Text, View, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, images, SIZES } from "../constants";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { icons } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = ({ title, subTitle, titleContainerStyle, children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          paddingTop: SIZES.md,
          backgroundColor: COLORS.primary,
        }}
      >
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            flex: 1,
            // paddingHorizontal: SIZES.lg,
            // paddingTop: SIZES.sm,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Image
              source={icons.logo2}
              style={{ marginTop: 55 }}
              resizeMode="contain"
            />
          </View>
          <View style={{ marginTop: SIZES.md, ...titleContainerStyle }}>
            <Text style={{ textAlign: "center", ...FONTS.Heading4 }}>
              {title}
            </Text>
            <Text
              style={{
                marginTop: SIZES.sxm,
                color: COLORS.darkGray2,
                textAlign: "center",
                ...FONTS.body5,
              }}
            >
              {subTitle}
            </Text>
          </View>
          {children}
        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AuthLayout;

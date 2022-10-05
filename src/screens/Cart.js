import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";

import HomeHeader from "../components/HomeHeader";
import { COLORS, FONTS, WIDTH } from "../constants";
import CartComponent from "../components/CartComponent";
import { cart } from "../models/Cart";
import TextButton from "../components/TextButton";
import CouponForm from "../components/CouponForm";
import utils from "../utils/utils";
import { useState } from "react";
import DashedLine from "../components/DashedLine";
import { SafeAreaView } from "react-native-safe-area-context";

const Cart = ({ navigation }) => {
  const [coupon, setCoupon] = useState("");
  const [couponError, setCouponError] = useState("");

  const inputcoupon = "INPUTCOUPON";
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <HomeHeader title={"Your Cart"}></HomeHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <ScrollView>
          <View style={{ margin: 16, height: 230 }}>
            <CartComponent data={cart}></CartComponent>
          </View>

          <View>
            <CouponForm
              onChange={(value) => {
                utils.validateCoupon(value, setCouponError, inputcoupon);
                setCoupon(value);
              }}
              active={couponError ? false : true}
              error={couponError ? true : false}
              errorMsg={couponError}
            ></CouponForm>
          </View>

          <View
            style={{
              marginHorizontal: 16,
              padding: 16,
              flexDirection: "column",
            }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: COLORS.grey,
                  alignItems: "center",
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Items (3)
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                $598.86
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: COLORS.grey,
                  alignItems: "center",
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Shipping
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                $40.00
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: COLORS.grey,
                  alignItems: "center",
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Import charges
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                $128.00
              </Text>
            </View>
            <DashedLine spacing={16} color={COLORS.neutralLight}></DashedLine>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: COLORS.neutralDark,
                  alignItems: "center",
                  fontSize: 14,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  color: COLORS.primaryBlue,
                  fontSize: 16,
                  fontWeight: "700",
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                $598.86
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginLeft: 16 }}>
          <TextButton
            label="Check Out"
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
            onPress={() => navigation.navigate("ShipTo")}
          />
        </View>
        {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default Cart;

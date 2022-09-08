import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import ProgressBar from "../components/ProgressBar";
import { orderdetails, paymentdetails, shippingdetails } from "../models/Order";
import OrderProductCard from "../components/OrderProductCard";
import DashedLine from "../components/DashedLine";
import TextButton from "../components/TextButton";

const OrderDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Order Details"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{flex: 1, justifyContent: "space-between" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <ProgressBar></ProgressBar>
        </View>

        <View
          style={{
            //   flex: 1,
            // marginTop: SIZES.sm,
            margin: 16,
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
            Product
          </Text>
          {orderdetails.map((item, index) => (
            <View key={index}>
              <OrderProductCard data={item}></OrderProductCard>
            </View>
          ))}
        </View>
        <View
          style={{
            //   flex: 1,
            // marginTop: SIZES.sm,
            marginHorizontal: 16,
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
            Shipping Details
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.neutralLight,
              borderRadius: 5,
              padding: 16,
            }}
          >
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
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Date Shipping
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {shippingdetails.date}
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
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Shipping
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {shippingdetails.shipping}
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
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                No. Resi
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {shippingdetails.no}
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
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Address
              </Text>
              <Text
                // numberOfLines={3}
                style={{
                  flex: 0.6,
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,

                  textAlign: "right",
                  // borderWidth: 1,
                }}
              >
                {shippingdetails.address}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            //   flex: 1,
            // marginTop: SIZES.sm,
            margin: 16,
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
            Payment Details
          </Text>

          <View
            style={{
              borderWidth: 1,
              borderColor: COLORS.neutralLight,
              borderRadius: 5,
              padding: 16,
            }}
          >
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
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Items ({paymentdetails.numitem})
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {paymentdetails.item}
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
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Shipping
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {paymentdetails.shipping}
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
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Import Charges
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {paymentdetails.charge}
              </Text>
            </View>
            <DashedLine spacing={20} color={COLORS.neutralLight}></DashedLine>
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
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  opacity: 0.5,
                }}
              >
                Total Price
              </Text>
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                {paymentdetails.item}
              </Text>
            </View>
          </View>
        </View>
        {/* <View style={{ marginBottom: 60 }}></View> */}
      </ScrollView>
      <View style={{ marginHorizontal: 16 }}>
          <TextButton
            label="Notify Me"
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
            onPress={() => navigation.navigate("Order")}
          />

        </View>
      </View>
      {/* <Text>OrderDetails</Text> */}
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default OrderDetails;

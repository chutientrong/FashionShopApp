import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomeHeader from "../components/HomeHeader";
import { COLORS, FONTS, WIDTH } from "../constants";
import CountDownBox from "../components/CarouselComponents/CountDownBox";
import { SafeAreaView } from "react-native-safe-area-context";

const Offer = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <HomeHeader title={"Your Cart"}></HomeHeader>
        {/* ADD LINE */}

        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <ScrollView>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primaryBlue,
              height: 80,
              margin: 16,
              borderRadius: 5,
              padding: 16,
            }}
            onPress={(item) => navigation.navigate("OfferDetails")}
          >
            <Text
              style={{
                color: COLORS.white,
                width: "65%",
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinBold,
                lineHeight: 24,
                letterSpacing: 0.5,
              }}
            >
              Use “MEGSL” Cupon For Get 90%off
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flext: 1,
              borderRadius: 5,

              overflow: "hidden",
              marginHorizontal: 16,
            }}
            onPress={(item) => navigation.navigate("OfferDetails")}
          >
            <ImageBackground
              source={require("../assets/images/product/recommend.png")}
              style={{
                height: 160,
                padding: 24,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  width: "80%",
                  fontSize: 24,
                  fontWeight: "700",
                  ...FONTS.fontPopinBold,
                  lineHeight: 36,
                  letterSpacing: 0.5,
                }}
              >
                Super Flash Sale 50% Off
              </Text>
              <View
                style={{ position: "absolute", marginLeft: 24, bottom: 16 }}
              >
                <CountDownBox time={1000}></CountDownBox>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flext: 1,
              borderRadius: 5,
              margin: 16,
              overflow: "hidden",
              marginHorizontal: 16,
            }}
            onPress={(item) => navigation.navigate("OfferDetails")}
          >
            <ImageBackground
              source={require("../assets/images/product/recommend.png")}
              style={{
                height: 160,
                padding: 24,
              }}
            >
              <Text
                style={{
                  color: COLORS.white,
                  width: "90%",
                  fontSize: 24,
                  fontWeight: "700",
                  ...FONTS.fontPopinBold,
                  lineHeight: 36,
                  letterSpacing: 0.5,
                }}
              >
                90% Off Super Mega Sale
              </Text>
              <Text
                style={{
                  marginTop: 8,
                  color: COLORS.white,
                  width: "90%",
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Special birthday Lafyuu
              </Text>
            </ImageBackground>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Offer;

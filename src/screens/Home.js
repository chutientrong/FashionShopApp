import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StatusBar, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../redux/actions/authActions";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS } from "../constants";
import CarouselFlashSale from "../components/CarouselFlashSale";
import { discount, flashsale } from "../models/FlashSaleFake";
import { fakedata } from "../models/fakedata";
import TextButton from "../components/TextButton";
import Category from "../components/Category";
import { category } from "../models/CategoryData";
import FlashSale from "../components/FlashSale";

const Home = ({ navigation }) => {
  const theme = "dark";
  const dispatch = useDispatch();
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  const handleLogout = () => {
    dispatch(logout);
  };
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <ScrollView style={{}}>
        <Header
          children={
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <SearchInput
                icon="search"
                placeholder="Search Product"
                autoCapitalize="none"
                keyboardType="default"
                keyboardAppearance="dark"
                returnKeyType="next"
                returnKeyLabel="next"
                containerStyle={{}}
              ></SearchInput>
              <Icon
                name="heart-outline"
                color={COLORS.grey}
                size={24}
                style={{ fontWeight: "700" }}
              ></Icon>
              <Icon
                name="notifications-outline"
                color={COLORS.grey}
                size={24}
                style={{ fontWeight: "700" }}
              ></Icon>
            </View>
          }
        ></Header>
        {/* ADD LINE */}
        <View
          style={{ flex: 1, height: 1, backgroundColor: COLORS.neutralLight }}
        />
        {/* CAROUSEL AND COUNT DOWN */}
        <View style={{ margin: 16 }}>
          <CarouselFlashSale data={flashsale}></CarouselFlashSale>
        </View>

        {/* CATEGORY */}

        <View style={{ margin: 16, flexDirection: "column", height: 140 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: COLORS.neutralDark,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
            >
              Category
            </Text>
            <TextButton
              label="More Category"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primaryBlue,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
              onPress={() => console.log("category")}
            />
          </View>
          <Category data={category}></Category>
        </View>

        {/* FLASH SALE  */}

        <View
          style={{
            margin: 16,
            flexDirection: "column",
            marginTop: 8,
            height: 270,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: COLORS.neutralDark,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
            >
              Flash Sale
            </Text>
            <TextButton
              label="See More"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primaryBlue,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
              onPress={() => console.log("flash sale")}
            />
          </View>
          <FlashSale></FlashSale>
        </View>

        {/* MEGA SALE  */}
        <View
          style={{
            margin: 16,
            marginTop: 8,
            flexDirection: "column",
            height: 270,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                color: COLORS.neutralDark,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
            >
              Mega Sale
            </Text>
            <TextButton
              label="See More"
              buttonContainerStyle={{
                backgroundColor: null,
              }}
              labelStyle={{
                color: COLORS.primaryBlue,
                fontWeight: "700",
                ...FONTS.btnFont,
              }}
              onPress={() => console.log("Mega sale")}
            />
          </View>
          <FlashSale></FlashSale>
        </View>

        {/* RECOMMEND PRODUCT  */}

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            style={{ fontSize: 20, color: "green" }}
            onPress={handleLogout}
            title="Press"
          >
            Press
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Button, Image, ScrollView, StatusBar, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../redux/actions/authActions";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS, FONTS, WIDTH } from "../constants";
import CarouselFlashSale from "../components/CarouselFlashSale";
import { discount, flashsale } from "../models/FlashSaleFake";
import TextButton from "../components/TextButton";
import Category from "../components/Category";
import { category } from "../models/CategoryData";
import FlashSale from "../components/FlashSale";
import MegaSale from "../components/MegaSale";
import {
  productFSsale,
  productMGsale,
  productRecommend,
} from "../models/ProductSale";
import Recommend from "../components/Recommend";


const Home = ({ navigation }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
              onPress={() => navigation.navigate("Favorite")}
            ></Icon>
            <Icon
              name="notifications-outline"
              color={COLORS.grey}
              size={24}
              style={{ fontWeight: "700" }}
              onPress={() => navigation.navigate("Notification")}
            ></Icon>
          </View>
        }
      ></Header>
      {/* ADD LINE */}
      <View
        style={{
          height: 1,
          backgroundColor: COLORS.neutralLight,
        }}
      />
      <ScrollView nestedScrollEnabled={true}>
        {/* CAROUSEL AND COUNT DOWN */}
        <View style={{ marginTop: 16 }}>
          <CarouselFlashSale
            data={flashsale}
            navigation={navigation}
          ></CarouselFlashSale>
        </View>

        {/* CATEGORY */}

        <View
          style={{
            margin: 16,
            flexDirection: "column",
            height: 140,
            marginTop: 16,
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
              // onPress={() => console.log("category")}
              onPress={() => navigation.navigate("NotificationFeed")}
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
          
          <FlashSale
            data={productFSsale}
            onPress={() => console.log("aaaaa")}
navigation={navigation}
          ></FlashSale>
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
          <MegaSale data={productMGsale} navigation={navigation}></MegaSale>
        </View>

        {/* RECOMMEND PRODUCT  */}
        <View
          style={{ flext: 1, marginLeft: 16, width: WIDTH - 32, marginTop: 8 }}
        >
          <Image
            source={require("../assets/images/product/recommend.png")}
            style={{
              flext: 1,
              width: WIDTH - 32,
              borderRadius: 5,
              borderWidth: 2,
            }}
          ></Image>
          {/* </View> */}
          <Text
            style={{
              position: "absolute",
              top: 48,
              marginLeft: 32,
              color: COLORS.white,
              width: 170,
              fontSize: 24,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 36,
              textAlignVertical: "top",
            }}
          >
            Recommend Product
          </Text>
          <Text
            style={{
              position: "absolute",
              bottom: 48,
              marginLeft: 32,
              color: COLORS.white,
              fontSize: 12,
              fontWeight: "400",
              ...FONTS.fontPopinRegular,
              lineHeight: 22,
              textAlignVertical: "top",
            }}
          >
            We recommend the best for you
          </Text>
        </View>
        <ScrollView nestedScrollEnabled={true} horizontal={true}>
          <Recommend
            data={productRecommend}
            navigation={navigation}
          ></Recommend>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

export default Home;

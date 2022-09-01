import React, { useLayoutEffect } from "react";
import PropTypes from "prop-types";
import { Button, ScrollView, StatusBar, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { logout } from "../redux/actions/authActions";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../constants";
import CarouselFlashSale from "../components/CarouselFlashSale";
import { discount, flashsale } from "../models/FlashSaleFake";
import { fakedata } from "../models/fakedata";

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
        <View style={{flex: 1, height: 1, backgroundColor: COLORS.neutralLight}} />
        {/* <ScrollView
        style={{}}
        contentContainerStyle={{ paddingBottom: 100 }}
      > */}
        <View
        style={{margin:16}}>

          <CarouselFlashSale data={flashsale}></CarouselFlashSale>
        </View>
        {/* </ScrollView> */}
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Button
            style={{ fontSize: 20, color: "green" }}
            onPress={handleLogout}
            title="Press"
          >
            Press
          </Button>
        </View>
        {/* <Text>Home content area</Text> */}

        {/* <View style={gStyle.spacer64} /> */}
      </ScrollView>
    </View>
  );
};

export default Home;

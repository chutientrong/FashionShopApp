import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import { ScrollView } from "react-native-gesture-handler";
import TextInput from "../components/TextInput";
import ProfileForm from "../components/ProfileForm";
import utils from "../utils/utils";
import { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import SearchSlider from "../components/SearchSlider";
import { buying, condition, location, show } from "../models/Search";
import SearchButton from "../components/SearchButton";

// import Slider from 'rn-range-slider';

const SearchFilter = ({ navigation, route }) => {
  const [minPrice, setMinPrice] = useState(1245);
  const [minPriceError, setMinPriceError] = useState("");
  const [maxPrice, setMaxPrice] = useState(9245);
  const [maxPriceError, setMaxPriceError] = useState("");

  const { min, max } = { min: 0, max: 10000 };
  const [width, setWidth] = useState(WIDTH);
  const [selected, setSelected] = useState(null);

  // CONVERT NUMBER
  function ConvertDot(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  function numberWithCommas(num) {
    return num.toString().replace(/\d(?=(?:\d{3})+$)/g, "$&.");
  }

  // console.log(numberWithCommas(1232132132.111))
  // SLIDER
  if (!selected) {
    setSelected([minPrice, maxPrice]);
  }

  // Callbacks
  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width - 2 * 2);
  };
  const onValuesChangeFinish = (values) => {
    setSelected(values);
    // console.log(selected[0]);
  };
  const onValuesChange = (values) => {
    setSelected(values);
    setMinPrice(selected[0]);
    setMaxPrice(selected[1]);
    // console.log(selected[0]);
    // console.log(selected[1]);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={"Filter Search"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <View style={{flex:1, marginHorizontal: 16 }}>
          <ScrollView
            style={{ flex:1, }}
            showsVerticalScrollIndicator={false}
          >
            {/* PRICE  */}
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
                }}
              >
                Price Range
              </Text>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ProfileForm
                  value={numberWithCommas(minPrice)}
                  containerStyle={{ width: WIDTH / 2 - 24 }}
                  onChange={(value) => {
                    utils.validateInput(value, setMinPriceError);
                    setMinPrice(value);
                    console.log("min", value);
                  }}
                  keyboardType="number"

                  //   active={couponError ? false : true}
                  // error={minPriceError ? true : false}
                  // errorMsg={minPriceError}
                ></ProfileForm>

                <ProfileForm
                  value={maxPrice.toLocaleString("en")}
                  containerStyle={{ width: WIDTH / 2 - 24 }}
                  onChange={(value) => {
                    utils.validateInput(value, setMaxPriceError);
                    setMaxPrice(value);
                  }}
                  //   active={couponError ? false : true}
                  // error={maxPriceError ? true : false}
                  // errorMsg={maxPriceError}
                ></ProfileForm>
              </View>
              <View
                onLayout={onLayout}
                style={{
                  flex: 1,
                  // margin: 2 * 2,
                  justifyContent: "center",
                  alignItems: "center",
                  marginHorizontal: 16,
                  marginTop: 12,
                }}
              >
                <MultiSlider
                  min={min}
                  max={max}
                  allowOverlap
                  values={selected}
                  sliderLength={width}
                  // onValuesChangeFinish={onValuesChangeFinish}
                  onValuesChange={onValuesChange}
                  // enableLabel={true}
                  // customLabel={SliderCustomLabel(textTransformerTimes)}
                  trackStyle={{
                    height: 4,
                    borderRadius: 8,
                  }}
                  markerOffsetY={2}
                  selectedStyle={{
                    backgroundColor: COLORS.primaryBlue,
                  }}
                  unselectedStyle={{
                    backgroundColor: COLORS.neutralLight,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    // marginBottom: 12,
                  }}
                >
                  MIN
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    // marginBottom: 12,
                  }}
                >
                  MAX
                </Text>
              </View>
            </View>

            <View style={{ marginTop: 8 }}>
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
                Condition
              </Text>
              <ScrollView
                horizontal
                style={{ width: WIDTH }}
                showsHorizontalScrollIndicator={false}
              >
                <FlatList
                  contentContainerStyle={{ flex: 1, width: WIDTH }}
                  numColumns={Math.ceil(buying.length / 2)}
                  showsVerticalScrollIndicator={false}
                  data={condition}
                  renderItem={({ item }) => (
                    <SearchButton data={item}></SearchButton>
                  )}
                ></FlatList>
              </ScrollView>
            </View>
            <View style={{ marginTop: 8 }}>
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
                Buying Format
              </Text>
              <ScrollView
                horizontal
                style={{ width: WIDTH }}
                showsHorizontalScrollIndicator={false}
              >
                <FlatList
                  contentContainerStyle={{ flex: 1, width: WIDTH }}
                  numColumns={Math.ceil(buying.length / 2)}
                  showsVerticalScrollIndicator={false}
                  // style={{ flexWrap: "wrap" }}
                  data={buying}
                  renderItem={({ item }) => (
                    <SearchButton data={item}></SearchButton>
                  )}
                ></FlatList>
              </ScrollView>
            </View>
            <View style={{ marginTop: 8 }}>
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
                Item Location
              </Text>
              <ScrollView
                horizontal
                style={{ width: WIDTH }}
                showsHorizontalScrollIndicator={false}
              >
                <FlatList
                  contentContainerStyle={{ flex: 1, width: WIDTH }}
                  numColumns={Math.ceil(buying.length / 2)}
                  showsVerticalScrollIndicator={false}
                  // style={{ flexWrap: "wrap" }}
                  data={location}
                  renderItem={({ item }) => (
                    <SearchButton data={item}></SearchButton>
                  )}
                ></FlatList>
              </ScrollView>
            </View>
            <View style={{ marginTop: 8 }}>
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
                Show Only
              </Text>
              <ScrollView
                horizontal
                style={{ flex: 1, width: WIDTH }}
                showsHorizontalScrollIndicator={false}
              >
                <FlatList
                  contentContainerStyle={{ width: WIDTH }}
                  numColumns={2}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  // style={{ flexWrap: "wrap" }}
                  data={show}
                  renderItem={({ item }) => (
                    <SearchButton data={item}></SearchButton>
                  )}
                ></FlatList>
              </ScrollView>
            </View>
          </ScrollView>
        </View>  
         {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default SearchFilter;

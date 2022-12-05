import { View, Text, Image } from "react-native";
import React from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS, WIDTH } from "../constants";
import FlatListSlider from "../components/CarouselComponents/FlatlistSlider";
import { productimage } from "../models/ProductDetail";
import Icon from "react-native-vector-icons/Ionicons";
import StarRating from "../components/StarRating";
import { sizedata } from "../models/Size";
import BorderButton from "../components/BorderButton";
import { ScrollView } from "react-native-gesture-handler";
import { colordata } from "../models/Colors";
import ColorButton from "../components/ColorButton";
import TextButton from "../components/TextButton";
import { reviewimage } from "../models/Review";
import { flashsale } from "../models/FlashSaleFake";
import ProductCard from "../components/ProductCard";
import { productMGsale } from "../models/ProductSale";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route, navigation }) => {
  const data = route.params;

  // console.log("data ", data);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader
          title={data.name}
          rightIconName={"search"}
          rightIconName2={"more-vert"}
          navigation={navigation}
        ></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <ScrollView
          nestedScrollEnabled={true}
          showsHorizontalScrollIndicator={true}
          style={{ flex: 1 }}
        >
          <View style={{ marginTop: 16 }}>
            <FlatListSlider
              data={productimage}
              timer={5000}
              imageKey={"image"}
              local={true}
              width={WIDTH}
              height={200}
              separatorWidth={0}
              loop={true}
              autoscroll={true}
              onPress={(item) => console.log("ProductDetails")}
              indicator
              animation
            />
            <View style={{ margin: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  numberOfLines={2}
                  style={{
                    color: COLORS.neutralDark,
                    marginTop: 8,
                    fontSize: 20,

                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 26,

                    textAlign: "left",
                    width: "85%",
                    letterSpacing: 0.5,
                  }}
                >
                  {data.name}
                </Text>
                <Icon
                  name="heart-outline"
                  color={COLORS.grey}
                  size={26}
                  style={{ fontWeight: "700", marginTop: 8 }}
                ></Icon>
              </View>
              <View style={{}}>
                <StarRating rating={data.rating} size={16}></StarRating>
              </View>
              <Text
                style={{
                  color: COLORS.primaryBlue,
                  marginTop: 16,
                  fontSize: 20,
                  height: 30,
                  fontWeight: "700",
                  ...FONTS.fontPopinRegular,
                  textAlignVertical: "top",
                  textAlign: "left",
                  letterSpacing: 0.5,
                }}
              >
                ${data.cost}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: 16, height: 85 }}>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
            >
              Select Size
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {sizedata.map((item, index) => (
                <View key={index}>
                  <BorderButton title={item}></BorderButton>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ marginLeft: 16, marginTop: 16 }}>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
            >
              Select Color
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {colordata.map((item, index) => (
                <View key={index}>
                  <ColorButton color={item}></ColorButton>
                </View>
              ))}
            </ScrollView>
          </View>
          <View style={{ flexDirection: "column", margin: 16 }}>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
            >
              Specification
            </Text>
            <View>
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
                  }}
                >
                  Shown:
                </Text>
                <Text
                  numberOfLines={3}
                  style={{
                    textAlign: "right",
                    width: 170,
                    color: COLORS.grey,
                    fontSize: 12,
                    fontWeight: "400",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                  }}
                >
                  Laser {"\n"}Blue/Anthracite/Watermelon/White
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 16,
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
                }}
              >
                Style
              </Text>
              <Text
                style={{
                  textAlign: "right",
                  width: 170,
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                CD0113-400
              </Text>
            </View>
            <View style={{ marginTop: 16 }}>
              <Text
                style={{
                  // textAlign: "right",
                  // width: 170,
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                The Nike Air Max 270 React ENG combines a full-length React foam
                midsole with a 270 Max Air unit for unrivaled comfort and a
                striking visual experience.
              </Text>
            </View>
          </View>

          <View style={{ margin: 16 }}>
            {/* SEEE MORE  */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text
                style={{
                  color: COLORS.neutralDark,
                  fontSize: 14,
                  fontWeight: "700",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                }}
              >
                Review Product
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
                onPress={() => navigation.navigate("Reviews")}
              />
            </View>

            <View>
              <StarRating
                rating={4.5}
                size={16}
                showReview={true}
                reviews={5}
              ></StarRating>
            </View>

            <View style={{ flexDerection: "row", marginTop: 16 }}>
              {/* PROFILE  */}

              <View style={{ flexDirection: "row" }}>
                <Image
                  style={{ width: 48, height: 48, resizeMode: "stretch" }}
                  source={require("../assets/images/user/profile.png")}
                ></Image>

                <View style={{ marginLeft: 16 }}>
                  <Text
                    style={{
                      color: COLORS.neutralDark,
                      fontSize: 14,
                      fontWeight: "700",
                      ...FONTS.fontPopinRegular,
                      lineHeight: 21,
                      letterSpacing: 0.5,
                    }}
                  >
                    James Lawson
                  </Text>

                  <StarRating rating={4.5} size={16}></StarRating>
                </View>
              </View>

              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  marginTop: 16,
                }}
              >
                air max are always very comfortable fit, clean and just perfect
                in every way. just the box was too small and scrunched the
                sneakers up a little bit, not sure if the box was always this
                small but the 90s are and will always be one of my favorites.
              </Text>
            </View>
            <View style={{ marginTop: 16 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {reviewimage.map((item, index) => (
                  <View key={index}>
                    <Image
                      style={{
                        width: 72,
                        height: 72,
                        marginRight: 12,
                        borderRadius: 8,
                      }}
                      source={item.image}
                    ></Image>
                  </View>
                ))}
              </ScrollView>
            </View>
            <Text
              style={{
                color: COLORS.grey,
                fontSize: 10,
                fontWeight: "400",
                ...FONTS.fontPopinRegular,
                lineHeight: 15,
                letterSpacing: 0.5,
                marginTop: 16,
              }}
            >
              Sepember 3, 2022
            </Text>
          </View>

          <View style={{ marginLeft: 16, marginTop: 16 }}>
            <Text
              style={{
                color: COLORS.neutralDark,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
            >
              You May Also Like
            </Text>

            <View style={{ height: 244, marginTop: 12 }}>
              <ScrollView
                horizontal
                nestedScrollEnabled={true}
                style={{ width: "100%" }}
                showsHorizontalScrollIndicator={false}
              >
                {productMGsale.map((item, index) => (
                  <View key={index}>
                    {/* <Text>{item.name}</Text> */}
                    <ProductCard
                      image={item.image}
                      name={item.name}
                      cost={item.cost}
                      preCost={item.preCost}
                      discount={item.discount}
                      // navigation={navigation}
                    ></ProductCard>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View style={{ marginLeft: 16 }}>
          <TextButton
            label="Add to Cart"
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
            onPress={{}}
          />
        </View>
        {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;

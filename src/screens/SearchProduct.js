import {
  View,
  Text,
  FlatList,
  TextInput,
  ListItem,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useState } from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/Ionicons";
import Icon4 from "react-native-vector-icons/Octicons";
import SearchResult from "../components/SearchResult";
import { searchresult } from "../models/Search";
import TextButton from "../components/TextButton";
import { useRoute } from "@react-navigation/native";

const SearchProduct = ({ navigation }) => {
  // const {param,setParam}=setState()

  // const {cateName}=route;
  const route = useRoute();
  const cateName = route.params;

  console.log("param", cateName);

  const [state, setState] = useState({
    data: [],
    value: "",
  });

  const [hideresult, setHideResult] = useState(true);
  const [foundsub, setFoundSub] = useState(" ");

  const arrayNew = [
    { name: "Nike Air Max 270 React ENG" },
    { name: "Nike Air Vapormax 360" },
    { name: "Nike Air Max 270 React VIE" },
    { name: "Nike Air Max 270 React" },
    { name: "Nike Air VaporMax Flyknit 3" },
    { name: "Nike Air Max 97 Utility" },
    { name: "sophie" },
    { name: "Brad" },
    { name: "Samual" },
    { name: "Omur" },
    { name: "Ower" },
    { name: "Awery" },
    { name: "Ann" },
    { name: "Jhone" },
    { name: "z" },
    { name: "bb" },
    { name: "cc" },
    { name: "d" },
    { name: "e" },
    { name: "f" },
    { name: "g" },
    { name: "h" },
    { name: "i" },
    { name: "j" },
    { name: "k" },
    { name: "l" },
  ];

  const searchItems = (text) => {
    const newData = arrayNew.filter((item) => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setState({
      data: newData,
      value: text,
    });
  };

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:COLORS.white }}>
      <View
        style={{
          flex: 1,
          // padding: 25,
          width: "100%",
          alignSelf: "center",
          justifyContent: "center",
          // borderWidth: 1,
        }}
      >
        <View
          style={{
            height: 90,
            padding: 16,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              //   width: 343,
              marginTop: 16,
              width: hideresult ? WIDTH * 0.75 : WIDTH * 0.7,
              height: 46,
              borderRadius: 5,
              borderColor: COLORS.primaryBlue,
              borderWidth: 1,

              //   left: 16,
            }}
          >
            <View style={{ padding: 8 }}>
              <Icon name={"search"} color={COLORS.primaryBlue} size={24} />
            </View>
            <View style={{ flex: 1 }}>
              <TextInput
                numberOfLines={1}
                underlineColorAndroid="transparent"
                placeholderTextColor={COLORS.grey}
                showSoftInputOnFocus={true}
                // autoFocus={true}

                style={{
                  color: COLORS.grey,
                  fontSize: 12,
                  lineHeight: 21.6,
                  fontWeight: "700",
                }}
                placeholder="Search Product"
                onChangeText={(text) => {
                  searchItems(text);
                  setHideResult(true);
                }}
                value={state.value}
                onSubmitEditing={(text) => {
                  console.log("text", state.value);

                  if (state.value == "") {
                    setFoundSub(false);
                  } else {
                    setFoundSub(true);
                  }
                }}
              />
            </View>
            <View style={{ padding: 8 }}>
              <Icon
                name={"clear"}
                color={COLORS.primaryBlue}
                size={24}
                onPress={() => {
                  setState({ value: "" });
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {hideresult ? (
              <Icon2
                name={"mic-outline"}
                color={COLORS.primaryBlue}
                size={26}
                // onPress={() => setState({ value: "" })}
              />
            ) : (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Icon4
                  name="sort-desc"
                  size={24}
                  color={COLORS.grey}
                  style={{ marginRight: 8 }}
                  onPress={() => navigation.navigate("SearchSort")}
                ></Icon4>
                <Icon3
                  name="filter"
                  size={24}
                  color={COLORS.primaryBlue}
                  onPress={() => navigation.navigate("SearchFilter")}
                ></Icon3>
              </View>
            )}
          </View>
        </View>
        {/* ADD LINE */}
        <View
          style={{
            height: 1,
            backgroundColor: COLORS.neutralLight,
          }}
        />
        {hideresult ? (
          <View style={{ flex: 5 }}>
            <FlatList
              data={state.data}
              // contentContainerStyle={{borderWidth: 3,}}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={{ height: 50, padding: 16 }}
                  onPress={() => {
                    setState({ value: item.name });
                    setHideResult(false);
                    setFoundSub(true);
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.grey,
                      fontSize: 12,
                      lineHeight: 21,
                      fontWeight: "700",
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        ) : null}

        <View style={{ flex: 1 }}>
          {!hideresult ? (
            foundsub ? (
              <View style={{}}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    margin: 16,
                  }}
                >
                  <Text
                    style={{
                      color: COLORS.grey,
                      fontSize: 14,
                      lineHeight: 21.6,
                      fontWeight: "700",
                      marginRight: 8,
                    }}
                  >
                    {searchresult.length} Result
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("SearchCategory")}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text
                        style={{
                          color: COLORS.neutralDark,
                          fontSize: 14,
                          lineHeight: 21.6,
                          fontWeight: "700",
                          marginRight: 8,
                        }}
                      >
                        {cateName || "Man Shoes"}
                      </Text>
                      <Icon
                        name="keyboard-arrow-down"
                        size={24}
                        color={COLORS.grey}
                      ></Icon>
                    </View>
                  </TouchableOpacity>
                </View>
                <ScrollView style={{ width: WIDTH }} horizontal>
                  <SearchResult
                    data={searchresult}
                    navigation={navigation}
                  ></SearchResult>
                </ScrollView>
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "column" }}>
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: COLORS.primaryBlue,
                      borderRadius: 50,
                      justifyContent: "center",
                    }}
                  >
                    <Icon
                      name="clear"
                      size={50}
                      color={COLORS.white}
                      style={{ alignSelf: "center" }}
                    ></Icon>
                  </View>
                </View>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    marginTop: 16,
                    fontSize: 24,
                    fontWeight: "700",
                    ...FONTS.fontPopinBold,
                    lineHeight: 36,
                    letterSpacing: 0.5,
                  }}
                >
                  Product Not Found
                </Text>
                <Text
                  style={{
                    color: COLORS.grey,
                    marginTop: 8,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 21,
                    letterSpacing: 0.5,
                    opacity: 0.5,
                  }}
                >
                  thank you for shopping using lafyuu
                </Text>
                <View style={{ marginLeft: 16, marginTop: 16 }}>
                  <TextButton
                    label="Back To Home"
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
                    onPress={() => navigation.navigate("Home")}
                  />
                </View>
              </View>
            )
          ) : null}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SearchProduct;

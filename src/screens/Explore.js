import { View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/Ionicons";
import CategoryCard from "../components/CategoryComponents/CategoryCard";
import { manexplore, womanexplore } from "../models/Explore";
import ExploreCard from "../components/ExploreCard";

const Explore = () => {
  // console.log("fulldata " , fulldata(manexplore))
  // add null
  // const a={
  //   id: "",
  //   title: "",
  //   image: null,
  // }
  // const fulldata=(data)=>{
  //   if(data.length %4 !=0){
  // data.push({a})
  // fulldata(data)
  //   }else{
  //     return data
  //   }
  // }
  // console.log("fulldata " , fulldata(manexplore))

  // const modifyData = (data) => {
  //   const numColumns = 4;
  //   var tmp = {};
  //   console.log("data.length ", data.length);
  //   for (let i = data.length; ; i++) {
  //     if (i % numColumns != 0) {
  //       data.push(tmp);
  //     }
  //     return data;
  //   }
  // };
  // console.log("fulldata ", modifyData(womanexplore));

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
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 } }>
        {/* 1ND */}
        <View style={{ flex: 1, height: 265, margin: 16 }}>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 18,
              letterSpacing: 0.5,
            }}
          >
            Man Fashion
          </Text>
          {/* <Text>{manexplore}</Text> */}

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: "100%" } }>
            <FlatList
              style={{ width: WIDTH }}
              numColumns={4}
              data={womanexplore}
              // columnWrapperStyle={{width:"100%",margin:16}}
              renderItem={({ item }) => (
                <View style={{ marginRight: 16, marginTop: 8 }}>
                  <ExploreCard
                    image={item.image}
                    title={item.title}
                    onPress={() => console.log(item.title)}
                  ></ExploreCard>
                </View>
              )}
            />
            </ScrollView>
    
        </View>
        {/* 2ND */}
        <View style={{ flex: 1, height: 265, paddingHorizontal: 16 }}>
          <Text
            style={{
              color: COLORS.neutralDark,
              fontSize: 14,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 18,
              letterSpacing: 0.5,
            }}
          >
            Woman Fashion
          </Text>
          {/* <Text>{manexplore}</Text> */}

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ width: "100%" }}>
            <FlatList
              style={{ width: WIDTH }}
              numColumns={4}
              data={womanexplore}
              // columnWrapperStyle={{width:"100%",margin:16}}
              renderItem={({ item }) => (
                <View style={{ marginRight: 16, marginTop: 8 }}>
                  <ExploreCard
                    image={item.image}
                    title={item.title}
                    onPress={() => console.log(item.title)}
                  ></ExploreCard>
                </View>
              )}
            />
          </ScrollView>
        </View>
      </ScrollView>

      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default Explore;

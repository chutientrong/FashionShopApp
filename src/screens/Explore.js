import {
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import Header from "../components/Header";
import SearchInput from "../components/SearchInput";
import Icon from "react-native-vector-icons/Ionicons";
import { manexplore, womanexplore } from "../models/Explore";
import ExploreCard from "../components/ExploreCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Explore = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
              <TouchableOpacity
                onPress={() => navigation.navigate("StackSearch")}
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
                  editable={false}
                ></SearchInput>
              </TouchableOpacity>
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
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
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

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: WIDTH }}
            >
              <FlatList
                style={{ width: WIDTH }}
                numColumns={4}
                data={manexplore}
                // columnWrapperStyle={{width:"100%",margin:16}}
                renderItem={({ item }) => (
                  <View style={{ marginRight: 16, marginTop: 8 }}>
                    <ExploreCard
                      image={item.image}
                      title={item.title}
                    ></ExploreCard>
                  </View>
                )}
              />
            </ScrollView>
          </View>
          {/* 2ND */}
          <View style={{ flex: 1, height: 265, marginHorizontal: 16 }}>
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

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{ width: WIDTH }}
            >
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

        {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default Explore;

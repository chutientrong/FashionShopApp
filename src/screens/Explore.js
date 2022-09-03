import { View, Text } from 'react-native'
import React from 'react'
import { COLORS, FONTS } from '../constants'
import Header from '../components/Header'
import SearchInput from '../components/SearchInput'
import Icon from "react-native-vector-icons/Ionicons";

const Explore = () => {
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
<View>
  <View>
    <Text style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                  }}> </Text>
  </View>
</View>
      
    </View>
  )
}

export default Explore
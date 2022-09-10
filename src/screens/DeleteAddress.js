import { View, Text, Image } from "react-native";
import React from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextButton from "../components/TextButton";
import Icon from "react-native-vector-icons/MaterialIcons";
import { SafeAreaView } from "react-native-safe-area-context";

const DeleteAddress = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={
              {
                // width: 100,
                // height: 100,
                // backgroundColor: COLORS.primaryBlue,
                // borderRadius: 50,
                // justifyContent: "center",
              }
            }
          >
            <Icon
              name="error"
              size={110}
              color={COLORS.primaryRed}
              style={{ alignSelf: "center" }}
            ></Icon>
          </View>

          {/* <Image
            source={icons.success}
            style={{ width: 150, height: 150, resizeMode: 'stretch',}}
          ></Image> */}
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
          Confirmation
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
          Are you sure wanna delete address
        </Text>
        <View style={{ marginLeft: 16, marginTop: 16 }}>
          <TextButton
            label="Delete"
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
            onPress={() => navigation.navigate("Address")}
          />
        </View>
        <View style={{ marginLeft: 16, marginTop: 16 }}>
          <TextButton
            label="Cancel"
            // disabled={isEnableSignIn() ? false : true}
            buttonContainerStyle={{
              borderRadius: 5,
              height: 57,
              width: WIDTH - 32,
              padding: 16,
              backgroundColor: COLORS.neutralLight,
            }}
            labelStyle={{
              color: COLORS.grey,
              ...FONTS.btnFont,
            }}
            onPress={() => navigation.navigate("Address")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeleteAddress;

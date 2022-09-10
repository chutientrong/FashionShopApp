import { View, Text } from "react-native";
import React, { useState } from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS } from "../constants";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dropdown from "react-native-dropdown-picker";
import { gender } from "../models/Gender";
import TextButton from "../components/TextButton";
import { SafeAreaView } from "react-native-safe-area-context";
const ChangeGender = ({ navigation }) => {
  const gen = "Male";
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(gen);
  const [items, setItems] = useState(gender);
  const [isCheck, setIsCheck] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Gender"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View style={{ margin: 16 }}>
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
              Choose Gender
            </Text>

            <Dropdown
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder={gen}
              placeholderStyle={{
                color: "grey",
                fontWeight: "bold",
              }}
              style={{
                borderColor: isCheck ? COLORS.primaryBlue : COLORS.neutralLight,
              }}
              dropDownContainerStyle={{
                borderColor: COLORS.neutralLight,
                borderTopLeftRadius: 20,
                marginTop: 8,
              }}
              showTickIcon={false}
              onSelectItem={(item) => {
                setIsCheck(true);
              }}
              textStyle={{
                color: COLORS.grey,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
              selectedItemLabelStyle={{
                color: COLORS.primaryBlue,
                fontSize: 14,
                fontWeight: "700",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
              customItemContainerStyle={{
                backgroundColor: COLORS.primaryBlue,
              }}
              arrowIconStyle={{
                width: 24,
                height: 24,
              }}
              listItemLabelStyle={{
                color: COLORS.grey,
                fontSize: 14,
                fontWeight: "400",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
              onPress={() => setIsCheck(true)}
            />
          </View>
          <View style={{ marginHorizontal: 16 }}>
            <TextButton
              label="Save"
              // disabled={isEnableSignIn() ? false : true}
              buttonContainerStyle={{
                borderRadius: 5,
                height: 57,

                padding: 16,
                backgroundColor: COLORS.primaryBlue,
              }}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.btnFont,
              }}
              onPress={() => navigation.navigate("Profile")}
            />
          </View>
        </View>
        {/* <View style={{ marginBottom: 60 }}></View> */}
      </View>
    </SafeAreaView>
  );
};

export default ChangeGender;

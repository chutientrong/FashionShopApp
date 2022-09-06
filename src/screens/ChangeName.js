import { View, Text, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import { useState } from "react";
import utils from "../utils/utils";
import TextButton from "../components/TextButton";
import CouponForm from "../components/CouponForm";
import ProfileForm from "../components/ProfileForm";

const ChangeName = ({ navigation }) => {
  const [fname, setFName] = useState("Maximus");
  const [fnameError, setFNameError] = useState("");
  const [lname, setLName] = useState("Gold");
  const [lnameError, setLNameError] = useState("");
  console.log("fname ", fname);
  console.log("lname ", lname);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Change Name"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <View>
          <View
            style={{
              //   flex: 1,
              // marginTop: SIZES.sm,
              margin: 16,
            }}
          >
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
              First Name
            </Text>

            <ProfileForm
              value={fname}
              onChange={(value) => {
                utils.validateUsername(value, setFNameError);
                setFName(value);
              }}
              //   active={couponError ? false : true}
              error={fnameError ? true : false}
              errorMsg={fnameError}
            ></ProfileForm>
          </View>
          <View
            style={{
              //   flex: 1,
              // marginTop: SIZES.sm,
              marginTop: 8,
              marginHorizontal: 16,
            }}
          >
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
              Last Name
            </Text>

            <ProfileForm
              value={lname}
              onChange={(value) => {
                utils.validateUsername(value, setLNameError);
                setLName(value);
              }}
              //   active={couponError ? false : true}
              error={lnameError ? true : false}
              errorMsg={lnameError}
            ></ProfileForm>
          </View>
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
      <View style={{ marginBottom: 60 }}></View>
    </View>
  );
};

export default ChangeName;

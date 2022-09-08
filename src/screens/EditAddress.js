import { View, Text, ScrollView } from "react-native";
import React from "react";
import { COLORS, FONTS } from "../constants";
import TextHeader from "../components/TextHeader";
import Dropdown from "react-native-dropdown-picker";
import TextButton from "../components/TextButton";
import { useState } from "react";
import { countrylist } from "../models/Address";
import ProfileForm from "../components/ProfileForm";
import utils from "../utils/utils";

const EditAddress = ({navigation}) => {
    const country = "United States";
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(country);
    const [items, setItems] = useState(countrylist);
    const [isCheck, setIsCheck] = useState(false);
  
    const [fname, setFName] = useState("Chu");
    const [fnameError, setFNameError] = useState("");
    const [lname, setLName] = useState("Trong");
    const [lnameError, setLNameError] = useState("");
    const [street, setStreet] = useState("3/36 49 Street");
    const [streetError, setStreetError] = useState("");
    const [street2, setStreet2] = useState("49 Street, Hiep Binh CHanh");
    const [street2Error, setStreet2Error] = useState("");
    const [city, setCity] = useState("Thu Duc");
    const [cityError, setCityError] = useState("");
    const [state, setState] = useState("Ho Chi Minh City");
    const [stateError, setStateError] = useState("");
    const [zipcode, setZipCode] = useState("123456");
    const [zipcodeError, setZipCodeError] = useState("");
    const [phone, setPhone] = useState("+8496969669");
    const [phoneError, setPhoneError] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Edit Address"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        <ScrollView style={{ width: "100%" }} nestedScrollEnabled={true}>
          {/* <ScrollView horizontal style={{ width:"100%",borderWidth:1 }}> */}
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
              Country or region
            </Text>

            <View style={{ flex: 1 }}>
              <Dropdown
                listMode="SCROLLVIEW"
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder={country}
                placeholderStyle={{
                  color: "grey",
                  fontWeight: "bold",
                }}
                style={{
                  borderColor: isCheck
                    ? COLORS.primaryBlue
                    : COLORS.neutralLight,
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
            <View
              style={{
                marginTop: 16,
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
                marginTop: 8,
                //   marginHorizontal: 16,
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

            <View
              style={{
                marginTop: 8,
                //   marginHorizontal: 16,
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
                Street Address
              </Text>

              <ProfileForm
                value={street}
                onChange={(value) => {
                  utils.validateInput(value, setStreetError);
                  setStreet(value);
                }}
                //   active={couponError ? false : true}
                error={streetError ? true : false}
                errorMsg={streetError}
              ></ProfileForm>
            </View>

            <View
              style={{
                marginTop: 8,
                //   marginHorizontal: 16,
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
                Street Address 2 (Optional)
              </Text>

              <ProfileForm
                value={street2}
                onChange={(value) => {
                  utils.validateInput(value, setStreet2Error);
                  setStreet2(value);
                }}
                //   active={couponError ? false : true}
                error={street2Error ? true : false}
                errorMsg={street2Error}
              ></ProfileForm>
            </View>

            <View
              style={{
                marginTop: 8,
                //   marginHorizontal: 16,
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
                City
              </Text>

              <ProfileForm
                value={city}
                onChange={(value) => {
                  utils.validateInput(value, setCityError);
                  setCity(value);
                }}
                //   active={couponError ? false : true}
                error={cityError ? true : false}
                errorMsg={cityError}
              ></ProfileForm>
            </View>

            <View
              style={{
                marginTop: 8,
                //   marginHorizontal: 16,
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
                State/Province/Region
              </Text>

              <ProfileForm
                value={state}
                onChange={(value) => {
                  utils.validateInput(value, setStateError);
                  setState(value);
                }}
                //   active={couponError ? false : true}
                error={stateError ? true : false}
                errorMsg={stateError}
              ></ProfileForm>
            </View>
            <View
              style={{
                marginTop: 8,
                //   marginHorizontal: 16,
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
                Zip Code
              </Text>

              <ProfileForm
                value={zipcode}
                onChange={(value) => {
                  utils.validateInput(value, setZipCodeError);
                  setZipCode(value);
                }}
                //   active={couponError ? false : true}
                error={zipcodeError ? true : false}
                errorMsg={zipcodeError}
              ></ProfileForm>
            </View>

            <View
              style={{
                //   flex: 1,
                // marginTop: SIZES.sm,
                marginTop: 8,
                //   marginHorizontal: 16,
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
                Phone Number
              </Text>

              <ProfileForm
                value={phone}
                onChange={(value) => {
                  utils.validateInput(value, setPhoneError);
                  setPhone(value);
                }}
                //   active={couponError ? false : true}
                error={phoneError ? true : false}
                errorMsg={phoneError}
              ></ProfileForm>
            </View>
          </View>

          {/* </ScrollView> */}
        </ScrollView>
        <View style={{ marginHorizontal: 16 }}>
          <TextButton
            label="Save Address"
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
            onPress={() => navigation.navigate("Address")}
          />
        </View>
      </View>
      <View style={{ marginBottom: 60 }}></View>
    </View>
  )
}

export default EditAddress
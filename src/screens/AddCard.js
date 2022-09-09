import { View, Text } from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, WIDTH } from "../constants";
import TextHeader from "../components/TextHeader";
import { ScrollView } from "react-native-gesture-handler";
import ProfileForm from "../components/ProfileForm";
import utils from "../utils/utils";
import Icon from "react-native-vector-icons/MaterialIcons";
import TextButton from "../components/TextButton";

const AddCard = ({ navigation }) => {
  const validcode = "1234";
  const [cardNum, setCardNum] = useState("1231 - 2312 - 3123 - 1231");
  const [cardNumError, setCardNumError] = useState("");
  const [expire, setExpire] = useState("12/12");
  const [expireError, setExpireError] = useState("");
  const [security, setSecurity] = useState("1234");
  const [securityError, setSecurityError] = useState("");
  const [holder, setHolder] = useState("Lailyfa Febrina");
  const [holderError, setHolderError] = useState("");

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader title={"Add Card"} navigation={navigation}></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
      <View style={{flex:1,
          justifyContent: "space-between",
        }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ margin: 16 }}>
          {securityError ? (
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="error-outline"
                size={24}
                color={COLORS.primaryRed}
              ></Icon>
              <Text
                style={{
                  color: COLORS.primaryRed,
                  fontSize: 12,
                  fontWeight: "700",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 21,
                  letterSpacing: 0.5,
                  marginBottom: 12,
                }}
              >
                {securityError}
              </Text>
            </View>
          ) : null}

          <View
            style={
              {
                // marginTop: 16,
              }
            }
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
              Card Number
            </Text>

            <ProfileForm
              value={cardNum}
              onChange={(value) => {
                utils.validateInput(value, setCardNumError);
                setCardNum(value);
              }}
              //   active={couponError ? false : true}
              error={cardNumError ? true : false}
              errorMsg={cardNumError}
            ></ProfileForm>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{
                marginTop: 16,
                //   borderWidth: 1,
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
                Expiration Date
              </Text>

              <ProfileForm
                value={expire}
                containerStyle={{ width: WIDTH / 2 - 24 }}
                onChange={(value) => {
                  utils.validateInput(value, setExpireError);
                  setExpire(value);
                }}
                //   active={couponError ? false : true}
                error={expireError ? true : false}
                errorMsg={expireError}
              ></ProfileForm>
            </View>

            <View
              style={{
                marginTop: 16,
                //   borderWidth: 1,
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
                Security Code
              </Text>
              <ProfileForm
                value={security}
                containerStyle={{ width: WIDTH / 2 - 24 }}
                onChange={(value) => {
                  utils.validateSecurityCode(
                    value,
                    validcode,
                    setSecurityError
                  );
                  setSecurity(value);
                }}
                //   active={couponError ? false : true}
                error={securityError ? true : false}
                //   errorMsg={securityError}
              ></ProfileForm>
            </View>
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
              Card Holder
            </Text>

            <ProfileForm
              value={holder}
              onChange={(value) => {
                utils.validateInput(value, setHolderError);
                setHolder(value);
              }}
              //   active={couponError ? false : true}
              error={holderError ? true : false}
              errorMsg={holderError}
            ></ProfileForm>
          </View>
        </ScrollView>
        <View style={{ marginLeft: 16 }}>
          <TextButton
            label="Add Card"
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
            onPress={() => navigation.navigate("CardInfo")}
          />
          <View style={{ marginBottom: 60 }}></View>
        </View>
      </View>
    </View>
  );
};

export default AddCard;

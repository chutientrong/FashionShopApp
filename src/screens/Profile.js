import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, FONTS, images } from "../constants";
import TextHeader from "../components/TextHeader";
import Icon from "react-native-vector-icons/Ionicons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
const Profile = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Profile"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />
        <View style={{ margin: 16, flexDirection: "row" }}>
          <Image
            style={{ width: 48, height: 48, resizeMode: "stretch" }}
            source={images.userdefaul}
          ></Image>

          <View style={{ marginLeft: 16, justifyContent: "center" }}>
            <TouchableOpacity onPress={() => navigation.navigate("ChangeName")}>
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
                Maximus Gold
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                color: COLORS.grey,
                fontSize: 12,
                fontWeight: "400",
                ...FONTS.fontPopinRegular,
                lineHeight: 21,
                letterSpacing: 0.5,
              }}
            >
              @derlaxy
            </Text>
          </View>
        </View>
        <View style={{ height: 56, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // alignSelf: "center",
                }}
              >
                <Icon
                  name="female-sharp"
                  size={24}
                  color={COLORS.primaryBlue}
                ></Icon>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginLeft: 16,
                    textAlignVertical: "center",
                  }}
                >
                  Gender
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                  marginRight: 16,
                  textAlignVertical: "center",
                }}
              >
                Male
              </Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey}
              style={{ bottom: 2 }}
              onPress={() => navigation.navigate("ChangeGender")}
            ></Icon>
          </View>
        </View>
        <View style={{ height: 56, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // alignSelf: "center",
                }}
              >
                <Icon3
                  name="calendar"
                  size={24}
                  color={COLORS.primaryBlue}
                ></Icon3>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginLeft: 16,
                    textAlignVertical: "center",
                  }}
                >
                  Birthday
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                  marginRight: 16,
                  textAlignVertical: "center",
                }}
              >
                12/12/2022
              </Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey}
              style={{ bottom: 2 }}
              onPress={() => navigation.navigate("ChangeBirthday")}
            ></Icon>
          </View>
        </View>
        <View style={{ height: 56, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // alignSelf: "center",
                }}
              >
                <Icon2
                  name="mail-outline"
                  size={24}
                  color={COLORS.primaryBlue}
                ></Icon2>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginLeft: 16,
                    textAlignVertical: "center",
                  }}
                >
                  Email
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                  marginRight: 16,
                  textAlignVertical: "center",
                }}
              >
                Derlaxy@gmail.com
              </Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey}
              style={{ bottom: 2 }}
              onPress={() => navigation.navigate("ChangeEmail")}
            ></Icon>
          </View>
        </View>
        <View style={{ height: 56, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // alignSelf: "center",
                }}
              >
                <Icon3
                  name="smartphone"
                  size={24}
                  color={COLORS.primaryBlue}
                ></Icon3>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginLeft: 16,
                    textAlignVertical: "center",
                  }}
                >
                  Phone Number
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                  marginRight: 16,
                  textAlignVertical: "center",
                }}
              >
                (+84)987654321
              </Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey}
              style={{ bottom: 2 }}
              onPress={() => navigation.navigate("ChangePhoneNumber")}
            ></Icon>
          </View>
        </View>
        <View style={{ height: 56, padding: 16 }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  // alignSelf: "center",
                }}
              >
                <Icon2
                  name="lock-outline"
                  size={24}
                  color={COLORS.primaryBlue}
                ></Icon2>
                <Text
                  style={{
                    color: COLORS.neutralDark,
                    fontSize: 14,
                    fontWeight: "700",
                    ...FONTS.fontPopinRegular,
                    lineHeight: 18,
                    letterSpacing: 0.5,
                    marginLeft: 16,
                    textAlignVertical: "center",
                  }}
                >
                  Change Password
                </Text>
              </View>
              <Text
                style={{
                  color: COLORS.grey,
                  fontSize: 14,
                  fontWeight: "400",
                  ...FONTS.fontPopinRegular,
                  lineHeight: 18,
                  letterSpacing: 0.5,
                  marginRight: 16,
                  textAlignVertical: "center",
                }}
              >
                **********
              </Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              size={24}
              color={COLORS.grey}
              style={{ bottom: 2 }}
              onPress={() => navigation.navigate("ChangePassword")}
            ></Icon>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({});

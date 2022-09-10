import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import TextHeader from "../components/TextHeader";
import { COLORS, FONTS } from "../constants";
import TextButton from "../components/TextButton";
import { useState } from "react";
import moment from "moment";
import Calendar from "../components/Calendar";
import { SafeAreaView } from "react-native-safe-area-context";

const ChangeBirthday = ({ navigation }) => {
  const [date, setDate] = useState(moment());

  const INITIAL_DATE = "06/07/2022";

  const [selected, setSelected] = useState(INITIAL_DATE);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: COLORS.white }}>
        <TextHeader title={"Birthday"} navigation={navigation}></TextHeader>
        {/* ADD LINE */}
        <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
                Your Birthday
              </Text>
              {/* Calendar */}

              <Calendar
                date={date}
                onChange={(selectedDate) => setDate(selectedDate)}
                placeholder={selected}
                datesColor={COLORS.grey}
                selectedDateHighlightRadius={5}
                // headerStyles={{margin:8}}
              />
            </View>
          </ScrollView>
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

export default ChangeBirthday;

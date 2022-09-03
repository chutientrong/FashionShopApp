import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTS } from '../constants';
import Ionicons from "react-native-vector-icons/Ionicons";

const ReviewSortButton = (props) => {
    const [sel, setSel] = useState(false);
  return (
    <View>
      <TouchableOpacity
                  style={{
                    justifyContent: "center",
                    borderColor: COLORS.neutralLight,
                    borderWidth: 1,
                    borderRadius: 5,
                    backgroundColor: sel? "#40BFFF1A":COLORS.white,
                    //   marginRight: SIZES.padding2,
                    width: 60,
                    height: 45,
                  }}
                  onPress={() => setSel(!sel)}
                >
                  <View
                    style={{
                      // alignItems: "center",
                      flexDirection: "row",
                      alignSelf: "center",
                    }}
                  >
                    <Ionicons
                      name={"ios-star"}
                      size={16}
                      style={{
                        color: COLORS.yellow,
                      }}
                    />
                    <Text
                      style={{
                        color: COLORS.grey,
                        fontSize: 14,
                        fontWeight: "400",
                        ...FONTS.fontPopinRegular,
                        lineHeight: 21,
                        letterSpacing: 0.5,
                      }}
                    >
                      {" "}
                      {props.item}
                    </Text>
                  </View>
                </TouchableOpacity>
    </View>
  )
}

export default ReviewSortButton
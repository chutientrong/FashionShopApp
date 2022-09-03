import { View, TextInput } from "react-native";
import React from "react";
import { COLORS, WIDTH } from "../constants";
import Icon from "react-native-vector-icons/MaterialIcons";

const SearchInput = ({
    icon,
  containerStyle,
  onChange,
  appendComponent,
  ...otherProps
}) => {
  return (
    <View style={{ ...containerStyle }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          //   width: 343,
        //   marginLeft: 16,
          width: WIDTH *0.70,
          height: 46,
          borderRadius: 5,
          borderColor: COLORS.neutralLight,
          borderWidth: 1,
          padding: 4,
          //   left: 16,
        }}
      >
        <View style={{ padding: 8 }}>
          <Icon name={icon} color={COLORS.primaryBlue} size={24} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            underlineColorAndroid="transparent"
            placeholderTextColor={COLORS.grey}
            showSoftInputOnFocus={true}
            // autoFocus={true}
            style={{
              color: COLORS.grey,
              fontSize: 12,
              lineHeight: 21.6,
              fontWeight: "700",
            }}
            onChangeText={(text) => onChange(text)}
            {...otherProps}
          />
          {appendComponent}
        </View>
      </View>
    </View>
  );
};

export default SearchInput;

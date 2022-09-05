import React, { Component } from "react";
import PropTypes from "prop-types";
// import defaultIcons from "./Icons";
// import iconsColored from "./IconsColored";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
//   ViewPropTypes,
  Image,
} from "react-native";

// import {ViewPropTypes} from 'de'
const s = StyleSheet.create({
  baseInputStyle: {
    color: "black",
  },
  icon: {
    height: 24,
    width: 24,
  },
  brand: {
    width: 36,
    height: 24,
  },
});

export default class CCInput extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,

    status: PropTypes.oneOf(["valid", "invalid", "incomplete"]),

    // containerStyle: ViewPropTypes.style,
    inputStyle: Text.propTypes.style,
    labelStyle: Text.propTypes.style,
    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    placeholderColor: PropTypes.string,

    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBecomeEmpty: PropTypes.func,
    onBecomeValid: PropTypes.func,
    additionalInputProps: PropTypes.shape(TextInput.propTypes),
  };

  static defaultProps = {
    label: "",
    value: "",
    status: "incomplete",
    containerStyle: {},
    inputStyle: {},
    labelStyle: {},
    onFocus: () => {},
    onChange: () => {},
    onBecomeEmpty: () => {},
    onBecomeValid: () => {},
    additionalInputProps: {},
  };

  componentWillReceiveProps = (newProps) => {
    const { status, value, onBecomeEmpty, onBecomeValid, field } = this.props;
    const { status: newStatus, value: newValue } = newProps;

    if (value !== "" && newValue === "") onBecomeEmpty(field);
    if (status !== "valid" && newStatus === "valid") onBecomeValid(field);
  };

  focus = () => this.refs.input.focus();

  _onFocus = () => this.props.onFocus(this.props.field);
  _onChange = (value) => this.props.onChange(this.props.field, value);

  render() {
    const {
      label,
      value,
      placeholder,
      status,
      keyboardType,
      containerStyle,
      inputStyle,
      labelStyle,
      validColor,
      invalidColor,
      placeholderColor,
      customIcons,
      brand,
      field,
      additionalInputProps,
    } = this.props;

    // const Icons = { ...defaultIcons, ...customIcons };
    // const IconsColored = { ...defaultIcons, ...customIcons, ...iconsColored };

    return (
      <TouchableOpacity onPress={this.focus} activeOpacity={0.99}>
        {!!label && (
          <Text
            style={[
              labelStyle,
              invalidColor && status === "invalid"
                ? { color: invalidColor }
                : {},
            ]}
          >
            {label}
          </Text>
        )}
        <View
          style={[
            containerStyle,
            invalidColor && status === "invalid"
              ? { borderColor: invalidColor }
              : {},
          ]}
        >
          <TextInput
            ref="input"
            {...additionalInputProps}
            keyboardType={keyboardType}
            autoCapitalise="words"
            autoCorrect={false}
            style={[
              s.baseInputStyle,
              inputStyle,
              validColor && status === "valid"
                ? { color: validColor }
                : invalidColor && status === "invalid"
                ? { color: invalidColor }
                : {},
            ]}
            underlineColorAndroid={"transparent"}
            placeholderTextColor={placeholderColor}
            placeholder={placeholder}
            value={value}
            onFocus={this._onFocus}
            onChangeText={this._onChange}
          />
          {/* {
            status === "invalid" ? <Image style={[s.icon, { tintColor: invalidColor }]}
              source={Icons["warning"]} /> :
              brand && field === "number" && status !== "invalid" && <Image style={[s.brand]}
                source={IconsColored[brand || ""]} />
          } */}
        </View>
      </TouchableOpacity>
    );
  }
}

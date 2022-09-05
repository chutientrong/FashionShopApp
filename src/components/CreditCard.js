import { View, Text } from "react-native";
import React, { Component } from "react";
import CCInput from "./CreditCard/CCInput";
import PropTypes from "prop-types";

export class CreditCard extends Component {
  static propTypes = {
    // ...InjectedProps,

    placeholders: PropTypes.object,

    inputStyle: Text.propTypes.style,

    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    placeholderColor: PropTypes.string,

    additionalInputsProps: PropTypes.objectOf(
      PropTypes.shape(TextInput.propTypes)
    ),
  };

  static defaultProps = {
    placeholders: {
      number: "1234 5678 1234 5678",
      expiry: "MM/YY",
      cvc: "CVC",
    },
    validColor: "",
    invalidColor: "red",
    placeholderColor: "gray",
    additionalInputsProps: {},
  };

  componentDidMount = () => this._focus(this.props.focused);

  componentWillReceiveProps = (newProps) => {
    if (this.props.focused !== newProps.focused) this._focus(newProps.focused);
  };

  _focusNumber = () => this._focus("number");
  _focusExpiry = () => this._focus("expiry");

  _focus = (field) => {
    if (!field) return;
    this.refs[field].focus();
    LayoutAnimation.easeInEaseOut();
  };

  _inputProps = (field) => {
    const {
      inputStyle,
      validColor,
      invalidColor,
      placeholderColor,
      placeholders,
      values,
      status,
      onFocus,
      onChange,
      onBecomeEmpty,
      onBecomeValid,
      additionalInputsProps,
    } = this.props;
  };
  render() {
    const {
      focused,
      values: { number },
      inputStyle,
      status: { number: numberStatus },
    } = this.props;
    const showRightPart = focused && focused !== "number";

    return (
      <View>
        <Text>CreditCard</Text>
        <CCInput></CCInput>
        <CCInput
          {...this._inputProps("number")}
          keyboardType="numeric"
          containerStyle={s.numberInput}
        />
      </View>
    );
  }
}

export default CreditCard;

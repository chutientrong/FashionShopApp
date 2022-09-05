import { View, Text } from 'react-native'
import React from 'react'
import TextHeader from '../components/TextHeader'
import Icon from "react-native-vector-icons/MaterialIcons";
import { COLORS, FONTS } from '../constants';
// import CreditCard from '../components/CreditCard';

const ChooseCard = ({navigation}) => {
    _onChange = (formData) => console.log(JSON.stringify(formData, null, " "));
    _onFocus = (field) => console.log("focusing", field);
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <TextHeader
        title={"Choose Card"}
        navigation={navigation}
        children={
          <Icon
            name="add"
            size={24}
            color={COLORS.primaryBlue}
            style={{
              fontWeight: "700",
              ...FONTS.fontPopinBold,
              //   fontSize: 18,
            }}
          ></Icon>
        }
      ></TextHeader>
      {/* ADD LINE */}
      <View style={{ height: 1, backgroundColor: COLORS.neutralLight }} />

{/* <CreditCard autoFocus
              inputStyle={s.input}

              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

              onFocus={this._onFocus}
              onChange={this._onChange}>

</CreditCard> */}
    </View>
  )
}

export default ChooseCard

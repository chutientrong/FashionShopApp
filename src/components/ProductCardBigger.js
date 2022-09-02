import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, WIDTH } from "../constants";
import StarRating from "./StarRating";

const ProductCardBigger = ({ image, name, cost, preCost, discount,rating, onPress }) => {
    return (
        <TouchableOpacity
        style={{
          width: (WIDTH-32)/2-8,
          height: 282,
          justifyContent: "space-between",
          flexDirection: "column",
          alignItems: "center",
          marginLeft: 16,
          marginTop: 16,
          borderWidth: 1,
          borderRadius: 5,
          borderColor: COLORS.neutralLight,
          padding:16
        }}
        onpress={onPress}
      >
        <Image source={image} style={{ height: 120, width: 120,borderRadius:5 }}></Image>
        <View style={{}}>
          <Text
          numberOfLines={2}
            style={{
              color: COLORS.neutralDark,
              marginTop: 8,
              fontSize: 12,
              height: 36,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              lineHeight: 18,
              textAlignVertical: "top",
              textAlign: "left",
              
            }}
          >
            {name}
          </Text>
          <StarRating rating={rating}></StarRating>
          <Text
            style={{
              color: COLORS.primaryBlue,
              marginTop: 16,
              fontSize: 12,
              height: 22,
              fontWeight: "700",
              ...FONTS.fontPopinRegular,
              textAlignVertical: "top",
              textAlign: "left",
            }}
          >
            ${cost}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: COLORS.grey,
                marginTop: 8,
                fontSize: 10,
                height: 15,
                fontWeight: "400",
                ...FONTS.fontPopinRegular,
                textAlignVertical: "top",
                textDecorationLine: "line-through",
                textAlign: "left",
              }}
            >
              ${preCost}
            </Text>
  
            <Text
              style={{
                color: COLORS.primaryRed,
                marginTop: 8,
                marginLeft: 8,
                fontSize: 10,
                height: 15,
                fontWeight: "700",
                ...FONTS.fontPopinBold,
                textAlignVertical: "top",
              }}
            >
              {discount}% Off
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  export default ProductCardBigger;
  
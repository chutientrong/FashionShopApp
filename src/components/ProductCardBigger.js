import { Image, Text, TouchableOpacity, View } from "react-native";
import { COLORS, FONTS, WIDTH } from "../constants";
import StarRating from "./StarRating";
import Icon from "react-native-vector-icons/MaterialIcons";

const ProductCardBigger = ({
  image,
  name,
  cost,
  preCost,
  discount,
  rating,
  onPressed,
  showIconRemove,
  onRemove,
}) => {
  return (
    <TouchableOpacity
      style={{
        width: (WIDTH - 32) / 2 - 8,
        height: 282,
        justifyContent: "space-between",
        flexDirection: "column",
        alignItems: "center",
        marginLeft: 16,
        marginTop: 16,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: COLORS.neutralLight,
        padding: 16,
      }}
      onPress={onPressed}
    >
      <Image
        source={image}
        style={{ height: 120, width: 120, borderRadius: 5 ,}}
      ></Image>
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
            textAlign: "left",letterSpacing:0.5
          }}
        >
          {name}
        </Text>
        <StarRating rating={rating} size={10}></StarRating>
        <Text
          style={{
            color: COLORS.primaryBlue,
            marginTop: 16,
            fontSize: 12,
            height: 22,
            fontWeight: "700",
            ...FONTS.fontPopinRegular,
            textAlignVertical: "top",
            textAlign: "left",letterSpacing:0.5
          }}
        >
          ${cost}
        </Text>
        <View style={{ flexDirection: "row",justifyContent:'space-between', marginTop:8, }}>
          <Text
            style={{
              color: COLORS.grey,

              fontSize: 10,

              fontWeight: "400",
              ...FONTS.fontPopinRegular,
              // textAlignVertical: "top",
              textDecorationLine: "line-through",
              // textAlign: "left",
              textDecorationStyle:"dashed"
              ,letterSpacing:0.5
            }}
          >
            ${preCost}
          </Text>

          <Text
            style={{
              color: COLORS.primaryRed,
  
              // marginLeft: 8,
              fontSize: 10,

              fontWeight: "700",
              ...FONTS.fontPopinBold,letterSpacing:0.5
              // textAlignVertical: "top",
            }}
          >
            {discount}% Off
          </Text>
          <View>
          {showIconRemove ? (
            <Icon
              name="delete-outline"
              size={24}
              onPress={onRemove}
              style={{ color: COLORS.grey, bottom:10}}
            ></Icon>
          ) : null}</View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardBigger;

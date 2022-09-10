import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { COLORS } from "../constants";

const SearchSlider = () => {
  const { min, max } = { min: 0, max: 1000 };
  const [width, setWidth] = useState(280);
  const [selected, setSelected] = useState(null);

  if (!selected) {
    setSelected([min, max]);
  }

  // Callbacks
  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width - 2 * 2);
  };
  const onValuesChangeFinish = (values) => {
    setSelected(values);
    console.log(selected[0]);
  };
  const onValuesChange = (values) => {
    setSelected(values);
    console.log(selected[0]);
    console.log(selected[1]);
  };
  return (
    <View
      onLayout={onLayout}
      style={{
        flex: 1,
        margin: 2 * 2,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MultiSlider
        min={min}
        max={max}
        allowOverlap
        values={selected}
        sliderLength={width}
        // onValuesChangeFinish={onValuesChangeFinish}
        onValuesChange={onValuesChange}
        // enableLabel={true}
        // customLabel={SliderCustomLabel(textTransformerTimes)}
        trackStyle={{
          height: 4,
          borderRadius: 8,
        }}
        touchDimensions={{
          height: 50,
          width: 50,
          borderRadius: 15,
          slipDisplacement: 200,
        }}
        markerOffsetY={2}
        selectedStyle={{
          backgroundColor: COLORS.primaryBlue,
        }}
        unselectedStyle={{
          backgroundColor: COLORS.neutralLight,
        }}
      />
      <Text>{selected}</Text>
    </View>
  );
};

export default SearchSlider;

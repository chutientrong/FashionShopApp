import React from 'react';
import {View, StyleSheet} from 'react-native';

export default (Indicator = ({
  itemCount,
  currentIndex,
  indicatorStyle,
  indicatorContainerStyle,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth = 8,
}) => {
  return (
    <View style={[styles.container, indicatorContainerStyle]}>
      {renderIndicator(
        itemCount,
        currentIndex,
        indicatorStyle,
        indicatorActiveColor,
        indicatorInActiveColor,
        indicatorActiveWidth,
      )}
    </View>
  );
});

export const renderIndicator = (
  count,
  currentIndex,
  indicatorStyle,
  indicatorActiveColor,
  indicatorInActiveColor,
  indicatorActiveWidth,
) => {
  let indicators = [];
  for (let i = 0; i < count; i++) {
    indicators.push(
      <View
        style={[
          styles.indicator,
          indicatorStyle,
          i === currentIndex
            ? indicatorActiveColor
              ? {
                  ...styles.active,
                  ...{
                    backgroundColor: indicatorActiveColor,
                    width: indicatorActiveWidth,
                  },
                }
              : styles.active
            : {
                ...styles.inactive,
                ...{backgroundColor: indicatorInActiveColor},
              },
        ]}
      key = {i.toString()}
      />,
    );
  }
  return indicators;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  active: {},
  inactive: {},
});
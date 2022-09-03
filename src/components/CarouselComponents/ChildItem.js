import React from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import { COLORS } from '../../constants';

export default (ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(index)}>
      <Image
        style={[styles.image, style, {height: height}]}
        source={local ? item[imageKey] : {uri: item[imageKey]}}
      />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    // margin:16
  },
  image: {
    // margin:16,
    // height: 230,
    resizeMode: 'stretch',
    // marginRight:16,
    borderRadius:5,
    borderWidth:1,
    borderColor:COLORS.neutralLight
  },
});
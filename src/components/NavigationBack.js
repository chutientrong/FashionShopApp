import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gStyle } from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons'
// icons
// import SvgCircleLeft from '../icons/Svg.CircleLeft';

const NavigationBack = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // activeOpacity={gStyle.activeOpacity}
      onPress={() => navigation.goBack(null)}
      style={styles.container}
    >
      <Ionicons name='add'></Ionicons>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16
  }
});

export default NavigationBack;

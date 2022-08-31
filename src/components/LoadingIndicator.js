import React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { colors } from '../constants';
import { View } from './View';


export const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' color={colors.orange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

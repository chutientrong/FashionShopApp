import * as React from 'react';
import PropTypes from 'prop-types';
import { Button, ScrollView, Text, View } from 'react-native';


const MultiBase = ({ navigation }) => {
  const theme = 'dark';

  return (
    <ScrollView
      // contentContainerStyle={gStyle.contentContainer}
      // style={gStyle.container[theme]}
    >
      {/* <Text style={gStyle.text[theme]}>Multi screen content area</Text>

      <View style={gStyle.spacer64} /> */}

      <Button
        onPress={() => navigation.navigate('MultiLevel2')}
        text="Go to level 2"
      />
    </ScrollView>
  );
};

export default MultiBase;

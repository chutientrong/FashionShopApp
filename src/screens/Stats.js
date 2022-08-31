import * as React from 'react';
import { ScrollView, Text } from 'react-native';

const Stats = () => {
  const theme = 'dark';

  return (
    <ScrollView
      // contentContainerStyle={gStyle.contentContainer}
      // style={gStyle.container[theme]}
    >
      <Text >Stats content area</Text>
    </ScrollView>
  );
};



export default Stats;

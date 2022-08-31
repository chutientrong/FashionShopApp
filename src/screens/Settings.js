import * as React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';


const headerImage = __DEV__ ? 'rabbitDev' : 'rabbitProd';

const Settings = () => {
  const theme = 'dark';

  return (
    <ScrollView
      // contentContainerStyle={gStyle.contentContainer}
      // style={gStyle.container[theme]}
    >
      {/* <Text style={gStyle.text[theme]}>Settings content area</Text>

      <View style={gStyle.spacer16} /> */}

      <Text >
        Pacifico font example
      </Text>
    </ScrollView>
  );
};


export default Settings;

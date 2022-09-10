import React, { Component } from "react";

import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import { icons } from "../constants";

class Splash extends Component {
  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve("result");
      }, 1500)
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.replace("AppNavigator");
    }
  }

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //       const tryLogin = async () => {
  //           const userData = await AsyncStorage.getItem('userData');
  //           if (!userData) {
  //               // props.navigation.navigate('Auth');
  //               dispatch(authActions.setDidTryAutoLogin());
  //               return;
  //           }
  //           const transformedData = JSON.parse(userData);
  //           const { token, user } = transformedData;

  //           // props.navigation.navigate('Shop');
  //           dispatch(authActions.authenticate(user, token));
  //       };

  //       tryLogin();
  // }, [dispatch])
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.main}>
          <Image source={icons.logo}></Image>
        </View>
      </SafeAreaView>
    );
  }
}

export default Splash;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#40BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});

import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  useState,
  useEffect,
  componentDidMount,
  Component,
} from "react";
// import auth from '@react-native-firebase/auth';
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { icons } from "../constants";
import AppNavigator from "../navigation/AppNavigator";
import AppStack from "../navigation/AppNavigator";
import * as authActions from "../redux/actions/authActions";

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
      
      this.props.navigation.replace('AppNavigator');
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
      <View style={styles.main}>
        <Image source={icons.logo}></Image>
      </View>
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

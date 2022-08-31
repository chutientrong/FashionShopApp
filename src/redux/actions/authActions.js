import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { LOGOUT, SIGNIN, SIGNUP } from "../../services/urls";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SET_LOGOUT,
  LOGOUT_SUCCESS,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILED,
  GET_USERS_SUCCESS,
  CREATE_USER_REQUEST,
  AUTHENTICATE,
  SET_DID_TRY_AUTO_LOGIN
} from "./actionTypes";

export const setDidTryAutoLogin = () => {
  return{
      type: SET_DID_TRY_AUTO_LOGIN
  };
};

export const authenticate = (user, token) => {
  return dispatch => {
      dispatch({
          type: AUTHENTICATE,
          user,
          token
      });
  }
};

export const login = (values) => async (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  const {email,password}=values;
  // let account = email;
  console.log("The acc....", email);
  console.log("The pass....", password);
  try {
    // dispatch(setLoading(true));
    // await axios.post(SIGNIN,{}, {params: {account,password}}).then((res) => { //For student database
      await axios.post(SIGNIN,values).then((res) => {
      // let { username } = res.data.user;
      console.log(res);
      dispatch(authenticate(res.data.user, res.data.token));
      // console.log("The data....", res.data);
      console.log('Saving Token....');
      // AsyncStorage.setItem('@Token', res.data.token);
      saveDataToStorage(res.data.token, res.data.user);
      console.log('Token Saved!!!');
      dispatch(getUsersSuccess(res.data));
      dispatch(loginSuccess(email));
      console.log("The data....", res.data);
    });
  } catch (error) {
    if (error.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data;
      dispatch(addError(error.message));
      dispatch(setLoading(true));
      dispatch(loginFailed('Invalid email or password'));
    } else if (error.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log("Error request",error.request);
    } else {
      // Some other errors
      console.log("Error", error.message);
    }
    // let stus = error.response.status;
    // if (stus === 400 || stus === 404) {
    //     console.log('Response status', stus);
    //     dispatch(loginFailed('Invalid email or password'));
    // }
  }
};

const getUsersSuccess = (data) => ({
  type: GET_USERS_SUCCESS,
  payload: data,
});

const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data,
});

const setLoading= (data) => ({
  type: SET_LOADING,
  payload: data,
});

const loginFailed = (errorMessage) => ({
  type: LOGIN_FAILED,
  payload: errorMessage,
});

export const logout = async (dispatch) => {
  dispatch({
    type: SET_LOGOUT,
  });

  try {
    // await axios.post(SIGNIN,{}, {params: {account,password}}).then((res) => { //For student database
      await axios.post(LOGOUT,{}).then((res) => {
      // let { email } = res.data;
      // console.log(res);
      AsyncStorage.removeItem('userData');
      dispatch(logoutSuccess);
      // console.log("The data....", res.data);
      console.log("The data....", res.data);
    });
  } catch (error) {
    if (error.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data;
      dispatch(addError(error.message));
    } else if (error.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log("Error request",error.request);
    } else {
      // Some other errors
      console.log("Error", error.message);
    }
    // let stus = error.response.status;
    // if (stus === 400 || stus === 404) {
    //     console.log('Response status', stus);
    //     dispatch(loginFailed('Invalid email or password'));
    // }
  }
  console.log("Logout......... ");
};

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const registerUser = (values, navigation) => async (dispatch) => {
  dispatch({
    type: CREATE_USER_REQUEST,
  });
  let {username, email, password} = values;
  try {
    await axios.post(SIGNUP, {username,email,password}).then((res) => {
      dispatch({ type: CREATE_USER_SUCCESS, payload: res.data });
      console.log('Saving Token....');
      // AsyncStorage.setItem('@Token', res.data.token);
      console.log('Token Saved!!!');
      // dispatch(getUsersSuccess(res.data));
      saveDataToStorage(res.data.token, res.data.user);
      // dispatch(loginSuccess(email));
      console.log("Congrats......... ", res.data);
      // navigation.navigate('SignIn');
    });
  } catch (error) {
    if (error.response) {
      // There is an error response from the server
      // You can anticipate error.response.data here
      const error = err.response.data;
      console.log("Error when register", error);
      Toast;
      dispatch({ type: CREATE_USER_FAILED, payload: error });
    } else if (error.request) {
      // The request was made but no response was received
      // Error details are stored in error.reqeust
      console.log("Error request",error.request);
    } else {
      // Some other errors
      console.log("Error", error.message);
    }
    // let stus = error.response.status;
    // if (stus === 400 || stus === 404) {
    //     console.log('Response status', stus);
    //     dispatch(loginFailed('Invalid email or password'));
    // }
  }
 
};
const saveDataToStorage = (token, user) => {
  AsyncStorage.setItem('userData', JSON.stringify({
      token,
      user
  }));
}

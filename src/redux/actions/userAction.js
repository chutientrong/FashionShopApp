import axios from '../../services/config';
import { GET_ONE, UPDATE_USER } from '../../services/urls';
import {
    SET_CURRENT_USER,
    UPDATE_CURRENT_USER,
    SET_UPDATE_LOADING,
    SET_ERROR,
    GET_RECORDS,
  } from '../actionTypes';
  
  export const getUser = () => async (dispatch) => {
    try {
      dispatch({ type: SET_UPDATE_LOADING, payload: true });
      console.log('object 1111111111111');
      const res = await axios.get(GET_ONE);
      console.log('object 2222222222222');
      dispatch({ type: SET_CURRENT_USER, payload: res.data });
      console.log('object 3333333333333', res.data);
    } catch (err) {
      console.log('object', err.response.data);
      dispatch({ type: SET_UPDATE_LOADING, payload: false });
      dispatch({ type: SET_ERROR, payload: err.response.data.msg });
    }
  };
  
  export const updateUser = (data) => async (dispatch) => {
    try {
      dispatch({ type: SET_UPDATE_LOADING, payload: true });
      const res = await axios.put(UPDATE_USER, data);
      dispatch({ type: UPDATE_CURRENT_USER, payload: res.data });
    } catch (err) {
      console.log('object', err.response.data);
      dispatch({ type: SET_UPDATE_LOADING, payload: false });
      dispatch({ type: SET_ERROR, payload: err.response.data });
    }
  };
  
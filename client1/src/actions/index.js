import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './Types';

export const signup =
  ({ formProps, callback }) =>
  async (dispatch) => {
    try {
      const response = axios.post('http://localhost:3090/signup', formProps);
      dispatch({ type: AUTH_USER, payload: (await response).data.token });
      localStorage.setItem('token', (await response).data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
  };

export const signin =
  ({ formProps, callback }) =>
  async (dispatch) => {
    try {
      const response = axios.post('http://localhost:3090/signin', formProps);
      dispatch({ type: AUTH_USER, payload: (await response).data.token });
      localStorage.setItem('token', (await response).data.token);
      callback();
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Invalid Login credentials' });
    }
  };

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: '',
  };
};

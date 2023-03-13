import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './Types';

export const signup =
  ({ formProps }) =>
  async (dispatch) => {
    try {
      const response = axios.post('http://localhost:3090/signup', formProps);
      dispatch({ type: AUTH_USER, payload: (await response).data.token });
    } catch (e) {
      dispatch({ type: AUTH_ERROR, payload: 'Email in use' });
    }
  };

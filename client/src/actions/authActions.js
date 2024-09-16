// authActions.js
import axios from 'axios';

// Login Action
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_REQUEST' });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/auth/login', { email, password }, config);

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    });

    // Store user info in localStorage
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

// Register Action
export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_REGISTER_REQUEST' });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post('http://localhost:5000/api/auth/register', { name, email, password ,role : "customer" }, config);

    dispatch({
      type: 'USER_REGISTER_SUCCESS',
      payload: data,
    });

    // Automatically log in user after registration
    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data,
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: 'USER_REGISTER_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: 'USER_LOGOUT' });
  };

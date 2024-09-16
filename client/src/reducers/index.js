// src/reducers/index.js

import { combineReducers } from 'redux';

const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return { ...state, userInfo: action.payload };
    case 'USER_LOGOUT':
      return {};
    case 'REGISTER_ERROR':
        return {
          ...state,
          error: action.payload,
        };
    default:
      return state;
  }
};

const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS':
      return { ...state, products: action.payload };
    default:
      return state;
  }
};

export { authReducer, productReducer };

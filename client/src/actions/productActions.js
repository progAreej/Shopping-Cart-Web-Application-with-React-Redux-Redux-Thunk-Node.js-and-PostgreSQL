// productActions.js
import axios from 'axios';

// Fetch Products Action
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: 'PRODUCT_LIST_REQUEST' });

    const { data } = await axios.get('http://localhost:5000/api/products');

    dispatch({
      type: 'PRODUCT_LIST_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'PRODUCT_LIST_FAIL',
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    });
  }
};

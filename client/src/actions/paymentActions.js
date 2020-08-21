import {
  SESSION,
  SESSION_SUCCESS,
  SESSION_FAIL,
  CLEAR_SESSION,
} from '../actions/Types';
import axios from 'axios';

// Get Session
export const getSession = (amount) => async (dispatch) => {
  const body = {
    apiOperation: 'CREATE_CHECKOUT_SESSION',
    interaction: {
      operation: 'PURCHASE',
    },
    order: {
      currency: 'USD',
      amount,
    },
  };

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const sessionResponse = await axios.post(
      '/api/v1/pay/getSession',
      body,
      config
    );

    const sessionPayload = sessionResponse.data.data;
    dispatch({
      type: SESSION_SUCCESS,
      payload: sessionPayload,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: SESSION_FAIL,
      payload: err,
    });
  }
};

// Clear Session
export const clearSession = () => ({ type: CLEAR_SESSION });

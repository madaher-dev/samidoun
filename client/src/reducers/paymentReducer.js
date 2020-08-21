import { SESSION_SUCCESS, SESSION_FAIL, CLEAR_SESSION } from '../actions/Types';

const initialState = {
  sessionStatus: null,
  orderID: null,
  sessionID: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SESSION_SUCCESS:
      return {
        ...state,
        sessionStatus: 'success',
        sessionID: action.payload.session.id,
        orderID: action.payload.orderID,
      };
    case SESSION_FAIL:
      return {
        ...state,
        sessionStatus: 'fail',
        sessionID: null,
      };
    case CLEAR_SESSION:
      return {
        ...state,
        sessionStatus: null,
        sessionID: null,
      };
    default:
      return state;
  }
};

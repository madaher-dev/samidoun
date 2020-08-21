import { combineReducers } from 'redux';
//import volunteerReducer from './volunteerReducer';
//import userReducer from './userReducer';
import navReducer from './navReducer';
import alertReducer from './alertReducer';
import paymentReducer from './paymentReducer';

export default combineReducers({
  //volunteer: volunteerReducer,
  nav: navReducer,
  alerts: alertReducer,
  pay: paymentReducer,
  // user: userReducer,
});

import { combineReducers } from 'redux';
//import volunteerReducer from './volunteerReducer';
//import userReducer from './userReducer';
import navReducer from './navReducer';
import alertReducer from './alertReducer';

export default combineReducers({
  //volunteer: volunteerReducer,
  nav: navReducer,
  alerts: alertReducer,
  // user: userReducer,
});

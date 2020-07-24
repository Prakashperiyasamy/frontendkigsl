import { combineReducers } from "redux";

import { authentication } from './authentication.reducer'
import { registration } from './registration.reducer'
import { contactReducer } from './contact.reducer'



export default combineReducers({
  registration,
  authentication,
  contactReducer

});

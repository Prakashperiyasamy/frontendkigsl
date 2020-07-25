import { userConstants } from '../constants/userconstant';

const initialState =  {
  token:""
};


export function registration(state = {}, action) {
  switch (action.type) {
 
    case userConstants.REGISTER_SUCCESS:
      return {
        registerIn: true,
        token: action.user
    }
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state
  }
}
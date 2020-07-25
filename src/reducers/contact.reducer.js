import { userConstants } from '../constants/userconstant';

const initialState = {
    totalcontact:[]
}

export function contactReducer(state = initialState, action) {
    switch (action.type) {

        case userConstants.TOTAL_CONTACT_SUCCESS:
            return {
                ...state,
                totalcontact:action.user.data.message
            };
        case userConstants.TOTAL_CONTACT_FAILURE:
            return {};
        case userConstants.ADD_CONTACT_SUCCESS:
            return {

            };
        case userConstants.ADD_CONTACT_FAILURE:
            return {};
        case userConstants.UPDATE_CONTACT_SUCCESS:
            return {

            };
        case userConstants.UPDATE_CONTACT_FAILURE:
            return {};
        case userConstants.DELETE_CONTACT_SUCCESS:
            return {

            };
        case userConstants.DELETE_CONTACT_FAILURE:
            return {};
        case userConstants.CALL_COUNT_SUCCESS:
            return {

            };
        case userConstants.CALL_COUNT_FAILURE:
            return {};

        default:
            return state
    }
}
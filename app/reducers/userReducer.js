
import * as types from '../actions/actionTypes';

const initialState = {
    user: {},
    isLoading: false,
    isLoggedIn: false,
    avatar:false,
    isLoggedout:false
};

let userReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.kUserLogin:

            state.user.id = action.user.id;
            state.user.mobile = action.user.mobile;
            state.avatar = true;
            state.isLoading = false;
            state.isLoggedIn = true;

            return {
                ...state,
            };

        case types.kUserLogout:

                state.user.id=false;
                state.user.mobile = "";
                state.isLoggedout = true;
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false
            };

        default:
            return state;
    }
};

export default userReducer;
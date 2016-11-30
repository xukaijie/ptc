
import * as types from '../actions/actionTypes';

const initialState = {
    status: false,
    code: 0,
    message: '',
    user: {},
    share: {},
    isLoading: false,
    isLoggedIn: false,
    avatar:false,
    isLoggedout:false
};

let userReducer = (state=initialState, action) => {

    console.log(action)
    switch (action.type) {
        case types.kUserLogin:

            state.user.id = action.user.id;
            state.user.mobile = action.user.mobile;
            return {
                ...state,
                isLoading: false,
                isLoggedIn: true,
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
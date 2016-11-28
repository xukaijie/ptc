/**
 * ShopReactNative
 *
 * @author Tony Wong
 * @date 2016-08-13
 * @email 908601756@qq.com
 * @copyright Copyright © 2016 EleTeam
 * @license The MIT License (MIT)
 */

import * as types from '../actions/actionTypes';

const initialState = {
    status: false,
    code: 0,
    message: '',
    user: {},
    share: {},
    isLoading: false,
    isLoggedIn: false,
};

let userReducer = (state=initialState, action) => {


    switch (action.type) {
        case types.kUserLogin:
            return {
                ...state,
                ...action,
                isLoading: false,
                isLoggedIn: true,
            };

        default:
            return state;
    }
};

export default userReducer;
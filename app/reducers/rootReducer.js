
/**
 * 根reducer
 */
import { combineReducers } from 'redux';

import userReducer from './userReducer';
import arcleReducer from './arcleReducer';
import weatherReducer from './arcleReducer';

export default rootReducer = combineReducers({
    userReducer,
    arcleReducer,
    weatherReducer
})
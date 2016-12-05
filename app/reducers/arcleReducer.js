
import * as types from '../actions/actionTypes';

const initialState = {
    article:[]
};

let arcleReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.kUserArcleRecevied:

            state.article=[];
            for (var i = 0;i < action.data.length;i++){

              state.article.push(action.data[i])
            }

            console.log(state)
            return {
                ...state,
            };


        default:
            return state;
    }
};

export default arcleReducer;
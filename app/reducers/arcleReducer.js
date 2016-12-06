
import * as types from '../actions/actionTypes';

const initialState = {
    isloading:true,
    receivederr:false,
    loadmore:0,
    article:[]
};

let arcleReducer = (state=initialState, action) => {

    switch (action.type) {
        case types.kUserArcleRecevied:

            state.article=[];
            for (var i = 0;i < action.data.length;i++){

              state.article.push(action.data[i])
            }

            return {
                ...state,
            };

        case types.kUserArcleRequestErr:

                state.receivederr = true;
                state.isLoading = false;

                return {
                    ...state,
                };

        default:
            return state;
    }
};

export default arcleReducer;
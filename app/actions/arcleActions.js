'user strict';

import * as types from './actionTypes';

import * as Storage from '../common/storage';
import { Alert } from 'react-native';

import Util from '../common/utils';
import * as urls from '../common/urls';



export let arcleGetList = () => {

    var url = urls.kArcleList;
    let fetchOptions = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'apikey':'19ffb04654b0f50d003e0a58abf2c50b'
        },
        };

    return ((dispatch)=>{

        fetch(url, fetchOptions)
            .then((response) => {

                return response.text();

            })
            .then((responseText) => {



                var res = JSON.parse(responseText);

                dispatch({type:types.kUserArcleRecevied,data:res.showapi_res_body.pagebean.contentlist})

            })
            .catch((err) => {
                failCallback(err);
            });
    })

}

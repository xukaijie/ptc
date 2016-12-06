'user strict';

import * as types from './actionTypes';

import * as Storage from '../common/storage';
import { Alert } from 'react-native';

import Util from '../common/utils';
import * as urls from '../common/urls';
import {apikey} from '../common/config'



export let arcleGetList = () => {

    let url = urls.kArcleList;
    let fetchOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'apikey':apikey
            },
        };



    return (dispatch)=>{

        console.log(url);
        console.log(fetchOptions)

        fetch(url, fetchOptions)
            .then((response) => {

                console.log(response)

                return response.text();

            })
            .then((responseText) => {



                var res = JSON.parse(responseText);


                dispatch({type:types.kUserArcleRecevied,data:res.showapi_res_body.pagebean.contentlist})

            })
            .catch((err) => {
                console.log(err);
                dispatch({type:types.kUserArcleRequestErr})
            });
    }

};

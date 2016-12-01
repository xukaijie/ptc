
'use strict';

 //import {FormData} from 'react-native';

let Util = {
    /**
     * http get 请求简单封装
     * @param url 请求的URL
     * @param successCallback 请求成功回调
     * @param failCallback 请求失败回调
     */
    get: (url, successCallback, failCallback) => {
        fetch(url)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                successCallback(result.status, result.code, result.message, result.data, result.share);
            })
            .catch((err) => {
                failCallback(err);
            });
    },

    /**
     * http post 请求简单封装
     * @param url 请求的URL
     * @param data post的数据
     * @param successCallback 请求成功回调
     * @param failCallback failCallback 请求失败回调
     */
    post: (url, data, successCallback, failCallback) => {
        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                 'Content-Type': 'application/json'
                //'Content-Type': 'multipart/form-data',
            },
            //body: data
             body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => {

                return response.text();

            })
            .then((responseText) => {

                var res = JSON.parse(responseText);

                /*返回正确分支*/
                if (res.ok){
                    successCallback(res,responseText.status)

                }else{
                   /*返回错误分支*/
                    failCallback(res,responseText.status)

                }
            })
            .catch((err) => {
                failCallback(err);
            });
    },

    /**
     * 日志打印
     * @param obj
     */
    log: (obj) => {
        var description = "";
        for(let i in obj){
            let property = obj[i];
            description += i + " = " + property + "\n";
        }
        alert(description);
    },
};

export default Util;
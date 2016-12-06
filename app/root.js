import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import App from './app';


export default class Root extends Component {

    constructor(props){

        super(props)
        //WeChat.registerApp('wx89acba1a27e62eda');

    }
    render() {
        return (
            <Provider store = {store} >
                <App />
            </Provider>
        )
    }
}
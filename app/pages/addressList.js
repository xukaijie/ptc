

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
    Image,
    ScrollView,
    TabBarIOS
} from 'react-native';

import Header from '../common/header';

export default class AddressList extends Component {


    render(){

        return (

            <View>

                <Header  leftIcon='angle-left'
                         leftIconAction={()=>this.props.navigator.pop()}></Header>
            <Text>xukaijie</Text>

            </View>)
    }

}
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Dimensions from 'Dimensions';
import Swiper from 'react-native-swiper';
import { PixelRatio } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import IconFA from 'react-native-vector-icons/FontAwesome';

import {connect} from 'react-redux'


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


var width = Dimensions.get("window").width;
var pixel = 1 / PixelRatio.get();



class Weather extends Component {

    constructor(props) {
        super(props);
    }



    render(){
        var thiz = this;
        return (
            <View style={{flex:1}}>
                <View style={styles.forecastView}>
                   <View style={styles.forecastList}>
                        <Image style={styles.image} source={require("./../images/sunny.png")}></Image>
                    </View>
                </View>
            </View>
        )
    }
};


const styles = StyleSheet.create({


    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#dff5b2',
        marginBottom: 5,
    },
    slide: {
        flex: 1,
        height: 150,
        justifyContent: "center",
        alignItems: "center",
    },
    slideText:{
        position:"absolute",
        bottom: 0,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor:"rgba(255,255,255,0.5)",
        width: width,
        textAlign:"center",
        fontSize: 12
    },
    image:{
        width: width/3,
        height: width/3,
    },
    mainView: {
        marginTop: 10
    },navBar: {
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    navTitle: {
        paddingTop: 10,
        fontSize: 18,
        fontWeight: "500",
    },
    navBackBtn: {
        paddingTop: 10,
        paddingLeft: 10,
        fontSize: 18,
        color: "#555",
    },
    itemWrapper:{
        backgroundColor: '#f3f3f3'
    },
    touchBox:{
        width: width/3-0.33334,
        height:width/3,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
    },
    touchBoxContainer:{
        flexDirection: "row",
        flexWrap:"wrap",
        width: width,
        borderTopWidth: pixel,
        borderTopColor:"#ccc",
        borderLeftWidth: pixel,
        borderLeftColor:"#ccc",
        borderRightWidth: pixel,
        borderRightColor:"#ccc",
    },
    touchBox1:{
        borderBottomWidth: pixel,
        borderBottomColor:"#ccc",
        borderRightWidth: pixel,
        borderRightColor:"#ccc",
    },
    touchBox2:{
        borderBottomWidth: pixel,
        borderBottomColor:"#ccc",
        borderLeftWidth: pixel,
        borderLeftColor:"#ccc",
    },
    boxContainer:{
        alignItems:"center",
        justifyContent:"center",
        width: width/3,
        height:width/3,
    },
    boxIcon:{
        position:"relative",
        top:-10
    },
    boxText:{
        position:"absolute",
        bottom:15,
        width:width/3,
        textAlign:"center",
        left: 0,
        backgroundColor:"transparent"
    },
    forecastView: {
        marginLeft: 5,
        marginRight: 5,
        flexDirection: 'row',
        borderColor: '#e2e2e2',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 3,
        alignItems:"center",
        justifyContent:"center",
    },
    forecastList: {
        flex: 1,
        borderColor: '#E2E2E2',
        paddingLeft: 12,
        paddingRight: 12,
        alignItems:"center",
        justifyContent:"center",
    },

});

export default connect((state) => {
    const { weatherReducer } = state;
    return {
        weatherReducer
    }
})(Weather);

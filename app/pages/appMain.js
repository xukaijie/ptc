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

import {Actions, Scene, Router} from 'react-native-router-flux';




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


class mainpage extends Component {

    constructor(props) {
        super(props);

        this.state= {selectedTab:"home"}

    }

    /*    _addnavgator(component){

     return (
     <Navigator
     initialRoute={{component:component}}
     renderScene={(route, navigator) => {
     alert("goto home")
     return <route.component navigator={navigator} />
     }}>

     </Navigator>
     );

     }*/

    render(){

        var thiz=this;

        return (



            <TabBarIOS
                style={{flex:1,alignItems:"flex-end"}}
                tintColor="white"
                barTintColor="#5fd3f5">
                <TabBarIOS.Item
                    title="自定义"
                    systemIcon="favorites"
                    selected={this.state.selectedTab === 'home'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'home',
                        });
                    }}
                >
                    /*<Home navigator={this.props.navigator}/>*/
                    <View><Text>mmmm</Text></View>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="contacts"
                    selected={this.state.selectedTab === 'history'}

                    onPress={() => {
                        this.setState({
                            selectedTab: 'history',
                        });
                    }}
                >

                    <View><Text>mmmm</Text></View>

                </TabBarIOS.Item>
                <TabBarIOS.Item
                    systemIcon="downloads"
                    selected={this.state.selectedTab === 'download'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'download',
                        });
                    }}>
                    <View><Text>mmmm</Text></View>
                </TabBarIOS.Item>

            </TabBarIOS>

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
        color: '#333333',
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
        width: width,
        height: 80,
        flex: 1,
        alignSelf: "stretch",
        resizeMode: "cover"
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

});

module.exports = mainpage
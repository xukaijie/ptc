/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';

import Dimensions from 'Dimensions';

import IconFA from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../common/header';
import AddressList from '../pages/addressList'

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';

var width = Dimensions.get("window").width;



export default class HomeList extends Component {

    constructor(props){
        super(props)

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.props.xu = "kaie";
        this.state={dataSource:
            ds.cloneWithRows(this._genRows()),
            item0:"xukaijie"

        }
    }


    _genRows(){

        return [{component:AddressList,size:{width:65,height:65},title:"通讯录",image:require("../images/address.jpg")}]

    }

    press(component){

        this.props.navigator.push({component:component,title:"通讯录"})

    }

    _renderRow(rowData) {

        var name = rowData.name;
        var size = rowData.size;
        var title =rowData.title;


        return (
            <TouchableHighlight underlayColor="red" onPress={this.press.bind(this,rowData.component)}>
                <View style={styles.row}>
                    <Image source={rowData.image} style={rowData.size}></Image>
                    <Text style={{marginTop:width/70}}>{title}</Text>

                </View>
            </TouchableHighlight>

        );
    }




    render() {

        return(

            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
            />

        )
    }
}

const styles = StyleSheet.create({
    list: {
        marginTop:5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        width:width,
    },
    row: {
        padding: 5,
        justifyContent:'center',
        width: width/4,
        height: 80,
        alignItems:'center',
        borderRadius: 20,
        marginBottom:20,
        flexDirection:"column",
        backgroundColor:"white"
    },
    thumb: {
        width: 45,
        height: 45
    },
    text: {
        flex: 1,
        marginTop: 5,
        fontWeight: 'bold'
    },
});


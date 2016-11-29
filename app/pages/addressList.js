import React, {Component} from 'react';

import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableHighlight,
    ListView,
    ActionSheetIOS
} from 'react-native';


class Address extends Component{

    constructor(props){
        super(props)

        var ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 != r2});

         this.state= {dataSource : ds.cloneWithRows([
             {"title" : "徐开洁", image: require("../images/xukaijie.jpg"),tele:"18042008682"},
             {"title" : "许春妹", "image" :require("../images/xuchunmei.jpg"),tele:"18258150703"},
             {"title" : "爸爸", "image" : require("../images/baba.jpg"),tele:"13968322170"},
             {"title" : "妈妈", "image" :require("../images/mama.jpg"),tele:"15968438768"}
         ])}


    }

    render(){
        return(
            <View style={styles.container}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }

    // 返回一个Item
    renderRow(rowData){
        return(

            <TouchableHighlight  style={{flex:1}} onPress={this.clickitem.bind(this,rowData)}>
            <View style={styles.itemStyle}>
                <Image source={rowData.image} style={styles.imageStyle}/>
                <View style={styles.subItemStyle}>
                    <Text style={{marginTop:5, fontSize:17}}>{rowData.title}</Text>
                    <Text style={{marginBottom:5, fontSize:13, color:'green'}}>{rowData.tele}</Text>
                </View>
            </View>
            </TouchableHighlight>
        );
    }

    clickitem(){

        var options=[
            "拨打电话","发送短信","取消"

        ];

        ActionSheetIOS.showActionSheetWithOptions({
            options:options,
            cancelButtonIndex:options.length-1,
            tintColor:"green"

        },function(index){


        })
    }
};

var styles = StyleSheet.create({
    container: {
        flex:1
    },

    itemStyle: {
        // 主轴方向
        flexDirection:'row',
        // 下边框
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },

    imageStyle: {
        // 尺寸
        width:60,
        height:60,
        // 边距
        marginLeft:10,
        margin:10
    },

    subItemStyle: {
        // 对齐方式
        justifyContent:'space-around'
    }
});

module.exports = Address;
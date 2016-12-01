
import React, { PropTypes,Component } from 'react';
import DrawerLayout from 'react-native-drawer-layout';

import {
    StyleSheet,
    ListView,
    RefreshControl,
    ScrollView,
    Text,
    TouchableOpacity,
    InteractionManager,
    ActivityIndicator,
    DrawerLayoutAndroid,
    RecyclerViewBackedScrollView,
    Image,
    Dimensions,
    Platform,
    View,
    DeviceEventEmitter
} from 'react-native';


const homeImg = require('../images/home.png');
const categoryImg = require('../images/category.png');
const inspectionImg = require('../images/inspection.png');
const infoImg = require('../images/info.png');

class DrawLayout extends Component {



    renderNavigationViewItem(image, title, index) {
        return (
            <TouchableOpacity
                style={styles.drawerContent}
            >
                <Image
                    style={styles.drawerIcon}
                    source={image}
                />
                <Text style={styles.drawerText}>
                    {title}
                </Text>
            </TouchableOpacity>
        );
    }

    renderNavigationView() {
        return (
            <View style={[styles.container, { backgroundColor: '#fcfcfc' }]}>
                <View style={styles.drawerTitleContent}>
                    <Text style={styles.drawerTitle}>
                        iReading
                    </Text>
                    <Text style={styles.drawerTitle}>
                        让生活更精彩
                    </Text>
                </View>
                {this.renderNavigationViewItem(homeImg, '首页', 0)}
                {this.renderNavigationViewItem(categoryImg, '分类', 1)}
                {this.renderNavigationViewItem(inspectionImg, '建议', 2)}
                {this.renderNavigationViewItem(infoImg, '关于', 3)}
            </View>
        );
    }

    render() {
        return (
            <View style={{marginTop:50,flex:1}}>
            <DrawerLayout
                ref={(ref) => { this.drawer = ref; }}
                drawerWidth={Dimensions.get('window').width / 5 * 3}
                drawerPosition={Platform.OS === 'android' ? DrawerLayoutAndroid.positions.Left : 'left'}
                renderNavigationView={this.renderNavigationView.bind(this)}
            >

                <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
                    <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}} onPress={()=>{this.drawer.openDrawer()}} >往右边滑动</Text>
                </View>
            </DrawerLayout>
            </View>)
    }
};


const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFF'
    },
    containerItem: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fcfcfc',
        padding: 10,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    title: {
        fontSize: 18,
        textAlign: 'left',
        color: 'black'
    },
    listView: {
        backgroundColor: '#eeeeec'
    },
    no_data: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100
    },
    drawerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    drawerTitleContent: {
        height: 120,
        justifyContent: 'flex-end',
        padding: 20,
        backgroundColor: '#3e9ce9'
    },
    drawerIcon: {
        width: 30,
        height: 30,
        marginLeft: 5
    },
    drawerTitle: {
        fontSize: 20,
        textAlign: 'left',
        color: '#fcfcfc'
    },
    drawerText: {
        fontSize: 18,
        marginLeft: 15,
        textAlign: 'center',
        color: 'black'
    },
    footerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    footerText: {
        textAlign: 'center',
        fontSize: 16,
        marginLeft: 10
    },
    itemImg: {
        width: 88,
        height: 66,
        marginRight: 10
    },
    itemRightContent: {
        flex: 1,
        flexDirection: 'column'
    },
    itemRightBottom: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        flex: 1,
        fontSize: 14,
        color: '#87CEFA',
        marginTop: 5,
        marginRight: 5
    },
    timeAgo: {
        fontSize: 14,
        color: '#aaaaaa',
        marginTop: 5
    },
    refreshControlBase: {
        backgroundColor: 'transparent'
    },
    tab: {
        paddingBottom: 0
    },
    tabText: {
        fontSize: 16
    },
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    }
});

module.exports = DrawLayout;
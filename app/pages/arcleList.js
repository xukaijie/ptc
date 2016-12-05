
import React, { PropTypes,Component } from 'react';

import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import TimeAgo from 'react-native-timeago';


import {arcleGetList} from '../actions/arcleActions';

import {connect} from 'react-redux';

import { formatStringWithHtml } from '../common/formatUtil';
import LoadingView from '../common/loadingView';
//import WebViewPage from './webViewPage';



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

class ArcleList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),

        };

    }


   componentDidMount() {
        const { dispatch } = this.props;

        InteractionManager.runAfterInteractions(() => {

                dispatch(arcleGetList())

        });
    }

    onPress(article) {
/*        const { navigator } = this.props;
        navigator.push({
            component: WebViewPage,
            name: 'WebViewPage',
            article
        });*/
    }




    renderItem(article) {

        return (
            <TouchableOpacity onPress={() => this.onPress(article)}>
                <View style={styles.containerItem}>
                    <Image
                        style={styles.itemImg}
                        source={{ uri: article.contentImg }}
                    />
                    <View style={styles.itemRightContent} >
                        <Text style={styles.title}>
                            {formatStringWithHtml(article.title)}
                        </Text>
                        <View style={styles.itemRightBottom} >
                            <Text style={styles.userName} >
                                {article.userName}
                            </Text>
                            <TimeAgo
                                style={styles.timeAgo}
                                time={article.date}
                            />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

    render(){

        var {arcleReducer} = this.props;

        return (

            <View style={{flex:1}}>

                {
                    arcleReducer.article.length == 0?
                        <LoadingView/>
                        :
                <ListView
                    initialListSize={1}
                    dataSource={this.state.dataSource.cloneWithRows(arcleReducer.article)}
                    renderRow={this.renderItem.bind(this)}
                    style={styles.listView}
                    //onEndReached={() => this.onEndReached(typeId)}
                    //onEndReachedThreshold={10}
                   // onScroll={this.onScroll}
                    renderFooter={this.renderFooter}
                   // renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                   /* refreshControl={
                        <RefreshControl
                            style={styles.refreshControlBase}
                            refreshing={read.isRefreshing}
                            onRefresh={() => this.onRefresh(typeId)}
                            title="Loading..."
                            colors={['#ffaa66cc', '#ff00ddff', '#ffffbb33', '#ffff4444']}
                        />
                         }*/

                >



                </ListView>
                }




            </View>


        )

    }

}

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

export default connect((state) => {
    const { arcleReducer } = state;
    return {
        arcleReducer
    }
})(ArcleList);
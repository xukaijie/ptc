/**
 *
 * Copyright 2016-present reading
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    WebView,
    Dimensions,
    Text,
    Image,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
    Modal
} from 'react-native';

import * as WeChat from 'react-native-wechat';
import { toastShort } from '../common/toastUtil';
import LoadingView from '../common/loadingView';
import { formatStringWithHtml } from '../common/formatUtil';

const shareIconWechat = require('../images/share_icon_wechat.png');
const shareIconMoments = require('../images/share_icon_moments.png');

const toolbarActions = [
    { title: '分享', iconName: 'md-share', show: 'always' }
];
let canGoBack = false;

class WebViewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShareModal: false
        };
        this.onActionSelected = this.onActionSelected.bind(this);
        this.goBack = this.goBack.bind(this);

        WeChat.registerApp('wx8d560da3ba038e7e');
    }

/*    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.goBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.goBack);
    }*/

    onActionSelected() {
        this.setState({
            isShareModal: true
        });
    }

    onNavigationStateChange(navState) {
        canGoBack = navState.canGoBack;
    }

    goBack() {
        if (this.state.isShareModal) {
            this.setState({
                isShareModal: false
            });
            return true;
        } else if (canGoBack) {
            this.webview.goBack();
            return true;
        }
        return this.props.navigator.pop();
    }

    renderLoading() {
        return <LoadingView />;
    }

    renderSpinner() {
        const { route } = this.props;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
          this.setState({
            isShareModal: false
          });
        }}
            >
                <View
                    key={'spinner'}
                    style={styles.spinner}
                >
                    <View style={styles.spinnerContent}>
                        <Text style={[styles.spinnerTitle, { fontSize: 20, color: 'black' }]}>
                            分享到
                        </Text>
                        <View style={styles.shareParent}>
                            <TouchableOpacity
                                style={styles.base}
                                onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToSession({
                          title: formatStringWithHtml(route.article.title),
                          description: '分享自：iReading',
                          thumbImage: route.article.contentImg,
                          type: 'news',
                          webpageUrl: route.article.url
                        })
                        .catch((error) => {
                          toastShort(error.message, true);
                        });
                      } else {
                        toastShort('没有安装微信软件，请您安装微信之后再试', true);
                      }
                    });
                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconWechat}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        微信
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.base}
                                onPress={() => {
                  WeChat.isWXAppInstalled()
                    .then((isInstalled) => {
                      if (isInstalled) {
                        WeChat.shareToTimeline({
                          title: formatStringWithHtml(`[@iReading]${route.article.title}`),
                          thumbImage: route.article.contentImg,
                          type: 'news',
                          webpageUrl: route.article.url
                        })
                        .catch((error) => {
                          toastShort(error.message, true);
                        });
                      } else {
                        toastShort('没有安装微信软件，请您安装微信之后再试', true);
                      }
                    });
                }}
                            >
                                <View style={styles.shareContent}>
                                    <Image
                                        style={styles.shareIcon}
                                        source={shareIconMoments}
                                    />
                                    <Text style={styles.spinnerTitle}>
                                        朋友圈
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    render() {
        const { navigator, route } = this.props;
        return (
            <View style={styles.container}>

                <Modal
                    animationType="fade"
                    visible={this.state.isShareModal}
                    transparent
                    onRequestClose={() => {
                            this.setState({
                            isShareModal: false
                            });
                        }}
                >
                    {this.renderSpinner()}
                </Modal>
                <WebView
                    ref={(ref) => { this.webview = ref; }}
                    automaticallyAdjustContentInsets={false}
                    style={styles.base}
                    source={{ uri: route.article.url }}
                    javaScriptEnabled
                    domStorageEnabled
                    startInLoadingState
                    scalesPageToFit
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={() => {
                        const shouldStartLoad = true;
                        return shouldStartLoad;
                    }}
                    onNavigationStateChange={this.onNavigationStateChange}
                    renderLoading={this.renderLoading}
                />
            </View>
        );
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
    spinner: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.65)'
    },
    spinnerContent: {
        justifyContent: 'center',
        width: Dimensions.get('window').width * (7 / 10),
        height: Dimensions.get('window').width * (7 / 10) * 0.68,
        backgroundColor: '#fcfcfc',
        padding: 20,
        borderRadius: 5
    },
    spinnerTitle: {
        fontSize: 18,
        color: '#313131',
        textAlign: 'center',
        marginTop: 5
    },
    shareParent: {
        flexDirection: 'row',
        marginTop: 20
    },
    shareContent: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    shareIcon: {
        width: 40,
        height: 40
    }
});

export default WebViewPage;

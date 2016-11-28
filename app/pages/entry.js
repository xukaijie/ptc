

import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View
} from 'react-native';
import Login from '../pages/login';


var {height, width} = Dimensions.get('window');

class Entry extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: Login,
                    name: 'login'
                });
            });
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('../images/ic_welcome.jpg')}
                />
            </View>
        );
    }
}

export default Entry;
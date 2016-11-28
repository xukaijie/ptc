/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import EditView from '../common/editView';
import {userLogin} from '../actions/userActions';
import AppMain from './appMain';
import {connect} from 'react-redux';



import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    InteractionManager
} from 'react-native';

class Login extends Component {


    constructor(props){
        super(props);

        this.state={
            name:"",
            password:""
        };

    }


    componentWillUpdate(){

        InteractionManager.runAfterInteractions(() => {
            const {userReducer} = this.props;
            if (userReducer.isLoggedIn == true) {
                this.props.navigator.resetTo({component:AppMain,name:"appMain"});
            }
            /*if (!userReducer.isLoading && userReducer.status == false) {
                Toast.show(userReducer.message, {position: Toast.positions.CENTER});
            }*/
        });

    }

    render() {
        return (

            <View style={LoginStyles.loginview}>
                <View   style={{height:100,marginTop:60,
                    justifyContent: 'center',
                    alignItems: 'center',}}>
                    <Image source={require('../images/login.jpg')}/>
                </View>
                <View style={{marginTop:50}}>
                    <EditView  name='输入用户名/注册手机号' autocap = "none" onChangeText={(text) => {
                        this.state.name = text;
                    }}/>
                    <EditView name='输入密码' autocap = "none" onChangeText={(text) => {
                        this.state.password = text;
                    }}/>
                    <Button onPress={this.onPressCallback.bind(this)} containerStyle={{marginTop:10,padding:10, height:50, overflow:'hidden', borderRadius:4, borderColor:'#5fd3f5',
                            borderWidth:1,backgroundColor: '#5fd3f5'}}
                            style={{fontSize: 20, color: 'white'}}>登入</Button>
                    <Text style={{color:"#4A90E2",textAlign:'center',marginTop:10}} >忘记密码？</Text>
                </View>
            </View>
        )
    }


    onPressCallback(){

        var {dispatch} = this.props;
        let {name, password} = this.state;

        if (!name.length) {
            Toast.show('请输入正确的手机号', {position:Toast.positions.CENTER});
            return;
        }
        if (!password.length) {
            Toast.show('请输入密码', {position:Toast.positions.CENTER});
            return;
        }
        dispatch(userLogin(this.state.name,this.state.password));

    }
}


const LoginStyles = StyleSheet.create({
    loginview: {
        flex: 1,
        padding: 30,
        backgroundColor: '#ffffff',
    },
});

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
});

export default connect((state) => {
    const { userReducer } = state;
    return {
        userReducer
    }
})(Login);
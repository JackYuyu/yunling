/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';

//引入主界面
var Home = require('./js/TabBottom');
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
        <Navigator style={styles.container1}
    initialRoute={{
      component: Home   //将根界面压栈
    }}
    renderScene={(route, navigator) => { // 用来渲染navigator栈顶的route里的component页面
      return <route.component navigator={navigator} {...route} {...route.passProps}/>// {...route.passProps}即就是把passProps里的键值对全部以给属性赋值的方式展开 如：test={10}
    }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  container1: {
    backgroundColor: '#fcfcfc'
  },
});

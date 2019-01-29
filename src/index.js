import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import App from './App';
import {Provider}from 'react-redux';
import store from './App/Redux/Store'

export default class Main extends Component<Props> {
  render() {
    return (
        <Provider store={store}>
              <App />
        </Provider>
    );
  }
}
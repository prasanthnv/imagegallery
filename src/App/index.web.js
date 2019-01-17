/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { translate } from 'react-i18next';
import CounterContainer from './Containers/Counter'
type Props = {};
class App extends Component<Props> {
  render() {
    const { t, i18n } = this.props;
    return (
      <React.Fragment>
       <div>{t('home.title') }</div>
       <button onClick={() => i18n.changeLanguage('en')}>En</button>
       <button onClick={() => i18n.changeLanguage('es')}>Es</button>
       <CounterContainer />
       </React.Fragment>
    );
  }
}

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

export default translate()(App);
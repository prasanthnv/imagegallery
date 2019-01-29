import React from 'react';
import {View,Text,StyleSheet,StatusBar} from 'react-native';
import styles from './styles'
//1e2064d83ab19e9cc8bea301bd8716b3f30fb90ec46ce3343e09f9a05ca4ce30
function Navbar(props) {
    return (
        <View style={styles.container}>
        <StatusBar backgroundColor="blue" barStyle="light-content" backgroundColor="#e73745"/>
            <Text style={styles.header}>UnSplash</Text>
        </View>
    );
}

export default Navbar;
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

/* Components */
import Simples from './Components/Simples.js';
import ParImpar from './Components/ParImpar.js';
import { Inverter, MegaSena } from './Components/Multi.js';

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Simples textInside='Primeiro componente' />
                <ParImpar numero={32} />
                <Inverter texto='React Native!!' />
                <MegaSena />
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    f20: {
        fontSize: 40,
    },
});

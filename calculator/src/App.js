import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Components/Button.js';

const buttons = [
    { label: 'AC', key: `${Math.random()}` },
    { label: '/', key: `${Math.random()}` },
    { label: '7', key: `${Math.random()}` },
    { label: '8', key: `${Math.random()}` },
    { label: '9', key: `${Math.random()}` },
    { label: '*', key: `${Math.random()}` },
    { label: '4', key: `${Math.random()}` },
    { label: '5', key: `${Math.random()}` },
    { label: '6', key: `${Math.random()}` },
    { label: '-', key: `${Math.random()}` },
    { label: '1', key: `${Math.random()}` },
    { label: '2', key: `${Math.random()}` },
    { label: '3', key: `${Math.random()}` },
    { label: '+', key: `${Math.random()}` },
    { label: '0', key: `${Math.random()}` },
    { label: '.', key: `${Math.random()}` },
    { label: '=', key: `${Math.random()}` },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default class App extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.buttons}>
                    {buttons.map(({ label, key }) => (
                        <Button label={label} key={key} />
                    ))}
                </View >
            </View>
        )
    };
};



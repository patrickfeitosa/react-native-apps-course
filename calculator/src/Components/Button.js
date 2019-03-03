import React from 'react';
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native';

const mainStyles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888888',
    },
    operationButton: {
        color: '#ffffff',
        backgroundColor: '#fa8231',
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
});

export default ({ onClick, label, styles = [] }) => {
    const buttonStyle = [mainStyles.button];
    styles.map((style) => {
        buttonStyle.push(mainStyles[style]);
    });
    return (
        <TouchableHighlight onPress={onClick}>
            <Text style={buttonStyle}>{label}</Text>
        </TouchableHighlight>
    );
}

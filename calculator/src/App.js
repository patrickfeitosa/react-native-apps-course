import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Components
import Button from './Components/Button.js';
import Display from './Components/Display.js';

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
    constructor(props) {
        super(props);

        this.state = {
            displayValue: '0',
        };

        this._createArrayButtons();
    }

    _createArrayButtons() {
        this.buttons = [
            { label: 'AC', key: `${Math.random()}`, handleClick: () => this.clearMemory, styles: ['buttonTriple'] },
            { label: '/', key: `${Math.random()}`, handleClick: (prop) => this.setOperation(prop), styles: ['operationButton'] },
            { label: '7', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '8', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '9', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '*', key: `${Math.random()}`, handleClick: (prop) => this.setOperation(prop), styles: ['operationButton'] },
            { label: '4', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '5', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '6', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '-', key: `${Math.random()}`, handleClick: (prop) => this.setOperation(prop), styles: ['operationButton'] },
            { label: '1', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '2', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '3', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '+', key: `${Math.random()}`, handleClick: (prop) => this.setOperation(prop), styles: ['operationButton'] },
            { label: '0', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop), styles: ['buttonDouble'] },
            { label: '.', key: `${Math.random()}`, handleClick: (prop) => this.addDigit(prop) },
            { label: '=', key: `${Math.random()}`, handleClick: (prop) => this.setOperation(prop), styles: ['operationButton'] },
        ];
    }


    addDigit(number) {
        if (this.state.displayValue === '0') {
            if (number === '.') {
                this.setState({ displayValue: `0${number}` });
            } else {
                this.setState({ displayValue: `${number}` });
            }
        } else if (this.state.displayValue.indexOf('.') > 0 && number !== '.') {
            this.setState({ displayValue: `${this.state.displayValue}${number}` });
        }
    };

    clearMemory() {
        this.setState({ displayValue: '0' });
    };

    setOperation(operation) {

    };

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    {this.buttons.map(({ label, key, handleClick, styles }) => (
                        <Button label={label} key={key} onClick={() => handleClick(label)} styles={styles} />
                    ))}
                </View >
            </View>
        )
    };
};



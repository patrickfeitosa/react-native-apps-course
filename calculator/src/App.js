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
        this.initialState = {
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }

        this.state = { ...this.initialState };

        this._createArrayButtons();
    }

    _createArrayButtons() {
        this.buttons = [
            { label: 'AC', key: `${Math.random()}`, handleClick: () => this.clearMemory(), styles: ['buttonTriple'] },
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
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

        if (number === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
            return;
        }

        const currentValue = clearDisplay ? '' : this.state.displayValue;
        const displayValue = currentValue + number;

        this.setState({ displayValue, clearDisplay: false });

        if (number !== '.') {
            const newValue = parseFloat(displayValue);
            const values = [...this.state.values];
            values[this.state.current] = newValue;
            this.setState({ values });
        }
    };

    clearMemory() {
        this.setState({ ...this.initialState });
    };

    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1 });
        } else {
            const equals = operation === '=';
            const values = [...this.state.values];
            this.setState({ displayValue: `${values[0]}${values[1]}` })
            try {
                values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
            } catch (err) {
                values[0] = this.state.values[0];
            }

            values[1] = 0;
            this.setState({
                displayValue: `${values[0]}`,
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                values,
            });
        };
        this.setState({ clearDisplay: true, });
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



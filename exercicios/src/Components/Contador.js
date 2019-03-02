import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 100,
        };
        
        this._bindEvents();
    }


    _bindEvents() {
        this.maisUm = this.maisUm.bind(this);
        this.limpar = this.limpar.bind(this);
    };

    maisUm() {
        this.setState({ counter: this.state.counter + 1 });
    };

    limpar() {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <View>
                <Text style={{ fontSize: 40 }}>{this.state.counter}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={this.limpar}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        );
    };
};

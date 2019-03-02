import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from './../Style/MainStyle.js';

export default class Evento extends Component {
    constructor(props) {
        super(props);

        this.state = { texto: '' };
        this._bindEvents();
    }

    _bindEvents() {
        this.alterarTexto = this.alterarTexto.bind(this);
    }

    alterarTexto(texto) {
        this.setState({ texto });
    }

    render() {
        return (
            <View>
                <Text style={Padrao.font40}>
                    {this.state.texto}
                </Text>
                <TextInput value={this.state.texto} style={Padrao.input} onChangeText={this.alterarTexto} />
            </View>
        )
    }
}
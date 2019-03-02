import React from 'react';
import { Text } from 'react-native';
import Padrao from './../Style/MainStyle.js';

export const Inverter = ({ texto }) => {
    const inv = texto.split('').reverse().join('');
    return <Text style={Padrao.ex}>{inv}</Text>;
};

export const MegaSena = ({ tamanho = 6 }) => {
    const [min, max] = [1, 60];
    let numeros = Array(tamanho).fill(0);

    numeros = numeros.map((numero) => {
        let novo = 0;
        while (numeros.includes(novo)) {
            novo = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        return novo;
    });

    numeros.sort((a, b) => a - b);
    return <Text style={Padrao.ex}>{numeros.join(', ')}</Text>
};

export default Inverter;
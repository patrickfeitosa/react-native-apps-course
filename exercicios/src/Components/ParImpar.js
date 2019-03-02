import React from 'react';
import { View, Text } from 'react-native';

import Padrao from './../Style/MainStyle.js';

const parOuImpar = (numero) => {
    const v = numero % 2 == 0 ? 'Par !!' : 'Impar !!!'
    return (
        <Text style={Padrao.ex}>{v}</Text>
    );
};

export default ({ numero }) => (
    <View>
        {
            // numero % 2 == 0
            //     ? <Text style={Padrao.ex}>Par!!!</Text>
            //     : <Text style={Padrao.ex}>Impar!!!</Text>
            parOuImpar(numero)
        }
    </View>
);

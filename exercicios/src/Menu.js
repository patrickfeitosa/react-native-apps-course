import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

/* Components */
import Simples from './Components/Simples.js';
import ParImpar from './Components/ParImpar.js';
import { Inverter, MegaSena } from './Components/Multi.js';
import Contador from './Components/Contador.js';
import ValidarProps from './Components/ValidarProps.js';

export default createDrawerNavigator({
    ValidarProps: {
        screen: () => <ValidarProps ano={19} />,
        navigationOptions: {
            title: 'Validar Propriedades',
        }
    },
    Contador: {
        screen: () => <Contador contador={8} />,
    },
    MegaSena: {
        screen: () => <MegaSena tamanho={8} />,
        navigationOptions: {
            title: 'Mega Sena',
        },
    },
    Inverter: {
        screen: () => <Inverter texto='React Native!' />,
    },
    ParImpar: {
        screen: () => <ParImpar numero={30} />,
        navigationOptions: {
            title: 'Par & Ímpar',
        },
    },
    Simples: {
        screen: () => <Simples textInside='Primeiro componente' />
    },
}, { drawerWidth: 300 });
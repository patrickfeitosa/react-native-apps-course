import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

/* Components */
import Simples from './Components/Simples.js';
import ParImpar from './Components/ParImpar.js';
import { Inverter, MegaSena } from './Components/Multi.js';

export default createDrawerNavigator({
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
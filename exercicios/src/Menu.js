import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

/* Components */
import Simples from './Components/Simples.js';
import ParImpar from './Components/ParImpar.js';
import { Inverter, MegaSena } from './Components/Multi.js';
import Contador from './Components/Contador.js';
import ValidarProps from './Components/ValidarProps.js';
import Evento from './Components/Evento.js';
import { Avo } from './Components/ComunicacaoDireta.js';
import AlunosFlex from './Components/AlunosFlex.js';
import Flex from './Components/Flex.js';

export default createDrawerNavigator({
    Flex: {
        screen: Flex,
    },
    AlunosFlex: {
        screen: AlunosFlex,
        navigationOptions: { title: 'Lista Flex' },
    },
    Avo: {
        screen: () => <Avo nome='João' sobrenome='Silva' />
    },
    Evento: {
        screen: () => <Evento />
    },
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
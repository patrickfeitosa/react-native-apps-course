import React from 'react';
import { View, Text } from 'react-native';

const fonte = { style: { fontSize: 30 } };

export const Filho = ({ nome, sobrenome }) => (
    <View>
        <Text {...fonte}>Filho: {nome} {sobrenome}</Text>
    </View>
);

export const Pai = ({ nome, sobrenome, children }) => (
    <View>
        <Text {...fonte}>Pai: {nome} {sobrenome}</Text>
        {React.Children.map(children, c => React.cloneElement(c, { sobrenome, ...c.props }))}
    </View>
)

export const Avo = ({ nome, sobrenome }) => (
    <View>
        <Text {...fonte}>Avô: {nome} {sobrenome}</Text>
        <Pai nome='André' sobrenome={sobrenome}>
            <Filho nome='Ana' />
            <Filho nome='Gui' />
            <Filho nome='Davi' />
        </Pai>
        <Pai nome='Pedro' sobrenome={sobrenome}>
            <Filho nome='Rebeca' />
            <Filho nome='Renato' />
        </Pai>
    </View>
)

import React from 'react';
import { Text } from 'react-native';

import Padrao from './../Style/MainStyle.js';

export default ({ textInside }) => (
    <Text style={Padrao.ex}>{textInside}</Text>
);

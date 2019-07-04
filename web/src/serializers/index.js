import React from 'react';
import { Text } from '../components/Text';

const serializers = {
  types: {
    block: props => <Text>{props.children}</Text>
  }
};

export default serializers;

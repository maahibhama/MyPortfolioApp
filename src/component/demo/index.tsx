import React from 'react';
import {View} from 'react-native';

type Props = {
  value: string;
};

const Demo = (props: Props) => {
  return <View>index {props.value}</View>;
};

export default Demo;

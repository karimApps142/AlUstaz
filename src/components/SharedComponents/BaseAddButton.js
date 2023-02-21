import React from 'react';
import {View, Text} from 'react-native';
import icons from '../../constants/icons';
import {RoundButton} from './RoundButton';

export const BaseAddButton = ({onPress}) => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 50,
        padding: 5,
        left: 20,
      }}>
      <RoundButton onPress={onPress} icon={icons.plus} size={50} />
    </View>
  );
};

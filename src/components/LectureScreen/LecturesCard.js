import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';

export const LecturesCard = ({icon, onPress, title, time}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={{
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        padding: 10,
        borderColor: COLORS.lightGray,
        borderWidth: 1,
        backgroundColor: COLORS.white,
        margin: 8,
        marginHorizontal: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
      }}>
      <View
        style={{
          height: 50,
          width: 50,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
        }}>
        <BaseIcon icon={icon} color={COLORS.white} size={25} />
      </View>
      <Text
        numberOfLines={2}
        style={{
          width: '60%',
          color: COLORS.black,
          ...FONTS.h2,
          marginLeft: 10,
        }}>
        {title}
      </Text>

      <Text
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          color: COLORS.gray,
          ...FONTS.body5,
        }}>
        {time}
      </Text>
    </TouchableOpacity>
  );
};

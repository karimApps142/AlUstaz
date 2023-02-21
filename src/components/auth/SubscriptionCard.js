import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import icons from '../../constants/icons';
import {COLORS, FONTS} from '../../constants/theme';
import {BaseIcon} from '../../components';

export const SubscriptionCard = ({
  onPress,
  title = 'title',
  subTitle = 'subtitle',
  otherStyles,
  status,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        {
          alignItems: 'center',
          justifyContent: 'space-between',
          flexDirection: 'row',
          padding: 15,
          marginHorizontal: 15,
          marginVertical: 10,
          borderRadius: 15,
          backgroundColor: status ? COLORS.primary : COLORS.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
        },
        otherStyles,
      ]}>
      <View>
        <Text
          style={{color: status ? COLORS.white : COLORS.black, ...FONTS.h2}}>
          {title}
        </Text>
        <Text
          style={{color: status ? COLORS.white : COLORS.gray, ...FONTS.body4}}>
          {subTitle}
        </Text>
      </View>

      <BaseIcon
        icon={icons.left_arrow}
        color={status ? COLORS.white : COLORS.black}
        size={22}
      />
    </TouchableOpacity>
  );
};

import React from 'react';
import {Pressable, View} from 'react-native';
import {COLORS} from '../../constants/theme';
import {BaseIcon} from './BaseIcon';

export const RoundButton = ({
  size = 50,
  icon,
  loading = false,
  color,
  onPress,
  otherStyles,
  iconStyle,
  iconSize = size / 2,
  orgColor,
}) => (
  <View
    style={[
      {
        height: size,
        width: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: loading ? COLORS.gray : COLORS.primary,
        overflow: 'hidden',
      },
      otherStyles,
    ]}>
    <Pressable
      android_ripple={{color: 'rgba(255,255,255,0.3)'}}
      disabled={loading}
      onPress={onPress}
      style={[
        {
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: size / 2,
        },
      ]}>
      <BaseIcon
        icon={icon}
        size={iconSize}
        color={color ? color : orgColor ? true : COLORS.white}
        otherStyles={iconStyle}
      />
    </Pressable>
  </View>
);

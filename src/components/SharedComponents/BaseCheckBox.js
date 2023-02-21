import React from 'react';
import {TouchableOpacity} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {COLORS} from '../../constants/theme';

export const BaseCheckBox = ({
  isChecked,
  setIsChecked = () => {},
  onValueChanged = () => {},
  title,
  ...otherProps
}) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        zIndex: 10,
      }}>
      <BouncyCheckbox
        onPress={() => {
          setIsChecked(!isChecked);
          onValueChanged(!isChecked);
        }}
        size={20}
        fillColor={COLORS.primary}
        text={title}
        textStyle={{
          textDecorationLine: 'none',
          color: COLORS.black,
        }}
        iconStyle={{
          borderRadius: 5,
        }}
        isChecked={isChecked}
        {...otherProps}
      />
    </TouchableOpacity>
  );
};

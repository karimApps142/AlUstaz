import React from 'react';
import {View, Text, Image} from 'react-native';
import {COLORS, FONTS} from '../../constants/theme';
import dummyImages from '../../dummyData';
import {BaseCheckBox} from '../SharedComponents/BaseCheckBox';

export const TagPeopleCard = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: COLORS.gray,
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
      }}>
      {/* Profile Image */}
      <View
        style={{
          height: 45,
          width: 45,
          borderRadius: 25,
          padding: 2,
          backgroundColor: COLORS.primary,
        }}>
        <Image
          style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          source={dummyImages.profile}
        />
      </View>
      <Text style={{color: COLORS.black, marginLeft: 10, ...FONTS.h2, flex: 1}}>
        أحمد
      </Text>

      <BaseCheckBox />
    </View>
  );
};

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constants/theme';

export const OnboardingItems = ({item}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={item.image} />
      <View style={styles.botttomContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SIZES.width,
    alignContent: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.7,
    resizeMode: 'contain',
    width: SIZES.width,
    justifyContent: 'center',
  },
  botttomContainer: {flex: 0.3},
  title: {
    ...FONTS.h2,
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    ...FONTS.body4,
    color: COLORS.gray,
    textAlign: 'center',
    paddingHorizontal: 64,
  },
});

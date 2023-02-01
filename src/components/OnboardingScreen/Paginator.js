import React from 'react';
import {Animated, StyleSheet, View} from 'react-native';
import {COLORS, SIZES} from '../../constants/theme';

export const Paginator = ({data, scrollX}) => {
  return (
    <View style={{flexDirection: 'row-reverse', height: 64}}>
      {data.map((_, i) => {
        const inputRange = [
          (i - 1) * SIZES.width,
          i * SIZES.width,
          (i + 1) * SIZES.width,
        ];

        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
          extrapolate: 'clamp',
        });

        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
    marginHorizontal: 8,
  },
});

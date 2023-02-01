/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, TouchableOpacity, View} from 'react-native';
import Svg, {G, Circle} from 'react-native-svg';
import icons from '../../constants/icons';
import {COLORS} from '../../constants/theme';
import {BaseIcon} from '../SharedComponents/BaseIcon';

export const NextButton = ({percentage, scrollTo}) => {
  const size = 128;
  const strokWidth = 2;
  const center = size / 2;
  const radius = size / 2 - strokWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressAnimation = useRef(new Animated.Value(0)).current;
  const progressRef = useRef(null);

  const animation = toValue => {
    return Animated.timing(progressAnimation, {
      toValue,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);
  }, [percentage]);

  useEffect(() => {
    progressAnimation.addListener(
      value => {
        const strokeDashoffset =
          circumference - (circumference * value.value) / 100;
        if (progressRef?.current) {
          progressRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [percentage],
    );
    return () => {
      progressAnimation.removeAllListeners();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Svg width={size} height={size} fill={COLORS.white}>
        <G rotation={-90} origin={center}>
          <Circle
            stroke={COLORS.lightGray}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
          />
          <Circle
            ref={progressRef}
            stroke={COLORS.primary}
            cx={center}
            cy={center}
            r={radius}
            strokeWidth={strokWidth}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <TouchableOpacity
        onPress={scrollTo}
        activeOpacity={0.8}
        style={styles.button}>
        <BaseIcon icon={icons.rightArrow} color={COLORS.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    backgroundColor: COLORS.primary,
    borderRadius: 100,
    padding: 20,
  },
});

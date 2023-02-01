import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const LectureDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>LectureDetailsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 30, fontWeight: 'bold'},
});

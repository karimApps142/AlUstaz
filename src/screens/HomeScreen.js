import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AudioPlayer, AudioRecorder} from '../components';
import useRequestPermissions from '../hooks/useRequestPermissions';

export const HomeScreen = () => {
  const [audioUri, setAudioUri] = useState();
  useRequestPermissions();

  const handleResult = result => {
    setAudioUri(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>
      <AudioPlayer audioUri={audioUri} />
      <AudioRecorder onResult={handleResult} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  title: {fontSize: 30, fontWeight: 'bold'},
});

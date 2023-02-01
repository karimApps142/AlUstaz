import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from 'react-native-audio-recorder-player';
import {useDispatch, useSelector} from 'react-redux';
import {setIsRecording, setRecordSecs, setRecordTime} from '../../store/state';
import helpers from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3F51B5',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

const audioRecorderPlayer = new AudioRecorderPlayer();

export const AudioRecorder = ({onResult}) => {
  const dispatch = useDispatch();
  const {isRecording} = useSelector(state => state.app);

  const onStartRecord = async () => {
    const path = helpers.generateRandomMp3Path(15);
    const audioSet = {
      AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
      AudioSourceAndroid: AudioSourceAndroidType.MIC,
      AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
      AVNumberOfChannelsKeyIOS: 2,
      AVFormatIDKeyIOS: AVEncodingOption.aac,
      OutputFormatAndroid: OutputFormatAndroidType.AAC_ADTS,
    };
    dispatch(setIsRecording(true));
    await audioRecorderPlayer.startRecorder(path, audioSet);
    audioRecorderPlayer.addRecordBackListener(e => {
      dispatch(setRecordSecs(e.currentPosition));
      dispatch(
        setRecordTime(
          audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
        ),
      );
    });
  };

  const onResumeRecord = async () => {
    await audioRecorderPlayer.resumeRecorder();
  };

  const onStopRecord = async () => {
    const result = await audioRecorderPlayer.stopRecorder();
    audioRecorderPlayer.removeRecordBackListener();
    dispatch(setRecordSecs(0));
    onResult(result);
    dispatch(setIsRecording(false));
  };

  const onPauseRecord = async () => {
    try {
      const r = await audioRecorderPlayer.pauseRecorder();
      console.log(r);
    } catch (err) {
      console.log('pauseRecord', err);
    }
  };

  return (
    <View style={styles.container}>
      {isRecording ? (
        <TouchableOpacity style={styles.button} onPress={onStopRecord}>
          <Text style={styles.buttonText}>Stop Record</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={onStartRecord}>
          <Text style={styles.buttonText}>Start Record</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.button} onPress={onResumeRecord}>
        <Text style={styles.buttonText}>Resume Record</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPauseRecord}>
        <Text style={styles.buttonText}>Pause Record</Text>
      </TouchableOpacity>
    </View>
  );
};

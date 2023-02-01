import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import {
  setCurrentDurationSec,
  setCurrentPositionSec,
  setDuration,
  setPlaying,
  setPlayTime,
} from '../../store/state';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const AudioPlayer = ({audioUri}) => {
  const dispatch = useDispatch();
  const {playing} = useSelector(state => state.app);

  const onStartPlay = async () => {
    if (!audioUri) {
      return;
    }
    try {
      await audioRecorderPlayer.startPlayer(audioUri);
      await audioRecorderPlayer.setVolume(1.0);
      audioRecorderPlayer.addPlayBackListener(e => {
        dispatch(setCurrentPositionSec(e.currentPosition));
        dispatch(
          setPlayTime(
            audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)),
          ),
        );
        dispatch(setDuration(e.duration));
        dispatch(
          setCurrentDurationSec(
            audioRecorderPlayer.mmssss(Math.floor(e.duration)),
          ),
        );

        if (e.duration === e.currentPosition) {
          onStopPlay();
        }
      });
      dispatch(setPlaying(true));
    } catch (err) {
      console.log('startPlayer error', err);
    }
  };

  const onPausePlay = async () => {
    await audioRecorderPlayer.pausePlayer();
    dispatch(setPlaying(false));
  };

  const onResumePlay = async () => {
    await audioRecorderPlayer.resumePlayer();
  };

  const onStopPlay = async () => {
    audioRecorderPlayer.stopPlayer();
    audioRecorderPlayer.removePlayBackListener();
    dispatch(setPlaying(false));
  };

  return (
    <View>
      {playing ? (
        <TouchableOpacity onPress={onPausePlay}>
          <Text>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onStartPlay}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

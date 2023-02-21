import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import AudioRecorderPlayer from 'react-native-audio-recorder-player';
import Slider from '@react-native-community/slider';
import TrackPlayer from 'react-native-track-player';
import {BaseIcon} from '../SharedComponents/BaseIcon';
import icons from '../../constants/icons';

import {
  setCurrentDurationSec,
  setCurrentPositionSec,
  setDuration,
  setPlaying,
  setPlayTime,
} from '../../store/state';
import {COLORS} from '../../constants/theme';
import {RoundButton} from '../SharedComponents/RoundButton';

const audioRecorderPlayer = new AudioRecorderPlayer();

export const AudioPlayer = ({audioUri}) => {
  const dispatch = useDispatch();
  const {playing} = useSelector(state => state.app);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const handlePlayPause = async () => {
    if (isPlaying) {
      await TrackPlayer.pause();
    } else {
      await TrackPlayer.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSliderValueChange = async value => {
    await TrackPlayer.seekTo(value);
    setCurrentPosition(value);
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    const setupPlayer = async () => {
      TrackPlayer.registerPlaybackService(() => require('./services'));
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
        id: 'trackId',
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        title: 'Audio Track',
        artist: 'Artist',
      });
      const duration = await TrackPlayer.getDuration();
      setTotalDuration(duration);
      setIsPlayerReady(true);
    };
    if (!isPlayerReady) {
      setupPlayer();
    }
  }, [isPlayerReady]);

  useEffect(() => {
    const updatePosition = setInterval(async () => {
      const position = await TrackPlayer.getPosition();
      setCurrentPosition(position);
    }, 1000);
    return () => clearInterval(updatePosition);
  }, []);

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
    <View
      style={{
        backgroundColor: COLORS.white,
        padding: 15,
        borderRadius: 10,
        borderWidth: 0.5,
        borderColor: COLORS.lightGray,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        left: 15,
        right: 15,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
      }}>
      {/* {playing ? (
        <TouchableOpacity onPress={onPausePlay}>
          <Text>Pause</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={onStartPlay}>
          <Text>Play</Text>
        </TouchableOpacity>
      )}
     */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <RoundButton
          onPress={handlePlayPause}
          size={50}
          icon={isPlaying ? icons.pause : icons.play_button}
        />
        {/* <TouchableOpacity onPress={handlePlayPause}>
          <BaseIcon size={45} color={COLORS.primary} />
        </TouchableOpacity> */}
      </View>
      <View style={{flex: 1, padding: 5}}>
        <Slider
          style={{width: '100%'}}
          minimumValue={0}
          maximumValue={totalDuration}
          value={currentPosition}
          minimumTrackTintColor={COLORS.primary}
          maximumTrackTintColor={COLORS.gray}
          thumbTintColor={COLORS.primary}
          // thumbImage={icons.thumb}
          // trackImage={icons.bell}
          onSlidingComplete={handleSliderValueChange}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
          }}>
          <Text style={{color: COLORS.black}}>
            {formatTime(currentPosition)}
          </Text>
          <Text style={{color: COLORS.black}}>{formatTime(totalDuration)}</Text>
        </View>
      </View>
    </View>
  );
};

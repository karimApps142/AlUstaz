import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  playing: false,
  currentPositionSec: 0,
  playTime: '00:00:00',
  duration: 0,
  currentDurationSec: '00:00:00',
  isRecording: false,
  recordSecs: 0,
  recordTime: '00:00:00',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoading: (state, {payload}) => {
      state.loading = payload;
    },
    setPlaying: (state, {payload}) => {
      state.playing = payload;
    },
    setCurrentPositionSec: (state, {payload}) => {
      state.currentPositionSec = payload;
    },
    setPlayTime: (state, {payload}) => {
      state.playTime = payload;
    },
    setCurrentDurationSec: (state, {payload}) => {
      state.currentDurationSec = payload;
    },
    setDuration: (state, {payload}) => {
      state.duration = payload;
    },
    setIsRecording: (state, {payload}) => {
      state.isRecording = payload;
    },
    setRecordSecs: (state, {payload}) => {
      state.recordSecs = payload;
    },
    setRecordTime: (state, {payload}) => {
      state.recordTime = payload;
    },
  },
});

export const {
  setLoading,
  setPlaying,
  setCurrentPositionSec,
  setPlayTime,
  setCurrentDurationSec,
  setDuration,
  setIsRecording,
  setRecordSecs,
  setRecordTime,
} = appSlice.actions;

export default appSlice.reducer;

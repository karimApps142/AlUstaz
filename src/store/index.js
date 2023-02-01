import {configureStore} from '@reduxjs/toolkit';
import app from './state';

export const store = configureStore({
  reducer: {
    app,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

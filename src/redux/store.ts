import { configureStore } from '@reduxjs/toolkit';
import sharedSlice from './slice/sharedSlice';


export const store = configureStore({
  reducer: {
    shared: sharedSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
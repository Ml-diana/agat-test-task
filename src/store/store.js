import {configureStore} from '@reduxjs/toolkit';
import shapesReducer from './reducer';

export const store = configureStore({
  reducer: shapesReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
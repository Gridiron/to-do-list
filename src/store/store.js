import { configureStore } from '@reduxjs/toolkit';
import listReducer from './slices/listSlice';

const rootReducer = {
  listReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

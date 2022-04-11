import { configureStore } from '@reduxjs/toolkit';
import FieldItems from '../reducers/FieldItems';
import Game from '../reducers/Game';

export const store = configureStore({
  reducer: {
    FieldItems,
    Game
  },

  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_EW !== 'production',   
});

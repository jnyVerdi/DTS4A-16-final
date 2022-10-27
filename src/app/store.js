import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import tmdbReducer from '../reducers/tmdbSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    tmdb: tmdbReducer,
  },
});

export default store;

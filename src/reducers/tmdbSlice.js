import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const trendingAsync = createAsyncThunk(
  'tmdb/fetch_trending',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    return axiosData;
  }
);

export const discoverMovieAsync = createAsyncThunk(
  'tmdb/fetch_discover_movie',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    console.log(axiosData);
    return axiosData;
  }
);

export const discoverTvAsync = createAsyncThunk(
  'tmdb/fetch_discover_tv',
  async () => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );

    return axiosData;
  }
);

export const searchAsync = createAsyncThunk(
  'tmdb/fetch_search',
  async (query) => {
    const { data: axiosData } = await axios.get(
      `${process.env.REACT_APP_TMDB_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
    );
    return axiosData;
  }
);

const initialState = { trending: '', movie: '', tv: '', search: '' };

const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(trendingAsync.fulfilled, (state, action) => {
      state.trending = action.payload;
    });
    builder.addCase(discoverMovieAsync.fulfilled, (state, action) => {
      state.movie = action.payload;
    });
    builder.addCase(discoverTvAsync.fulfilled, (state, action) => {
      state.tv = action.payload;
    });
    builder.addCase(searchAsync.fulfilled, (state, action) => {
      state.search = action.payload;
    });
  },
});

export const selectTrending = (state) => state.tmdb.trending;
export const selectMovie = (state) => state.tmdb.movie;
export const selectTv = (state) => state.tmdb.tv;
export const selectSearch = (state) => state.tmdb.search;

export default tmdbSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getTrendingAsync = createAsyncThunk(
  'tmdb/fetch_trending',
  async () => {
    try {
      const { data: axiosData } = await axios.get(
        `${process.env.REACT_APP_TMDB_BASE_URL}/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return { trending: axiosData.results };
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  }
);

export const getDiscoverMovieAsync = createAsyncThunk(
  'tmdb/fetch_discover_movie',
  async () => {
    try {
      const { data: axiosData } = await axios(
        `${process.env.REACT_APP_TMDB_BASE_URL}/discover/movie?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return { movie: axiosData.results };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getDiscoverTvAsync = createAsyncThunk(
  'tmdb/fetch_discover_tv',
  async () => {
    try {
      const { data: axiosData } = await axios(
        `${process.env.REACT_APP_TMDB_BASE_URL}/discover/tv?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
      );
      return { tv: axiosData.results };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getSearchAsync = createAsyncThunk(
  'tmdb/fetch_search',
  async (query) => {
    try {
      const { data: axiosData } = await axios(
        `${process.env.REACT_APP_TMDB_BASE_URL}/search/multi?api_key=${process.env.REACT_APP_TMDB_API_KEY}&query=${query}`
      );
      return { search: axiosData.results };
    } catch (error) {
      throw new Error(error);
    }
  }
);

export const getGenreAsync = createAsyncThunk('tmdb/fetch_genre', async () => {
  try {
    const { data: axiosData } = await axios(
      `${process.env.REACT_APP_TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`
    );
    return { genre: axiosData.results };
  } catch (error) {
    throw new Error(error);
  }
});

const initialState = {
  trending: [],
  movie: [],
  tv: [],
  search: [],
  error: {},
};

const tmdbSlice = createSlice({
  name: 'tmdb',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingAsync.rejected, (state, { error }) => {
        state.error.trending = [...error];
      })
      .addCase(getTrendingAsync.fulfilled, (state, action) => {
        state.trending = action.payload.trending;
      })
      .addCase(getDiscoverMovieAsync.rejected, (state, { error }) => {
        state.error.movie = [...error];
      })
      .addCase(getDiscoverMovieAsync.fulfilled, (state, action) => {
        state.movie = action.payload.movie;
      })
      .addCase(getDiscoverTvAsync.rejected, (state, { error }) => {
        state.error.tv = [...error];
      })
      .addCase(getDiscoverTvAsync.fulfilled, (state, action) => {
        state.tv = action.payload.tv;
      })
      .addCase(getSearchAsync.rejected, (state, { error }) => {
        state.error.search = [...error];
      })
      .addCase(getSearchAsync.fulfilled, (state, action) => {
        state.search = action.payload.search;
      })
      .addCase(getGenreAsync.rejected, (state, { error }) => {
        state.error.genre = [...error];
      })
      .addCase(getGenreAsync.fulfilled, (state, action) => {
        state.genre = action.payload.genre;
      });
  },
});

export const selectTrending = (state) => state.tmdb.trending;
export const selectMovie = (state) => state.tmdb.movie;
export const selectTv = (state) => state.tmdb.tv;
export const selectSearch = (state) => state.tmdb.search;
export const selectGenre = (state) => state.tmdb.genre;

export default tmdbSlice.reducer;

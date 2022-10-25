import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_TMDB_BASE_URL,
  }),
  tagTypes: ['trending', 'discover'],
  endpoints: (builder) => ({
    getTrendingAllDay: builder.query({
      query: () =>
        `/trending/all/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    }),
    getDiscoverLatestByMediaType: builder.query({
      query: (mediaType) =>
        `/discover/${mediaType}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&sort_by=release_date.desc`,
    }),
    getSearchByKeyword: builder.query({
      query: (keyword) =>
        `/search/${keyword}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`,
    }),
  }),
});

export default tmdbApi;

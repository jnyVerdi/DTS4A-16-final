import React from 'react';
import { Box, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import TrendingList from '../components/TrendingList';
import {
  selectMovie,
  selectTv,
  getDiscoverMovieAsync,
  getDiscoverTvAsync,
} from '../reducers/tmdbSlice';
import { useDispatch, useSelector } from 'react-redux';

function Home() {
  const dispatch = useDispatch();

  dispatch(getDiscoverMovieAsync());
  dispatch(getDiscoverTvAsync());

  const movie = useSelector(selectMovie);
  const tv = useSelector(selectTv);
  console.log(window.location.pathname);

  return (
    <Box>
      <Navbar />
      <Stack
        direction='column'
        justifyContent='flex-start'
        alignItems='flex-start'
        spacing={2}
      >
        {/* Trending List */}
        <TrendingList />

        {/* Discover List and Genre option */}
      </Stack>
    </Box>
  );
}

export default Home;

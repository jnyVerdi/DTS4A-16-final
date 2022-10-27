import React from 'react';
import './TrendingCard.css';
import { Grid, Typography } from '@mui/material';
import TrendingCard from './TrendingCard';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingAsync, selectTrending } from '../reducers/tmdbSlice';

function TrendingList({ item }) {
  const dispatch = useDispatch();
  dispatch(getTrendingAsync());
  const trending = useSelector(selectTrending);

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant='h6' gutterBottom>
            🔥 Trending Today
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          className='trending-card-container'
          sx={{ display: 'flex', flexDirection: 'row' }}
        >
          {trending.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
        </Grid>
      </Grid>
    </>
  );
}

export default TrendingList;

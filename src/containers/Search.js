import { Box, Divider, Grid, List, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import DiscoverCard from '../components/DiscoverCard';
import Navbar from '../components/Navbar';
import { searchAsync, selectSearch } from '../reducers/tmdbSlice';

function Search() {
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchAsync(params?.query));
  }, []);

  const search = useSelector(selectSearch);

  return (
    <Box>
      <Navbar />
      <Box className='discover-all-box'>
        <Grid container spacing={0}>
          <Grid item xs={9}>
            <Box className='discover-box'>
              <Grid item xs={7} className='discover-title'>
                <Typography variant='h6' gutterBottom>
                  Search
                </Typography>
              </Grid>
            </Box>
            <Box className='search-list-box'>
              {search.results.slice(0, 15).map((item) => (
                <DiscoverCard key={item.id} item={item} />
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Search;

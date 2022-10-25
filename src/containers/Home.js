import React from 'react';
import './Home.css';
import genreData from '../data/genre.json';
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import Navbar from '../components/Navbar';
import TrendingCard from '../components/TrendingCard';
import trending_list from '../data/trendinglist.json';
import LatestCard from '../components/DiscoverCard';

function Home() {
  return (
    <Box>
      <Navbar />
      <Box className='trending-container'>
        <Grid container spacing={0} className='trending-title-box'>
          <Grid item xs={2}></Grid>
          <Grid item xs={8} className='trending-title-box'>
            <Typography variant='h6' gutterBottom>
              🔥 Trending Today
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <nav aria-label='secondary mailbox folders' className='see-more'>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText primary='See more' />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Grid>
        </Grid>
        <Box className='trending-list-box'>
          {trending_list.results.slice(0, 9).map((item) => (
            <TrendingCard item={item} />
          ))}
        </Box>
      </Box>
      <Box className='discover-all-box'>
        <Grid container spacing={0}>
          <Grid item xs={9}>
            <Box className='discover-box'>
              <Grid item xs={7} className='discover-title'>
                <Typography variant='h6' gutterBottom>
                  Discover Latest Movies
                </Typography>
              </Grid>
              <Grid item xs={2} className='discover-see-more'>
                <nav
                  aria-label='secondary mailbox folders'
                  className='see-more'
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary='See more' />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
            </Box>
            <Box className='discover-list-box'>
              {trending_list.results.slice(0, 15).map((item) => (
                <LatestCard item={item} />
              ))}
            </Box>
            <Box className='discover-box'>
              <Grid item xs={7} className='discover-title'>
                <Typography variant='h6' gutterBottom>
                  Discover Latest TV Shows
                </Typography>
              </Grid>
              <Grid item xs={2} className='discover-see-more'>
                <nav
                  aria-label='secondary mailbox folders'
                  className='see-more'
                >
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary='See more' />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              </Grid>
            </Box>
            <Box className='discover-list-box'>
              {trending_list.results.slice(0, 15).map((item) => (
                <LatestCard item={item} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={3} className='genre-box'>
            <Grid item xs={3}>
              <Typography variant='h6' gutterBottom>
                Genre
              </Typography>
            </Grid>
            <Divider />
            <Box className='item-genre-box'>
              {genreData.map((genre) => (
                <nav aria-label='secondary mailbox folders'>
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton>
                        <ListItemText primary={genre.name} />
                      </ListItemButton>
                    </ListItem>
                  </List>
                </nav>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default Home;

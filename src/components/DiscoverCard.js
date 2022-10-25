import React from 'react';
import './DiscoverCard.css';
import { Box, Button, Card, CardActionArea, Typography } from '@mui/material';

function LatestCard({ item }) {
  return (
    <Card className='discover-card-container'>
      <CardActionArea title={item.name ? item.name : item.title}>
        <Box
          className='discover-media'
          style={{
            backgroundImage: `url('${process.env.REACT_APP_TMDB_BASE_IMAGE_URL}/w185${item.poster_path}')`,
          }}
        >
          <Box className='typography-box'>
            <Typography
              variant='subtitle1'
              gutterBottom
              className='typography-title'
            >
              {item.name ? item.name : item.title}
            </Typography>
            <Box className='typography-rating-year'>
              <Typography
                variant='button'
                size='small'
                className='typography-rating'
              >
                {`${item.vote_average}`.slice(0, 3)}
              </Typography>
              <Typography variant='button' gutterBottom>
                {item.release_date
                  ? new Date(item.release_date).getFullYear()
                  : new Date(item.first_air_date).getFullYear()}
              </Typography>
            </Box>
          </Box>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default LatestCard;

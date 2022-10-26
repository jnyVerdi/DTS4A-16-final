import React from 'react';
import './TrendingCard.css';
import { Card, CardActionArea, CardMedia } from '@mui/material';

function TrendingCard({ item }) {
  return (
    <Card className='trending-card-container'>
      <CardActionArea className='trending-media'>
        <CardMedia
          component='img'
          height='195'
          image={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL}/w154${item.poster_path}`}
          title={item.name ? item.name : item.title}
          alt={item.name ? item.name : item.title}
        />
      </CardActionArea>
    </Card>
  );
}

export default TrendingCard;

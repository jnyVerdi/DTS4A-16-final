import React from 'react';
import './TrendingCard.css';
import { Card, CardMedia } from '@mui/material';

function TrendingCard({ item }) {
  return (
    <Card className='trending-card'>
      <CardMedia
        className='trending-img'
        sx={{ maxWidth: 135 }}
        component='img'
        image={`${process.env.REACT_APP_TMDB_BASE_IMAGE_URL}/w154${item.poster_path}`}
        title={item.title ? item.title : item.name}
        alt={item.title ? item.title : item.name}
      />
    </Card>
  );
}

export default TrendingCard;

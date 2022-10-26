import React from 'react';
import './Genre.css';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import genreData from '../data/genre.json';

function Genre() {
  return (
    <Box className='item-genre-box'>
      {genreData.map((genre) => (
        <nav aria-label='secondary mailbox folders' key={genre.id}>
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
  );
}

export default Genre;

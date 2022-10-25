import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  signInAsync,
  selectErrorSignIn,
  selectUserCredential,
  setErrorSign,
} from '../reducers/userSlice';

function SignIn() {
  const userCredential = useSelector(selectUserCredential);
  const errorSignIn = useSelector(selectErrorSignIn);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(setErrorSign());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (userCredential) {
      navigate('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userCredential]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(signInAsync({ email, password }));

    userCredential.email && navigate('/');
  };

  return (
    <Box>
      <Navbar />
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: '#1E293B' }}
              variant='filled'
              required
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              sx={{ backgroundColor: '#1E293B' }}
              variant='filled'
              required
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='new-password'
            />
          </Grid>
        </Grid>
        <Typography color='red'>{errorSignIn}</Typography>
        <Button
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
        >
          Sign in
        </Button>
        <Grid container justifyContent='center'>
          <Grid>
            Don't have an account? <br />
            <Button
              variant='contained'
              sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
            >
              <Link
                to='/sign_up'
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Sign up
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignIn;

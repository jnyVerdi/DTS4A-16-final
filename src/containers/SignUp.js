import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import {
  selectErrorSignUp,
  selectUserCredential,
  setErrorSign,
  signUpAsync,
} from '../reducers/userSlice';

function SignUp() {
  const userCredential = useSelector(selectUserCredential);
  const errorSignUp = useSelector(selectErrorSignUp);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');
    dispatch(signUpAsync({ email, password }));
  };

  const onSignUp = () => {
    if (!!userCredential) {
      navigate('/');
    }
  };

  return (
    <Box>
      <Navbar />
      <Typography component='h1' variant='h5'>
        Sign up
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
        <Typography color='red'>{errorSignUp}</Typography>
        <Button
          type='submit'
          variant='contained'
          sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
          onClick={onSignUp}
        >
          Sign Up
        </Button>
        <Grid container justifyContent='center'>
          <Grid>
            Already have an account? <br />
            <Button
              variant='contained'
              sx={{ mt: 3, mb: 2, backgroundColor: '#334155' }}
            >
              <Link
                to='/sign_in'
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                Sign in
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default SignUp;

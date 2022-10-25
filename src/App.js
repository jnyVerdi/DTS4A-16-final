import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Paper, ThemeProvider } from '@mui/material';
import theme from './themes/theme';
import { Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { authObserverAsync } from './reducers/userSlice';
import { useDispatch } from 'react-redux';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authObserverAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Paper className='container-main-background'>
        <Outlet />
        <Footer />
      </Paper>
    </ThemeProvider>
  );
}

export default App;

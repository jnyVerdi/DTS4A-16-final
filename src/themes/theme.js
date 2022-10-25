import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#0f172a',
    },
    secondary: {
      main: '#00aeff',
      light: '#7dd3fc',
    },
    error: {
      main: '#f44336',
    },
    warning: {
      main: '#ff9800',
    },
    background: {
      default: '#94a3b8',
      paper: '#0f172a',
    },
    text: {
      hint: '#38bdf8',
      primary: '#ffffff',
      secondary: '#cbd5e1',
      disabled: '#94a3b8',
    },
  },
});

export default theme;

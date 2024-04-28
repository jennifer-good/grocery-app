import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      main: '#386679',
    },
    secondary: {
      main: '#794c92',
    },
    background: {
      default: '#231e1e',
      paper: '#231e1e',
    },
    text: {
      primary: '#f1f4f5',
    },
    error: {
      main: '#d04c19',
    },
    warning: {
      main: '#a8830f',
    },
    info: {
      main: '#2394c7',
    },
  },
});


export default theme;
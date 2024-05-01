import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    //mode: 'dark',
    primary: {
      light: '#5F8493',
      main: '#386679',
      dark: '#274754',
    },
    secondary: {
      main: '#794c92',
      dark: '#543566',
    },
    background: {
      default: '#1e1b1b',
      paper: '#161414',
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
      dark: '#18678B',
    },
  },
});


export default theme;
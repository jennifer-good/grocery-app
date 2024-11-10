import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#b5e3cc',
      main: '#76c49d',
      dark: '#478164',
    },
    secondary: {
      main: '#deda89',
      dark: '#b0b418',
    },
    background: {
      default: '#181b1c',
      paper: '#232829',
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
    textField: {
      input: 'f1f4f5'
    }
  },
});


export default theme;
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b1f2f',
    },
    secondary: {
      main: '#2dbdf9',
      dark: '#0b5573'
    },
    error: {
      main: '#f2743a',
    },
  },
});

export default theme;

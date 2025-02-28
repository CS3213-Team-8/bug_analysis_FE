import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E2631', // background colour
    },
    secondary: {
      main: '#d32f2f', // Red
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default theme;

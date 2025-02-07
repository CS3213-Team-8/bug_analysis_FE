import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue
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

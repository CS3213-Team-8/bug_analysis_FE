import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E2631', // background colour
    },
    secondary: {
      main: '#4F378A', // Purple
    },
    text: {
      primary: '#F5F5F5', 
      secondary: '#BDC9DD', 
      disabled: '#546379'
    },
    background: {
      default: "#1E2631",
      light: "#242c37"
    }
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 16,
    h1: {
      fontFamily: ["Inter", "Montserrat", "sans-serif"].join(","),
      fontSize: 24,
    },
    h2: { // for website title i.e. BUGSNAPPER
      fontFamily: ["Monserrat", "Inter", "sans-serif"].join(","),
      fontSize: 18,
      fontWeight: 700
    },
    h3: {
      fontFamily: ["Inter", "sans-serif", "Montserrat"].join(","),
      fontSize: 18,
      fontWeight: 700
    },
    h4: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 500,
    },
    subtitle1: { 
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 14,
      color: "#BDC9DD"
    },
    
  },
});

export default theme;

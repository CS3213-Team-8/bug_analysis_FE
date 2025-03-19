import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Box, CssBaseline, Container, ThemeProvider } from '@mui/material';
import Visualization from './pages/Visualization';
import BugsList from './pages/BugsList';
import NavBar from './components/NavBar';
import theme from './theme';
import Dummy from './pages/Dummy';
import Category from './pages/Category';

function App() {
  return (
    <Router>
       <ThemeProvider theme={theme}>
       <CssBaseline /> 
        <NavBar />
      <Box sx={{ ml: 4 , mr: 4 , mb: 4}} height="100%">
        <Routes>
          <Route path="/" element={<Visualization />} />
          <Route path="/bugsList" element={<BugsList />} />
          <Route path="/dummy" element={<Dummy />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Box>
      </ThemeProvider>
    </Router>
   
  );
}

export default App;

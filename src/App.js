import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Container, ThemeProvider } from '@mui/material';
import Visualization from './pages/Visualization';
import BugsList from './pages/BugsList';
import NavBar from './components/NavBar';
import theme from './theme';

function App() {
  return (
    <Router>
       <ThemeProvider theme={theme}>
       <CssBaseline /> 
        <NavBar />

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Visualization />} />
          <Route path="/bugsList" element={<BugsList />} />
        </Routes>
      </Container>
      </ThemeProvider>
    </Router>
   
  );
}

export default App;

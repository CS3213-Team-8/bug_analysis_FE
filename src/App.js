import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { CssBaseline, Container, ThemeProvider } from '@mui/material';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/counter" element={<Counter />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </Router>
   
  );
}

export default App;

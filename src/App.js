import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container } from '@mui/material';
import Visualization from './pages/Visualization';
import BugsList from './pages/BugsList';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<Visualization />} />
          <Route path="/bugsList" element={<BugsList />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;

import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Container } from '@mui/material'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import NavBar from './components/NavBar'
import Visualization from './pages/Visualization'

function App() {
  return (
    <Router>
      <NavBar />

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/visualization' element={<Visualization />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App

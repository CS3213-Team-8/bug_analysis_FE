import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Box, CssBaseline, Container, ThemeProvider } from '@mui/material'
import Visualization from './pages/Visualization'
import BugsList from './pages/BugsList'
import NavBar from './components/NavBar'
import theme from './theme'
import Category from './pages/Category'
import Dbms from './pages/Dbms'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Box sx={{ ml: 4, mr: 4, mb: 4, height: 'calc(100vh - 100px)' }}>
          <Routes>
            <Route path='/' element={<Visualization />} />
            <Route path='/bugsList' element={<BugsList />} />
            <Route path='/category' element={<Category />} />
            <Route path='/dbms' element={<Dbms />} />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  )
}

export default App

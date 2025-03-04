import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <Button color="inherit" 
          component={Link} 
          to="/" 
          sx={{ 
            textTransform: 'none', 
            mr: 3,
            color: location.pathname === '/' ? 'white' : '#546379',
            '&:hover': {
              color: 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          Visualization
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/bugsList"
          sx={{
            textTransform: 'none',
            color: location.pathname === '/bugsList' ? 'white' : '#546379',
            '&:hover': {
              color: 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          Bugs List
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/dummy"
          sx={{
            textTransform: 'none',
            color: location.pathname === '/dummy' ? 'white' : '#546379',
            '&:hover': {
              color: 'rgba(255, 255, 255, 0.8)',
            },
          }}
        >
          Dummy
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

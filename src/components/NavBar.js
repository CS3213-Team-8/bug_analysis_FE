import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MyIcon from './icon';

const NavBar = () => {
  const location = useLocation();

  return (
    <AppBar position="static" elevation={0}>
      <Toolbar>
        <MyIcon variant="logo" sx={{ mr: 2 }} />
        <Button color="inherit" 
          component={Link} 
          to="/" 
          sx={{ 
            textTransform: 'none', 
            fontSize: '16px',
            fontWeight: 'bold',
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
            fontSize: '16px',
            fontWeight: 'bold',
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
            fontSize: '16px',
            fontWeight: 'bold',
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

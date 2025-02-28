import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none', mr: 3 }}>Visualization</Button>
        <Button color="inherit" component={Link} to="/bugsList" sx={{ textTransform: 'none' }}>Bugs List</Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

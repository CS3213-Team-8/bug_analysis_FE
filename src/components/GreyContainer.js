import React from 'react';
import { Container } from '@mui/material';

const GreyContainer = ({ children }) => {
  return (
    <Container sx={{ mt: 4, border: '3px solid #414C5B', padding: 2, borderRadius: '12px' }}>
      {children}
    </Container>
  );
};

export default GreyContainer;
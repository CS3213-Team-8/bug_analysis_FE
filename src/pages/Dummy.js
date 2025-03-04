import React from 'react';
import { Typography } from '@mui/material';
import GreyContainer from '../components/GreyContainer';

const Dummy = () => {
  return (
    <>
      <Typography variant="h4" component="h1">
        Dummy Page
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a demo page showcasing various components and their functionality. 
        You can find examples of different UI elements and their implementations here.
      </Typography>
      
      <GreyContainer>
        <Typography variant="h6">
          Grey Container Example
        </Typography>
        <Typography variant="body2">
          This content is wrapped in a grey container with a border and rounded corners.
        </Typography>
      </GreyContainer>
    </>
  );
};

export default Dummy;

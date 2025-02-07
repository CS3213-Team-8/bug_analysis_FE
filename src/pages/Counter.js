import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../store/counterSlice';
import { Box, Button, Typography } from '@mui/material';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <Box textAlign="center" sx={{ mt: 4 }}>
      <Typography variant="h4">Counter Page</Typography>
      <Typography variant="h5" sx={{ my: 2 }}>Count: {count}</Typography>
      <Button variant="contained" color="primary" sx={{ mr: 2 }} onClick={() => dispatch(increment())}>
        Increment
      </Button>
      <Button variant="contained" color="secondary" onClick={() => dispatch(decrement())}>
        Decrement
      </Button>
    </Box>
  );
};

export default Counter;

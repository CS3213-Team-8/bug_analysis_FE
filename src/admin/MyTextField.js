import React from 'react';
import { TextField } from '@mui/material';

const MyTextField = ({ name, label, value, onChange, multiline = false, rows = 1, disabled = false }) => {
  return (
    <TextField
      margin="dense"
      name={name}
      label={label}
      type="text"
      fullWidth
      multiline={multiline}
      rows={rows}
      value={value}
      onChange={onChange}
      sx={{ 
        mb: multiline ? 0 : 4,
        '& .MuiInputBase-input': {
          color: '#000000',
        }
      }}
      disabled={disabled}
    />
  );
};

export default MyTextField; 
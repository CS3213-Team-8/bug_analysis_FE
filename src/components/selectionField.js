import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const SelectionField = ({ 
  label = "Select", 
  selectionArray = [], // Array of values
  displayArray = [], // Array of display labels
  value, 
  onChange 
}) => {
  // Validate arrays have same length
  if (displayArray.length > 0 && displayArray.length !== selectionArray.length) {
    console.warn('SelectionField: displayArray and selectionArray must have the same length');
    return null;
  }



  return (
    <FormControl
      fullWidth
      variant="outlined"
      sx={{
        minWidth: 200,
        "& .MuiOutlinedInput-root": {
          "& fieldset": { borderColor: "#FFFFFF" }, // Default border color
          "&:hover fieldset": { borderColor: "#4E9D94" }, // Border on hover
          "&.Mui-focused fieldset": { borderColor: "#4E9D94" }, // Border when focused
        },
      }}
    >

      {/* Custom Label Style */}
      <InputLabel
        sx={{
          color: "#FFFFFF", // Default label color
          fontSize: 14,
          "&.Mui-focused": {
            color: "#4E9D94", // Label color when the input is focused
          },
          "&:hover": {
            color: "#4E9D94", // Label color on hover
          },
        }}
      >
        {label}
      </InputLabel>

      <Select
        value={value}
        onChange={onChange}
        label={label}
        sx={{
          color: "#FFFFFF", // Selection text color
          fontSize: 16,
          fontFamily: "Arial, sans-serif",
          "& .MuiSvgIcon-root": { color: "#FFFFFF" }, // Change arrow color
        }}
        MenuProps={{
          PaperProps: {
            sx: {
              backgroundColor: "#1E2631", // Dropdown background color
              color: "#FFFFFF", // Text color inside dropdown
              fontSize: 14,
            },
          },
        }}
      >
        {selectionArray.map((item, index) => (
          <MenuItem
            key={index}
            value={item}
            sx={{
              color: "#FFFFFF", // Text color inside dropdown
              fontSize: 14,
              "&:hover": {
                backgroundColor: "#4E9D94", // Highlight color on hover
                color: "#FFFFFF",
              },
            }}
          >
            {displayArray[index]}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectionField;

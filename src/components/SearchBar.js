import React, { useState } from "react";
import { alpha, styled } from "@mui/material/styles";
import { InputBase, IconButton, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear"; 

const SearchBarContainer = styled("div")(({ theme }) => ({
  borderRadius: "2rem",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "2.5rem", // space for search icon
  width: "100%",
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(() => ({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "none",
}));

const StyledInput = styled(InputBase)(() => ({
  flexGrow: 1, // Ensure the input takes up available space
  "& .MuiInputBase-input": {
    padding: "0.7rem 1.5rem",
    width: "100%",
  },
}));

const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  disabled = false,
  style = {}
}) => {
  const handleInputChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue); // Propagate the change to parent component
    onSearch(newValue); // Consider debouncing this if making API calls
  };

  const handleClear = () => {
    onChange(""); // Notify parent of the cleared input
    onSearch(""); // Trigger search with empty string
  };

  // used to trigger search on key press
//   const handleSearch = () => {
//     onSearch(inputValue); // Trigger search logic
//     console.log("handle search");
//   };

  return (
    <Box style={style} display="flex" alignItems="center">
      <SearchIconWrapper>
        <SearchIcon sx={{fontSize: "40px", color: "white" }} />
      </SearchIconWrapper>
      <SearchBarContainer>
        <StyledInput
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          disabled={disabled}
        />
        {value && (
          <IconButton sx={{ mr: "0.5rem" }} onClick={handleClear}>
            <ClearIcon htmlColor="#ffff" />
          </IconButton>
        )}
      </SearchBarContainer>
    </Box>
  );
};

export default SearchBar;

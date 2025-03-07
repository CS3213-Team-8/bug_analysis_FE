import React from 'react';
import { Typography, Box } from '@mui/material';
import GreyContainer from '../components/GreyContainer';
import MyTabs from '../components/MyTabs';
import SelectionField from '../components/selectionField';
import MyIcon from '../components/icon';
import CustomizedCard from '../components/card';
import SearchBar from '../components/SearchBar';
import { Button } from "@mui/material"

const BugsList = () => {
  // States for selection fields
  const [dbmsSelection, setDbmsSelection] = React.useState('');
  const [categorySelection, setCategorySelection] = React.useState('');

  // State for search
  const [searchValue, setSearchValue] = React.useState('');

  // Handlers for selection fields
  const handleDbmsChange = (event) => {
    setDbmsSelection(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategorySelection(event.target.value);
  };

  // Search handler
  const handleSearch = (value) => {
    console.log('Searching for:', value);
    // Implement your search logic here
  };

  return (
    <Box sx={{ p: 3 }}> {/* Adds padding around the entire content */}
      {/* SearchBar Component */}
      <Box mb={5}> {/* Adds margin-bottom for spacing */}
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          placeholder="Search something..."
        />
      </Box>

      {/* Filter Selection Fields (Side by Side) */}
      <Box display="flex" gap={3} mb={5} mr={50} alignItems="center">
        <SelectionField
          label="Filter by DBMS"
          selectionArray={['MySQL', 'PostgreSQL', 'SQLite']}
          displayArray={['MySQL', 'PostgreSQL', 'SQLite']}
          value={dbmsSelection}
          onChange={handleDbmsChange}
        />
        <SelectionField
          label="Filter by Category"
          selectionArray={['UI Bug', 'Backend Issue', 'Performance']}
          displayArray={['UI Bug', 'Backend Issue', 'Performance']}
          value={categorySelection}
          onChange={handleCategoryChange}
        />
        
        {/* Apply Filters Button */}
        <Box flexGrow={0}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: "50px", // Match height of selection fields
              width: "150px", // Fixed width
              // minWidth: "0px", // Ensures it doesn't shrink
              backgroundColor: "#705F9B",
              textTransform: "none", // Prevents text from being uppercase
              fontSize: "16px", // Adjust font size
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#5D4E84" }, // Slightly darker on hover
            }}
            onClick={() => console.log("Apply Filters Clicked")}
          >
            Bugs
          </Button>
        </Box>
      </Box>


      {/* GitHub Issues List */}
      <Box display="flex" flexDirection="column" gap={0}> {/* Adds space between cards */}
        {/* Done status card */}
        <CustomizedCard
          iconVariant="done"
          title="Resolved Bug Example"
          timeToFix="Fixed in 2 hours"
          description="This is an example of a resolved bug card. The card uses an accordion component that expands to show more details. It features a purple checkmark icon to indicate completion."
        />

        {/* Pending status card */}
        <CustomizedCard
          iconVariant="pending"
          title="Pending Issue Example"
          timeToFix="Estimated: 4 hours"
          description="This is an example of a pending issue card. It shows how the card looks with a mint green circle icon. The accordion can be expanded to reveal this detailed description."
        />

        <CustomizedCard
          iconVariant="pending"
          title="Pending Issue Example"
          timeToFix="Estimated: 4 hours"
          description="This is an example of a pending issue card. It shows how the card looks with a mint green circle icon. The accordion can be expanded to reveal this detailed description."
        />
      </Box>
    </Box>
  );
};

export default BugsList;

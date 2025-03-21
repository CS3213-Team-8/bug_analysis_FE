import React from 'react';
import { Typography, Box } from '@mui/material';
import GreyContainer from '../components/GreyContainer';
import SelectionField from '../components/selectionField';
import MyIcon from '../components/icon';
import CustomizedCard from '../components/card';
import SearchBar from '../components/SearchBar';
import CustomTabs from '../components/CustomTabs';

const Dummy = () => {
  const demoTabs = [
    { label: 'Tab 1' },
    { label: 'Tab 2' },
    { label: 'Tab 3' },
  ];

  // Add state for selection fields
  const [selection, setSelection] = React.useState('');

  // Add state for search
  const [searchValue, setSearchValue] = React.useState('');

  // Add handlers
  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
  };

  // Add search handler
  const handleSearch = (value) => {
    console.log('Searching for:', value);
    // Implement your search logic here
  };

  return (
    <>
      <Typography variant="h4" component="h1">
        Dummy Page
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        This is a demo page showcasing various components and their functionality. 
        You can find examples of different UI elements and their implementations here.
      </Typography>
      
      <GreyContainer sx={{ mt: 3 }} >
        <Typography variant="h6">
          Grey Container Example
        </Typography>
        <Typography variant="body2">
          This content is wrapped in a grey container with a border and rounded corners.
        </Typography>
      </GreyContainer>

      <GreyContainer  sx={{ mt: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Custom Tabs Example
        </Typography>
        <CustomTabs tabs={demoTabs} />
      </GreyContainer>

      <GreyContainer sx={{ mt: 3 }} >
        <Typography variant="h6" sx={{ mb: 2 }}>
          SelectionField Examples
        </Typography>
        <SelectionField
          label="Selection"
          selectionArray={['val1', 'val2', 'val3']}
          displayArray={['Display Option 1', 'Display Option 2', 'Display Option 3']}
          value={selection}
          onChange={handleSelectionChange}
        />
      </GreyContainer>

      <GreyContainer sx={{ mt: 3 }} >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Icon Examples
        </Typography>
        
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Logo variant */}
          <Box>
            <Typography variant="body2" sx={{ mb: 1 }}>Logo:</Typography>
            <MyIcon variant="logo" />
          </Box>

          {/* Status icons with labels */}
          <Box display="flex" gap={4}>
            <Box display="flex" alignItems="center" gap={1}>
              <MyIcon variant="done" />
              <Typography variant="body2">Done Status</Typography>
            </Box>

            <Box display="flex" alignItems="center" gap={1}>
              <MyIcon variant="pending" />
              <Typography variant="body2">Pending Status</Typography>
            </Box>
            
            <Box display="flex" alignItems="center" gap={1}>
              <MyIcon variant="edit" />
              <Typography variant="body2">Edit Action</Typography>
            </Box>
            
            <Box display="flex" alignItems="center" gap={1}>
              <MyIcon variant="delete" />
              <Typography variant="body2">Delete Action</Typography>
            </Box>
          </Box>
        </Box>
      </GreyContainer>

      <GreyContainer sx={{ mt: 3 }} >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Card Examples
        </Typography>
        
        <Box display="flex" flexDirection="column" gap={0}>
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
      </GreyContainer>

      <GreyContainer sx={{ mt: 3 }} >
        <Typography variant="h6" sx={{ mb: 2 }}>
          SearchBar Example
        </Typography>
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          placeholder="Search something..."
        />
      </GreyContainer>
    </>
  );
};

export default Dummy;

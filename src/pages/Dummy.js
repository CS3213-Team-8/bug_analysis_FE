import React from 'react';
import { Typography, Box } from '@mui/material';
import GreyContainer from '../components/GreyContainer';
import MyTabs from '../components/MyTabs';
import SelectionField from '../components/SelectionField';

const Dummy = () => {
  const demoTabs = [
    { label: 'Tab 1', path: 'tab1' },
    { label: 'Tab 2', path: 'tab2' },
    { label: 'Tab 3', path: 'tab3' },
  ];

  // Add state for selection fields
  const [selection, setSelection] = React.useState('');

  // Add handlers
  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
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
      
      <GreyContainer>
        <Typography variant="h6">
          Grey Container Example
        </Typography>
        <Typography variant="body2">
          This content is wrapped in a grey container with a border and rounded corners.
        </Typography>
      </GreyContainer>

      <GreyContainer>
        <Typography variant="h6" sx={{ mb: 2 }}>
          MyTabs Example
        </Typography>
        <MyTabs tabs={demoTabs} />
      </GreyContainer>

      <GreyContainer>
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
    </>
  );
};

export default Dummy;

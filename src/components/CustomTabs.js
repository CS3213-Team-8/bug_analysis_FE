import { Box, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/system';

const CustomTabs = ({ tabs, selectedTab, onTabChange }) => {
  return (
    <Box>
      <Tabs value={selectedTab} onChange={onTabChange} aria-label="custom tabs">
        {tabs.map((tab, index) => (
          <Tab 
            key={index} 
            label={tab.label}
            sx={{ 
                textTransform: 'none', 
                width: 'auto', 
                minHeight: '40px',
                borderRadius: '8px', // rounded corners
                margin: '0 4px', // space between tabs
                backgroundColor: selectedTab === index ? '#4E9D94' : '#414C5B',
                color: 'white',
                '&:hover': {
                backgroundColor: 'rgba(78, 157, 148, 0.7)', // 80% opacity of '#4E9D94'
                }
            }} />
        ))}
      </Tabs>
    </Box>
  );
};

export default CustomTabs;
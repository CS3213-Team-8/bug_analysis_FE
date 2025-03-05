import React from 'react';
import { Tabs, Tab } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const MyTabs = ({ tabs }) => {
  const location = useLocation();
  const currentTab = tabs.findIndex(tab => tab.path === location.pathname.split('/')[1] || (location.pathname === '/' && tab.path === '/'));

  return (
    <Tabs value={currentTab} textColor="white" indicatorColor="none">
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          component={Link}
          to={tab.path}
          sx={{ textTransform: 'none', 
            width: 'auto', 
            minHeight: '40px',
            borderRadius: '8px', // rounded corners
            margin: '0 4px', // space between tabs
            backgroundColor: currentTab === index ? '#4E9D94' : '#414C5B',
            color: 'white',
            '&:hover': {
              backgroundColor: 'rgba(78, 157, 148, 0.7)', // 80% opacity of '#4E9D94'
            }
         }}
        />
      ))}
    </Tabs>
  );
};

export default MyTabs;
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AdjustOutlinedIcon from '@mui/icons-material/AdjustOutlined';
import BugReportIcon from '@mui/icons-material/BugReport';

const iconStyles = {
  done: { color: '#A078FF', fontSize: 30 }, // Purple checkmark
  pending: { color: '#A0E7E5', fontSize: 30 }, // Mint green circle
};

const MyIcon = ({ variant, ...props }) => {
  if (variant === 'logo') {
    return (
      <Box display="flex" alignItems="center" gap={0.5} {...props}>
        {/* Bug Icon */}
        <BugReportIcon sx={{ fontSize: 40, color: 'white' }} />

        {/* BUGSNAPPER Text */}
        <Typography fontWeight="bold" color="white" fontSize="10" >
          BUGSNAPPER
        </Typography>
      </Box>
    );
  }

  switch (variant) {
    case 'done':
      return <CheckCircleOutlineIcon sx={iconStyles.done} {...props} />;
    case 'pending':
      return <AdjustOutlinedIcon sx={iconStyles.pending} {...props} />;
    default:
      return null;
  }
};

export default MyIcon;
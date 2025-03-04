import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MyIcon from './icon'; 

const CustomizedCard = ({ iconVariant, title, timeToFix, description }) => {
  return (
    <Accordion
      sx={{
        backgroundColor: "#1A1B26",
        border: "1px solid rgba(65, 76, 91, 0.58)",
        borderRadius: "20px",
        boxShadow: "none",
        "&:before": { display: "none" },
        overflow: "hidden",
        mb: 1,
        "&.MuiPaper-root": {
          borderRadius: "20px",
        },
      }}
    >
      {/* Header - Status Icon + Title + Time to Fix */}
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "#4E9D94" }} />}
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "5px 20px",
        }}
      >
        {/* Status Icon (Dynamically from MyIcon) */}
        <Box sx={{ mr: 3, ml: 0 }}>
          <MyIcon variant={iconVariant} />
        </Box>

        {/* Bug Title & Time */}
        <Box sx={{ flexGrow: 10 }}>
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
            {timeToFix}
          </Typography>
        </Box>
      </AccordionSummary>

      {/* Expanded Details */}
      <AccordionDetails
        sx={{
          backgroundColor: "#414C5B", // Matches the search bar color
          padding: "20px",
        }}
      >
        <Typography sx={{ color: "white", fontSize: "14px" }}>{description}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomizedCard;
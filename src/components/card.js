import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MyIcon from './icon';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const CustomizedCard = ({ iconVariant, title, timeToFix, category, description }) => {
  const processDescription = (text) => {
    if (!text) return '';

    // Trim whitespace and normalize newlines
    let processed = text.trim();

    // Remove common leading indentation from all lines
    const match = processed.match(/^[ \t]+/m);
    if (match) {
      const indent = match[0];
      const regex = new RegExp(`^${indent}`, 'gm');
      processed = processed.replace(regex, '');
    }

    // Ensure headers have space after # symbols
    processed = processed.replace(/###(\w)/g, '### $1');

    // Ensure list items have space after dash or asterisk
    processed = processed.replace(/^-(\w)/gm, '- $1');
    processed = processed.replace(/^\*(\w)/gm, '* $1');

    return processed;
  };

  const processedDescription = processDescription(description);

  return (
    <Accordion
      sx={{
        backgroundColor: "#1A1B26",
        border: "1px solid rgba(65, 76, 91, 0.7)",
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

        {/* Bug Title, Time, and Category */}
        <Box sx={{ flexGrow: 10 }}>
          <Typography sx={{ color: "white", fontSize: "16px", fontWeight: "bold" }}>
            {title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Typography sx={{ color: "rgba(255,255,255,0.6)", fontSize: "12px" }}>
              {timeToFix}
            </Typography>
            {category && (
              <Typography sx={{ 
                color: "rgba(255, 255, 255, 0.9)", 
                fontSize: "12px", 
                backgroundColor: "rgba(78, 157, 148, 0.33)", 
                padding: "2px 8px", 
                borderRadius: "10px" 
              }}>
                {category}
              </Typography>
            )}
          </Box>
        </Box>
      </AccordionSummary>

      {/* Expanded Details */}
      <AccordionDetails
        sx={{
          backgroundColor: "rgba(65, 76, 91, 0.85)", // Matches the search bar color
          padding: "10px",
        }}
      >
        {/* Use ReactMarkdown to render the description as Markdown */}
        <ReactMarkdown
          children={processedDescription}
          components={{
            // Map Markdown elements to Material-UI components
            p: ({ node, ...props }) => (
              <Typography sx={{ color: "white", fontSize: "14px", mb: 2 }} {...props} />
            ),
            h1: ({ node, ...props }) => (
              <Typography sx={{ color: "white", fontSize: "24px", fontWeight: "bold", mb: 2 }} {...props} />
            ),
            h2: ({ node, ...props }) => (
              <Typography sx={{ color: "white", fontSize: "20px", fontWeight: "bold", mb: 2 }} {...props} />
            ),
            h3: ({ node, ...props }) => (
              <Typography sx={{ color: "white", fontSize: "18px", fontWeight: "bold", mb: 2 }} {...props} />
            ),
            ul: ({ node, ...props }) => (
              <ul style={{ color: "white", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
            ),
            ol: ({ node, ...props }) => (
              <ol style={{ color: "white", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
            ),
            li: ({ node, ...props }) => (
              <li style={{ marginBottom: "8px", listStyleType: "disc" }} {...props} />
            ),
            a: ({ node, ...props }) => (
              <a style={{ color: "#4E9D94", textDecoration: "none" }} {...props} />
            ),
            code: ({ node, inline, className, children, ...props }) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, '')}
                  style={materialDark}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                  // Apply custom styling for font size
                  customStyle={{
                    fontSize: '12px', // Set font size to 12px
                  }}
                />
              ) : (
                <code style={{ backgroundColor: "#1A1B26", padding: "2px 4px", borderRadius: "4px", color: "#4E9D94" }} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default CustomizedCard;
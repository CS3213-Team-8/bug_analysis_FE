import React, { useState } from 'react';
import { 
  Accordion, 
  AccordionSummary, 
  AccordionDetails, 
  Typography, 
  Box,
  IconButton,
  Tooltip,
  Snackbar,
  Button,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import GitHubIcon from '@mui/icons-material/GitHub';
import MyIcon from './icon';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import SolutionDialog from '../admin/SolutionDialog';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * CustomizedCard component displays issue information in a collapsible accordion
 * @param {Object} props - Component props
 * @param {string} props.iconVariant - The icon variant to display ('done' or 'pending')
 * @param {string} props.title - The title of the issue
 * @param {string} props.timeToFix - The time information for the issue
 * @param {string} props.category - The category of the issue
 * @param {string} props.description - The markdown description of the issue
 * @param {string} props.url - The URL to the GitHub issue
 * @param {string} props.repoInfo - The repository information (org/repo)
 */
const CustomizedCard = ({ issueId, iconVariant, title, timeToFix, category, description, url, repoInfo, getIssueSolution }) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [isSolutionClicked, setIsSolutionClicked] = useState(false);
  const [solution, setSolution] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Process description to improve markdown rendering
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

    // Specifically handle malformed table patterns like "**namebeforeafter**"
    processed = processed.replace(/\*\*(name)(before)(after)\*\*/i, '| **Name** | **Before** | **After** |\n|--------|--------|-------|');

    // Fix numbered list items with code blocks
    processed = processed.replace(/(\d+\.\s+.*?)(```[^`]*```)/gs, (match, listItem, codeBlock) => {
      return `${listItem}\n\n${codeBlock}\n\n`;
    });

    // Fix bullet list items with code blocks
    processed = processed.replace(/(\*\s+.*?)(```[^`]*```)/gs, (match, listItem, codeBlock) => {
      return `${listItem}\n\n${codeBlock}\n\n`;
    });

    // Fix malformed tables - fix separator lines
    processed = processed.replace(/(\|\s*---\s*\|\s*---\s*\|\s*---\s*\|)(\s*\|)/, '$1\n$2');

    // Fix rows with double pipe separators like "| | benchmark"
    processed = processed.replace(/\|\s+\|\s+(\w+)/g, '| $1');

    // Ensure table cells have pipes and spaces (refinement)
    processed = processed.replace(/\|(\S)/g, '| $1').replace(/(\S)\|/g, '$1 |');

    // Improve table formatting - ensure proper line breaks before and after tables
    processed = processed.replace(/(\|[^\n]*\|)\s*\n\s*(\|[^\n]*\|)/g, (match) => {
      return `\n\n${match}\n\n`;
    });

    // Improve markdown formatting
    processed = processed
      // Ensure headers have space after # symbols
      .replace(/###(\w)/g, '### $1')
      .replace(/##(\w)/g, '## $1')
      .replace(/#(\w)/g, '# $1')
      // Ensure list items have space after dash or asterisk
      .replace(/^-(\w)/gm, '- $1')
      .replace(/^\*(\w)/gm, '* $1')
      // Fix code block formatting - ensure proper spacing
      .replace(/```(\w+)/g, '```$1\n')
      // Handle GitHub-style details/summary tags - ensure proper spacing
      .replace(/<details>\s*<summary>/g, '<details><summary>')
      .replace(/<\/summary>\s*<ul>/g, '</summary><ul>');

    return processed;
  };

  // Copy code to clipboard
  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleGetIssueSolution = async () => {
    setLoading(true);
    const solution = await getIssueSolution(issueId);
    setSolution(processDescription(solution));
    setIsSolutionClicked(true);
    setLoading(false);
  }

  const handleClose = () => {
    setIsSolutionClicked(false);
    setSolution('');
  }

  const processedDescription = processDescription(description);

  // Custom components for ReactMarkdown
  const components = {
    // Text elements
    p: ({ node, ...props }) => (
      <Typography sx={{ color: "white", fontSize: "14px", mb: 2, lineHeight: 1.6 }} {...props} />
    ),
    h1: ({ node, ...props }) => (
      <Typography sx={{ color: "#4E9D94", fontSize: "24px", fontWeight: "bold", mb: 2, mt: 2 }} {...props} />
    ),
    h2: ({ node, ...props }) => (
      <Typography sx={{ color: "#4E9D94", fontSize: "20px", fontWeight: "bold", mb: 2, mt: 2 }} {...props} />
    ),
    h3: ({ node, ...props }) => (
      <Typography sx={{ color: "#4E9D94", fontSize: "18px", fontWeight: "bold", mb: 2, mt: 2 }} {...props} />
    ),
    
    // List elements
    ul: ({ node, ...props }) => (
      <ul style={{ color: "white", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
    ),
    ol: ({ node, ...props }) => (
      <ol style={{ color: "white", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
    ),
    li: ({ node, ...props }) => (
      <li style={{ marginBottom: "8px", color: "white" }} {...props} />
    ),
    
    // Links
    a: ({ node, ...props }) => (
      <a 
        style={{ 
          color: "#4E9D94", 
          textDecoration: "none",
          borderBottom: "1px dotted #4E9D94"
        }} 
        target="_blank" 
        rel="noopener noreferrer"
        {...props} 
      />
    ),
    
    // GitHub-specific elements
    details: ({ node, ...props }) => (
      <details 
        style={{ 
          marginBottom: "16px", 
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          padding: "8px 12px",
          borderRadius: "6px",
          borderLeft: "3px solid #4E9D94"
        }} 
        {...props} 
      />
    ),
    summary: ({ node, ...props }) => (
      <summary 
        style={{ 
          cursor: "pointer", 
          color: "#4E9D94", 
          fontWeight: "bold",
          padding: "4px 0"
        }} 
        {...props} 
      />
    ),
    
    // Table elements
    table: ({ node, ...props }) => (
      <TableContainer 
        component={Paper} 
        sx={{ 
          mb: 3, 
          mt: 2,
          backgroundColor: 'rgba(26, 27, 38, 0.8)',
          '& .MuiTableCell-root': {
            borderColor: 'rgba(78, 157, 148, 0.2)'
          }
        }}
      >
        <Table size="small" {...props} />
      </TableContainer>
    ),
    thead: ({ node, ...props }) => (
      <TableHead 
        sx={{
          backgroundColor: 'rgba(78, 157, 148, 0.1)'
        }}
        {...props} 
      />
    ),
    tbody: ({ node, ...props }) => (
      <TableBody {...props} />
    ),
    tr: ({ node, ...props }) => (
      <TableRow 
        sx={{ 
          '&:nth-of-type(odd)': { 
            backgroundColor: 'rgba(0, 0, 0, 0.1)' 
          }
        }}
        {...props} 
      />
    ),
    th: ({ node, ...props }) => (
      <TableCell 
        sx={{ 
          fontWeight: 'bold', 
          color: '#4E9D94',
          fontSize: '14px',
          py: 1.5
        }}
        {...props} 
      />
    ),
    td: ({ node, ...props }) => (
      <TableCell 
        sx={{ 
          color: 'white',
          fontSize: '14px',
          py: 1
        }}
        {...props} 
      />
    ),
    
    // Code blocks with enhanced styling
    pre: ({ node, ...props }) => (
      <Box 
        component="pre"
        sx={{ 
          margin: '16px 0',
          padding: 0,
          overflow: 'visible',
          backgroundColor: 'transparent',
        }} 
        {...props} 
      />
    ),
    code: ({ node, inline, className, children, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const codeString = String(children).replace(/\n$/, '');
      
      // Special handling for code blocks without language specification
      const isCodeBlock = !inline && (match || codeString.includes('\n'));
      
      // Function to handle copying code
      const handleCopy = () => handleCopyCode(codeString);
      
      if (isCodeBlock) {
        return (
          <Box sx={{ position: 'relative', my: 2 }}>
            <Tooltip title="Copy code" placement="top">
              <IconButton 
                onClick={handleCopy}
                size="small"
                sx={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  color: '#6e7681',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    color: 'white'
                  },
                  zIndex: 1
                }}
              >
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
            <SyntaxHighlighter
              children={codeString}
              style={materialDark}
              language={match ? match[1] : 'text'}
              PreTag="div"
              {...props}
              customStyle={{
                fontSize: '13px',
                borderRadius: '8px',
                padding: '16px',
                backgroundColor: '#0d1117',
                border: '1px solid #30363d',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              }}
              showLineNumbers={match !== null}
              wrapLines={true}
              lineProps={lineNumber => ({
                style: { 
                  display: 'block', 
                  width: '100%',
                }
              })}
            />
          </Box>
        );
      }
      return (
        <code 
          style={{ 
            backgroundColor: "#1A1B26", 
            padding: "2px 6px", 
            borderRadius: "4px", 
            color: "#4E9D94",
            fontFamily: "monospace",
            fontSize: '90%',
          }} 
          {...props}
        >
          {children}
        </code>
      );
    },
  };

  return (
    <>
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
            alignItems: "flex-start",
            padding: "10px 20px",
            '&:hover': {
              backgroundColor: 'rgba(78, 157, 148, 0.05)'
            }
          }}
          aria-label={`${title} - ${category || 'Uncategorized'}`}
        >
          {/* Status Icon (Done or Pending) */}
          <Box sx={{ mr: 3, ml: 0, display: 'flex', alignItems: 'center' }}>
            <MyIcon variant={iconVariant} />
          </Box>

          {/* Content wrapper - contains all text content */}
          <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
            {/* Bug Title */}
            <Typography 
              sx={{ 
                color: "white", 
                fontSize: "16px", 
                fontWeight: "bold",
                lineHeight: 1.3,
                mb: 1
              }}
            >
              {title}
            </Typography>
            
            {/* GitHub icon and repo info */}
            {url && (
              <Box sx={{ 
                display: "flex", 
                alignItems: "center", 
                mb: 1
              }}>
                {repoInfo && (
                  <Typography 
                    component="span"
                    sx={{ 
                      color: "rgba(255, 255, 255, 0.6)", 
                      fontSize: "12px", 
                      display: 'inline-flex',
                      alignItems: 'center',
                      mr: 1
                    }}
                  >
                    Source: {repoInfo}
                  </Typography>
                )}
                <Tooltip title="View on GitHub">
                  <IconButton 
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    size="small"
                    sx={{ 
                      color: "#4E9D94",
                      '&:hover': { color: "#6AC0B6" },
                      p: 0.5
                    }}
                  >
                    <GitHubIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
            
            {/* Time and category */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Typography 
                sx={{ 
                  color: "rgba(255,255,255,0.6)", 
                  fontSize: "12px",
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {timeToFix}
              </Typography>
              {category && (
                <Typography 
                  component="span"
                  sx={{ 
                    color: "rgba(255, 255, 255, 0.9)", 
                    fontSize: "12px", 
                    backgroundColor: "rgba(78, 157, 148, 0.33)", 
                    padding: "2px 8px", 
                    borderRadius: "10px",
                    display: 'inline-block'
                  }}
                >
                  {category}
                </Typography>
              )}
            </Box>
          </Box>
        </AccordionSummary>

        {/* Expanded Details */}
        <AccordionDetails
          sx={{
            backgroundColor: "rgba(65, 76, 91, 0.85)",
            padding: "16px",
            borderTop: "1px solid rgba(78, 157, 148, 0.2)"
          }}
        >
          <Box sx={{ display: 'flex', my: 1 }}>
            <Button
              onClick={handleGetIssueSolution}
              variant="outlined"
              size="small"
              sx={{ color: "#4E9D94", borderColor: "#4E9D94", ":hover": { backgroundColor: "rgba(78, 157, 148, 0.1)" } }}
            >
              Get Solution
            </Button>
            {loading && (
              <CircularProgress 
                size={24} 
                sx={{ color: "#4E9D94", ml: 2 }}
              />
            )}
          </Box>

          {/* Use ReactMarkdown with rehype-raw and remark-gfm to render HTML and GitHub-specific elements */}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[remarkGfm]}
            components={components}
          >
            {processedDescription}
          </ReactMarkdown>
        </AccordionDetails>
      </Accordion>
      
      {/* Notification when code is copied */}
      <Snackbar
        open={copySuccess}
        autoHideDuration={2000}
        message="Code copied to clipboard"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        sx={{
          '& .MuiSnackbarContent-root': {
            backgroundColor: '#4E9D94',
            color: 'white'
          }
        }}
      />

      <SolutionDialog
        open={isSolutionClicked}
        onClose={handleClose}
        title={title}
        solution={solution}
        isEdit={false}
      />
    </>
  );
};

export default CustomizedCard;
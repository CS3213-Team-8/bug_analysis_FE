import React from 'react';
import { 
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Typography,
    Button
  } from '@mui/material';
import ReactMarkdown from 'react-markdown';

const SolutionDialog = ({ 
  open, 
  onClose, 
  title, 
  solution, 
  onSubmit, 
  isEdit = false 
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color="#000000">{title}</DialogTitle>
      <DialogContent>
      <ReactMarkdown
            children={solution}
            components={{
              // Text elements
              p: ({ node, ...props }) => (
                <Typography sx={{ color: "black", fontSize: "14px", mb: 2, lineHeight: 1.6 }} {...props} />
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
                <ul style={{ color: "black", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
              ),
              ol: ({ node, ...props }) => (
                <ol style={{ color: "black", fontSize: "14px", marginBottom: "16px", paddingLeft: "20px" }} {...props} />
              ),
              li: ({ node, ...props }) => (
                <li style={{ marginBottom: "8px", color: "black" }} {...props} />
              )
            }}
          />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
      </DialogActions>
    </Dialog>
  );
};

export default SolutionDialog; 
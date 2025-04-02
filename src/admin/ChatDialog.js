import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";

const ChatDialog = ({
  open,
  onClose,
  title,
  onSubmit,
  loading,
  userInput,
  setUserInput,
}) => {
  const [selectedPrompt, setSelectedPrompt] = useState("");

  const examplePrompts = [
    {
      title: "Optimization Focus Project",
      text: `We are running a plan-driven project with infrequent releases and minimal CI/CD pipelines. We need a highly stable, low-maintenance DBMS that ensures long-term reliability with minimal changes. Key considerations:

• Low operational overhead (minimal tuning, backups, scaling needs).
• High Performance in query performance.`,
    },
    {
      title: "Agile Project DBMS",
      text: `We are an Agile team with frequent CI/CD deployments, requiring a DBMS that supports rapid iterations while remaining stable. Key needs:

• Automation-friendly (Infrastructure-as-Code, Kubernetes/container support).
• Not able to tolerate DBMS build issues.`,
    },
  ];

  const handlePromptSelect = (prompt) => {
    setSelectedPrompt(prompt);
    setUserInput(prompt.text);
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle color="#000000">{title}</DialogTitle>
      <DialogContent color="#000000">
        <Typography variant="h6" gutterBottom sx={{ color: "#000000" }}>
          Example Prompts:
        </Typography>
        <Box display="flex" gap={2} mb={3}>
          {examplePrompts.map((prompt, index) => (
            <Paper
              key={index}
              elevation={3}
              sx={{
                p: 2,
                cursor: "pointer",
                bgcolor: selectedPrompt === prompt ? "#e3f2fd" : "white",
                "&:hover": { bgcolor: "#f5f5f5" },
                flex: 1,
                width: "50%",
                minHeight: "200px",
              }}
              onClick={() => handlePromptSelect(prompt)}
            >
              <Typography
                variant="subtitle1"
                gutterBottom
                sx={{ color: "#000000" }}
              >
                {prompt.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#000000", whiteSpace: "pre-wrap" }}
              >
                {prompt.text.split("\n\n")[0]}...
              </Typography>
            </Paper>
          ))}
        </Box>
        <TextField
          fullWidth
          multiline
          rows={6}
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Type your prompt here..."
          variant="outlined"
          sx={{
            "& .MuiInputBase-input": {
              color: "#000000",
            },
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          color="primary"
          variant="contained"
          disabled={!userInput.trim() || loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Submit"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ChatDialog;

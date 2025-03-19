import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import SelectionField from '../components/selectionField';
import CustomizedCard from '../components/card';
import SearchBar from '../components/SearchBar';
import { Button } from "@mui/material"
import axios from 'axios';

const BugsList = () => {
  // State for issues
  const [issues, setIssues] = useState([]);
  // State for original issues (unfiltered)
  const [allIssues, setAllIssues] = useState([]);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for error
  const [error, setError] = useState(null);

  // State for search
  const [searchValue, setSearchValue] = React.useState('');

  // State for DBMS options
  const [dbmsOptions, setDbmsOptions] = useState([]);
  const [dbmsLoading, setDbmsLoading] = useState(false);

  // States for selection fields
  const [dbmsSelection, setDbmsSelection] = React.useState('');
  const [categorySelection, setCategorySelection] = React.useState('');

  // Search handler
  const handleSearch = (value) => {
    console.log('Searching for:', value);
    setSearchValue(value);
    
    if (!value.trim()) {
      // If search is empty, show all issues
      setIssues(allIssues);
    } else {
      // Filter issues where title contains the search value (case insensitive)
      const filtered = allIssues.filter(issue => 
        issue.title.toLowerCase().includes(value.toLowerCase())
      );
      setIssues(filtered);
    }
  };

  // Handlers for DBMS selection fields
  // Fetch DBMS options when component mounts
  useEffect(() => {
    const fetchDbmsOptions = async () => {
      setDbmsLoading(true);
      try {
        const response = await axios.get("https://bug-analysis-be.onrender.com/api/dbms");
        // Filter out any entries with empty name or slug
        const validOptions = response.data.filter(option => option.name && option.slug);
        setDbmsOptions(validOptions);
      } catch (err) {
        console.error("Failed to fetch DBMS options:", err);
      } finally {
        setDbmsLoading(false);
      }
    };

    fetchDbmsOptions();
  }, []);

  const handleDbmsChange = (event) => {
    const selectedDbms = event.target.value;
    setDbmsSelection(selectedDbms);

    // Filter issues based on selected DBMS
    if (selectedDbms) {
      const filteredIssues = allIssues.filter(issue => issue.dbms_id === selectedDbms);
      setIssues(filteredIssues);
    } else {
      // If no DBMS is selected, show all issues
      setIssues(allIssues);
    }
  };

  // Handlers for Category selection fields
  //3. TODO fetch issues by Category
  const handleCategoryChange = (event) => {
    setCategorySelection(event.target.value);
  };

   // Function to fetch GitHub issues
   const fetchGitHubIssues = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://bug-analysis-be.onrender.com/api/github/issues");
      console.log("GitHub issues fetched:", response.data);
      setIssues(response.data);
      setAllIssues(response.data); 
      setSearchValue(''); // Reset search when fetching new data
    } catch (error) {
      console.error("Failed to fetch GitHub issues:", error);
      setError("Failed to fetch GitHub issues. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Helper function to calculate time difference between two dates
  //if issue is open: Display Open for {current_date - issue.created_at}
  //if issue is closed: Display Fixed in {issue.closed_at - issue.created_at}
  const calculateTimeDifference = (startDate, endDate) => {
    if (!startDate) return 'Unknown';
    
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date();
    const diffMs = end - start;
    
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (diffDays > 0) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''}`;
    } else {
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''}`;
    }
  };

    // Helper function to format the time difference message based on issue state
    const getTimeMessage = (issue) => {
      if (issue.state === "closed") {
        return `Fixed in: ${calculateTimeDifference(issue.created_at, issue.closed_at)}`;
      } else {
        return `Opened for: ${calculateTimeDifference(issue.created_at)}`;
      }
    };

  return (
    <Box sx={{ p: 0 }}> {/* Adds padding around the entire content */}
      {/* SearchBar Component */}
      <Box mb={5}> {/* Adds margin-bottom for spacing */}
        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
          placeholder="Search something..."
        />
      </Box>

      {/* Filter Selection Fields (Side by Side) */}
      <Box display="flex" gap={3} mb={5} mr={70} alignItems="center">
        <SelectionField
          label="Filter by DBMS"
          //1. Set DBMS selection fields accordingly 
          selectionArray={dbmsOptions.map(option => option.id)}
          displayArray={dbmsOptions.map(option => option.name)}
          value={dbmsSelection}
          onChange={handleDbmsChange}
          disabled={dbmsLoading || dbmsOptions.length === 0}
        />
        <SelectionField
          label="Filter by Category"
          //2. Set Category selection fields accordingly 
          selectionArray={['UI Bug', 'Backend Issue', 'Performance']}
          displayArray={['UI Bug', 'Backend Issue', 'Performance']}
          value={categorySelection}
          onChange={handleCategoryChange}
        />
        
        {/* Apply Filters Button */}
        <Box flexGrow={0}>
          <Button
            variant="contained"
            color="primary"
            sx={{
              height: "50px", 
              width: "150px", 
              backgroundColor: "#705F9B",
              textTransform: "none", 
              fontSize: "16px", 
              borderRadius: "20px",
              "&:hover": { backgroundColor: "#5D4E84" }, 
            }}

            onClick={fetchGitHubIssues}
            disabled={loading}
          >
            {loading ? "Loading..." : "Bugs"}
          </Button>
        </Box>
      </Box>
      
      {/* Error message */}
      {error && (
        <Box mb={3} sx={{ color: "red" }}>
          <Typography>{error}</Typography>
        </Box>
      )}

      {/* GitHub Issues List */}
      <Box display="flex" flexDirection="column" gap={0}>
        {issues.length > 0 ? (
          issues.map((issue) => (
            <CustomizedCard
              iconVariant={issue.state === "closed" ? "done" : "pending"}
              title={issue.title}
              timeToFix={getTimeMessage(issue)}
              //4. TODO fetch and display category 
              category="Category A"
              description={issue.body || "No description available."}
            />
          ))
        ) : allIssues.length > 0 && searchValue.trim() !== "" ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="h6">No issues found</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Try a different search term
            </Typography>
          </Box>
        ) : !loading && !error ? (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography variant="h6">No issues yet...</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Click the 'Bugs' button to fetch GitHub issues
            </Typography>
          </Box>
          // <>
          //   {/* Placeholder cards when no issues are fetched yet */}
          //   <CustomizedCard
          //     iconVariant="done"
          //     title="Click the 'Bugs' button to fetch GitHub issues"
          //     timeToFix="Example"
          //     category="Example"
          //     description="This is a placeholder card. Click the 'Bugs' button above to fetch real GitHub issues."
          //   />
            
          //   <CustomizedCard
          //     iconVariant="pending"
          //     title="Example Issue"
          //     timeToFix="Example"
          //     category="Example"
          //     description="This is another placeholder card. The real issues will be displayed here after fetching."
          //   />
          // </>
        ) : null}
        
        {/* Loading indicator */}
        {loading && (
          <Box sx={{ textAlign: "center", py: 4 }}>
            <Typography>Loading issues...</Typography>
          </Box>
        )}
      </Box>
      {/* example  */}

    </Box>
  );
};

export default BugsList;

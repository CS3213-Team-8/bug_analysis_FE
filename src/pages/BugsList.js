import React, { useState, useEffect } from 'react';
import { Typography, Box, CircularProgress, Divider, List, ListItem, ListItemButton } from '@mui/material';
import SelectionField from '../components/selectionField';
import CustomizedCard from '../components/card';
import SearchBar from '../components/SearchBar';
import { Button } from "@mui/material"
import axios from 'axios';
import axiosInstance from '../axios';

const BugsList = () => {
  // State for issues
  const [issues, setIssues] = useState(null);
  // State for original issues (unfiltered)
  const [allIssues, setAllIssues] = useState(null);
  // State for loading
  const [loading, setLoading] = useState(false);
  // State for error
  const [error, setError] = useState(null);
  // State for current page
  const [currentPage, setCurrentPage] = useState(1);
  // State to track if there are more pages to load
  const [hasMore, setHasMore] = useState(true);

  // State for search
  const [searchValue, setSearchValue] = useState('');

  // State for DBMS options
  const [dbmsOptions, setDbmsOptions] = useState([]);
  const [dbmsLoading, setDbmsLoading] = useState(false);

  // State for category options
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(false);

  // States for selection fields
  const [dbmsSelection, setDbmsSelection] = useState('');
  const [categorySelection, setCategorySelection] = useState('');

  // Handlers for DBMS selection fields
  // Fetch DBMS options when component mounts
  useEffect(() => {
    const fetchDbmsOptions = async () => {
      setDbmsLoading(true);
      try {
        const response = await axios.get("https://bug-analysis-be.onrender.com/api/dbms");
        // Filter valid options and sort alphabetically
        const validOptions = response.data
        .filter(option => option.name && option.slug)
        .sort((a, b) => a.name.localeCompare(b.name));
        setDbmsOptions(validOptions);
      } catch (err) {
        console.error("Failed to fetch DBMS options:", err);
      } finally {
        setDbmsLoading(false);
      }
    };

    fetchDbmsOptions();
  }, []);

  // Handlers for Category selection fields
  // Fetch category options when component mounts
  useEffect(() => {
    const fetchCategoryOptions = async () => {
      setCategoryLoading(true);
      try {
        const response = await axios.get("http://localhost:8000/api/categories");
        // Filter valid options and sort alphabetically with "Others" at the end
        const validOptions = response.data
        .filter(option => option.category_name && option.slug)
        .sort((a, b) => {
          // Always place "Others" at the end
          if (a.category_name === "Others") return 1;
          if (b.category_name === "Others") return -1;
          // Sort other categories alphabetically
          return a.category_name.localeCompare(b.category_name);
        });
        setCategoryOptions(validOptions);
      } catch (err) {
        console.error("Failed to fetch category options:", err);
      } finally {
        setCategoryLoading(false);
      }
    };

    fetchCategoryOptions();
  }, []);

  // Apply all filters at once
  const applyAllFilters = (dbms = dbmsSelection, category = categorySelection, search = searchValue) => {
    let filteredResults = [...allIssues];
    
    // Apply DBMS filter if selected
    if (dbms && dbms !== "all") {
      filteredResults = filteredResults.filter(issue => String(issue.dbms_id) === String(dbms));
    }
    
    // Apply category filter if selected
    if (category && category !== "all") {
      filteredResults = filteredResults.filter(issue => String(issue.category_id) === String(category));
    }
    
    // Apply search filter if text is entered
    if (search.trim()) {
      filteredResults = filteredResults.filter(issue => 
        issue.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    // Update the issues state with filtered results
    setIssues(filteredResults);
  };

  const handleDbmsChange = (event) => {
    const selectedDbms = event.target.value;
    setDbmsSelection(selectedDbms);
    applyAllFilters(selectedDbms, categorySelection, searchValue);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategorySelection(selectedCategory);
    applyAllFilters(dbmsSelection, selectedCategory, searchValue);
  };

  // Search handler
  const handleSearch = (value) => {
    console.log('Searching for:', value);
    setSearchValue(value);
    applyAllFilters(dbmsSelection, categorySelection, value);
  };

  // Function to fetch GitHub issues
  const fetchGitHubIssues = async (page = 1) => {
    setLoading(true);
    setError(null);
    try {
      // Save current scroll position before loading new data
      const scrollPosition = window.scrollY;
      
      const response = await axiosInstance.get(`/api/github/issues?page=${page}`);
      console.log("GitHub issues fetched:", response.data);

      const fetchedIssues = response.data;
      
      // If no issues returned or fewer than expected, we've reached the end
      if (fetchedIssues.length === 0) {
        setHasMore(false);
      }
      
      if (page === 1) {
        // First page: replace all issues
        setAllIssues(fetchedIssues);
        setIssues(fetchedIssues);
        
        // Reset filters
        setDbmsSelection('');
        setCategorySelection('');
        setSearchValue('');
      } else {
        // Subsequent pages: append to existing issues
        setAllIssues(prevIssues => [...prevIssues, ...fetchedIssues]);
        setIssues(prevIssues => [...prevIssues, ...fetchedIssues]);
        
        // Restore scroll position after state update
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 100);
      }
      
      // Update current page
      setCurrentPage(page);
    } catch (error) {
      console.error("Failed to fetch GitHub issues:", error);
      setError("Failed to fetch GitHub issues. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!allIssues) {
      console.log("Calling api")
      fetchGitHubIssues(1);
    }
  }, []);

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

  // Helper function to get the category name from category ID
  const getCategoryName = (categoryId) => {
    if (!categoryId) return "Uncategorized";
    
    const category = categoryOptions.find(option => option.id === categoryId);
    return category ? category.category_name : "Unknown Category";
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
          selectionArray={["all", ...dbmsOptions.map(option => option.id)]}
          displayArray={["All", ...dbmsOptions.map(option => option.name)]}
          value={dbmsSelection}
          onChange={handleDbmsChange}
          disabled={dbmsLoading || dbmsOptions.length === 0}
        />
        <SelectionField
          label="Filter by Category"
          //2. Set Category selection fields accordingly 
          selectionArray={["all", ...categoryOptions.map(option => option.id)]}
          displayArray={["All", ...categoryOptions.map(option => option.category_name)]}
          value={categorySelection}
          onChange={handleCategoryChange}
          disabled={categoryLoading || categoryOptions.length === 0}
        />
       
      </Box>
      
      {/* Error message */}
      {error && (
        <Box mb={3} sx={{ color: "red" }}>
          <Typography>{error}</Typography>
        </Box>
      )}

      {/* GitHub Issues List */}
      <Box display="flex" flexDirection="column" gap={0}>
        {issues && issues.length > 0 ? (
          <>
            {issues.map((issue) => (
              <CustomizedCard
                key={issue.id}
                iconVariant={issue.state === "closed" ? "done" : "pending"}
                title={issue.title}
                timeToFix={getTimeMessage(issue)}
                category={getCategoryName(issue.category_id)}
                description={issue.body || "No description available."}
                url={issue.html_url} 
                repoInfo={`${issue.org_name}/${issue.repo_name}`} 
              />
            ))}
            
            {/* Load More Button */}
            {hasMore && (
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, mb: 3 }}>
                <Button 
                  variant="contained" 
                  onClick={() => fetchGitHubIssues(currentPage + 1)}
                  disabled={loading}
                  sx={{ minWidth: '200px' }}
                >
                  {loading ? (
                    <>
                      <CircularProgress size={24} sx={{ mr: 1, color: 'white' }} />
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </Button>
              </Box>
            )}
            
            {/* End of results message */}
            {!hasMore && !loading && (
              <Box sx={{ py: 3 }}>
                <Divider />
                <Box sx={{ textAlign: 'center', mt: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    You've reached the end of the list
                  </Typography>
                </Box>
              </Box>
            )}
          </>
        ) : allIssues && allIssues.length > 0 ? (
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
        ) : null}
        
        {/* Loading indicator for initial load */}
        {loading && !allIssues && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: 4 }}>
            <CircularProgress size={40} sx={{ mr: 2 }} />
            <Typography variant="h6" color="text.secondary">
              Loading issues...
            </Typography>
          </Box>
        )}
      </Box>
      {/* example  */}

    </Box>
  );
};

export default BugsList;

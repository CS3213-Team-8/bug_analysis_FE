import React, { useState, useMemo } from "react";
import { Box, CircularProgress, Button } from "@mui/material";
import CustomTabs from "../components/CustomTabs";
import ChartsGrid from "../components/ChartGrid";
import useVisualizationData from "../hooks/useVisualizationData";
import ChatDialog from "../admin/ChatDialog";
import SolutionDialog from "../admin/SolutionDialog";
import axiosInstance from "../axios";

const Visualization = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openSolutionDialog, setOpenSolutionDialog] = useState(false);
  const [solution, setSolution] = useState("");
  const { tabs, chartsData, loading: dataLoading } = useVisualizationData();
  const [userInput, setUserInput] = useState("");

  const handleTabChange = (_, newValue) => setSelectedTab(newValue);

  const handleOpenDialog = () => {
    setOpenDialog(true);
    setUserInput("");
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleCloseSolutionDialog = () => setOpenSolutionDialog(false);

  const handleSubmitDialog = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post(
        "/api/visualisation/suggest-dbms",
        {
          prompt: userInput,
        }
      );
      setSolution(response.data.suggestion);
      setOpenDialog(false);
      setOpenSolutionDialog(true);
    } catch (error) {
      console.error("Error getting DBMS suggestion:", error);
    } finally {
      setLoading(false);
    }
  };

  const dataToDisplay = useMemo(
    () =>
      selectedTab === 0 ? chartsData.allDBs : chartsData[`db${selectedTab}`],
    [chartsData, selectedTab]
  );

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
            sx={{
              mt: 1,
              mb: 1,
              ml: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              pr: 2,
            }}
          >
            <CustomTabs
              tabs={tabs}
              selectedTab={selectedTab}
              onTabChange={handleTabChange}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleOpenDialog}
            >
              Get Suggest DBMS
            </Button>
          </Box>
          <ChartsGrid
            data={dataToDisplay}
            selectedTab={selectedTab}
            tabs={tabs}
          />
      {dataLoading && (
        <Box height='100vh' mt='25vh' alignSelf='center'>
          <CircularProgress color='white' />
        </Box>
      )}
      <ChatDialog
        open={openDialog}
        onClose={handleCloseDialog}
        title="Get DBMS Suggestions"
        onSubmit={handleSubmitDialog}
        loading={loading}
        userInput={userInput}
        setUserInput={setUserInput}
      />

      <SolutionDialog
        open={openSolutionDialog}
        onClose={handleCloseSolutionDialog}
        title="DBMS Suggestion"
        solution={solution}
      />
    </Box>
  )
};

export default Visualization;

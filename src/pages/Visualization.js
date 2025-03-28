import React, { useState, useMemo } from 'react'
import { Box, CircularProgress } from '@mui/material'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'
import useVisualizationData from '../hooks/useVisualizationData'

const Visualization = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const { tabs, chartsData, loading } = useVisualizationData()

  const handleTabChange = (_, newValue) => setSelectedTab(newValue)

  const dataToDisplay = useMemo(
    () =>
      selectedTab === 0 ? chartsData.allDBs : chartsData[`db${selectedTab}`],
    [chartsData, selectedTab],
  )

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ mt: 1, mb: 1, ml: 2 }}>
        <CustomTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      </Box>
      <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} tabs={tabs} />
      {loading && (
        <Box height='100vh' mt='25vh' alignSelf='center'>
          <CircularProgress color='white' />
        </Box>
      )}
    </Box>
  )
}

export default Visualization

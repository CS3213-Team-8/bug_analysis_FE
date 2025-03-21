import React, { useState, useMemo } from 'react'
import { Box } from '@mui/material'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'
import useVisualizationData from '../hooks/useVisualizationData'

const Visualization = () => {
  const [selectedTab, setSelectedTab] = useState(0)
  const { tabs, chartsData } = useVisualizationData()

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
    </Box>
  )
}

export default Visualization

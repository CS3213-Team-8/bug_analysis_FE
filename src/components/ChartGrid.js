import React from 'react'
import { Box, Typography } from '@mui/material'
import GreyContainer from './GreyContainer'
import BugsBarChart from './BugsBarChart'
import BugsLineChart from './BugsLineChart'

const ChartGrid = ({ data, selectedTab, tabs }) => {
  if (!data || Object.entries(data)
      .slice(0, 2) // Only check the first two objects
      .every(([_, value]) => value.length === 0)
  ) {
    return null
  }

  // dynamic dbms data map
  const dbmsDataMap = tabs.reduce((acc, tab, index) => {
    if (index === 0) return acc // Skip the "ALL" tab at index 0

    const formattedKey = tab.label // Get the label from the tab object directly

    if (formattedKey) {
      // Access the data prop dynamically using the formattedKey
      acc[index] = {
        categoryDistribution: data[`categoryDistribution${formattedKey}`],
        openCloseFrequency: data[`openCloseFrequency${formattedKey}`],
        summary: data[`summary${formattedKey}`],
      }
    }
    return acc
  }, {})

  const currentTabData = dbmsDataMap[selectedTab] || {
    categoryDistribution: [],
    openCloseFrequency: [],
    summary: 'No summary available.',
  }

  const { categoryDistribution, openCloseFrequency, summary } = currentTabData

  console.log('Category Distribution Data:', categoryDistribution)
  console.log('Line Chart Data:', openCloseFrequency)

  console.log('ChartGrid data: ', data)
  console.log('ChartGrid selectedTab: ', selectedTab)

  return (
    <Box maxHeight='100vh'>
      {selectedTab === 0 ? (
        // Tab 0: Special content (handled separately)
        <Box
          flexGrow={0}
          width='100%'
          height='100%'
          display='grid'
          gap='1rem'
          sx={{
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(2, minmax(200px, 1fr))',
            },
            gridTemplateRows: 'auto auto',
            gridTemplateAreas: {
              xs: `"a" "b" "d"`,
              sm: `"a b" "d"`,
              md: `"a b" "a b" "d d" "d d"`,
            },
            p: '0rem 1rem',
            overflow: 'hidden',
          }}
        >
          <GreyContainer
            height='100%'
            gridArea='a'
            p='1.5rem 1rem'
            sx={{ overflow: 'hidden' }}
          >
            <BugsBarChart
              data={data.meanTTFAcrossDBMS}
              xAxisKey='db'
              xLabel='DBMS'
              yLabel='Mean TTF (hours)'
              chartTitle='Mean TTF (hours) Across DBMS'
            />
          </GreyContainer>
          <GreyContainer
            gridArea='b'
            p='1.5rem 1rem'
            sx={{ overflow: 'hidden' }}
          >
            <BugsBarChart
              data={data.bugsDistributionAcrossDBMS}
              xAxisKey='db'
              xLabel='DBMS'
              yLabel='Number of Bugs'
              chartTitle='No. of Bugs Found Across DBMS'
            />
          </GreyContainer>
          <GreyContainer
            gridArea='d'
            p='1.5rem 1rem'
            sx={{ overflow: 'hidden' }}
          >
            <BugsBarChart
              data={data.categoryDistributionAcrossDBMS}
              xAxisKey='category'
              xLabel='Category'
              yLabel='Number of Bugs'
              chartTitle='DBMSs Bugs Distribution Across Categories'
            />
          </GreyContainer>
        </Box>
      ) : (
        // All other tabs (selectedTab !== 0)
        <Box
          width='100%'
          height='100%'
          display='grid'
          gap='1rem'
          sx={{
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, minmax(200px, 1fr))',
            },
            gridTemplateRows: 'auto',
            gridTemplateAreas: {
              xs: `"a" "b" "c" "d"`,
              sm: `"a b" "c d"`,
              md: `"a a c" "a a c" "b b c" "b b c"`,
            },
            p: '0rem 1rem',
          }}
        >
          {/* Render dynamic content based on selected tab */}
          <GreyContainer gridArea='a' p='1.5rem 1rem'>
            <BugsBarChart
              data={categoryDistribution} // Dynamic data for each tab
              xAxisKey='category'
              xLabel='Category'
              yLabel='Number of Bugs'
              chartTitle='DBMSs Bugs Distribution Across Categories'
            />
          </GreyContainer>
          <GreyContainer gridArea='b' p='1.5rem 1rem'>
            <BugsLineChart
              data={openCloseFrequency} // Dynamic data for each tab
              xAxisKey='month'
              xLabel='Year/Month'
              yLabel='Issues Count'
              chartTitle='Opened vs Closed Issues per Month'
            />
          </GreyContainer>
          <GreyContainer gridArea='c' p='1.5rem 1rem'>
            <Typography variant='h2'>Summary Statistics</Typography>
            <Box>
              <Typography
                variant='body1'
                color='textSecondary'
                sx={{ mt: 2, fontSize: '1.25rem' }}
              >
                {summary} {/* Dynamic summary */}
              </Typography>
            </Box>
          </GreyContainer>
        </Box>
      )}
    </Box>
  )
}

export default ChartGrid

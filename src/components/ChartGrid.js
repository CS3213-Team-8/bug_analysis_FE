import React from 'react'
import { Box, Typography } from '@mui/material'
import GreyContainer from './GreyContainer'
import BugsBarChart from './BugsBarChart'
import BugsLineChart from './BugsLineChart'

const ChartGrid = ({ data, selectedTab }) => {
  if (!data) {
    return (
      <Box p='1rem'>
        <Typography variant='h6' color='textSecondary'>
          No data available at the moment.
        </Typography>
      </Box>
    )
  }

  const dbmsDataMap = {
    1: {
      categoryDistribution: data.categoryDistributionTIDB,
      openCloseFrequency: data.openCloseFrequencyTIDB,
      summary: data.summaryTIDB,
    },
    2: {
      categoryDistribution: data.categoryDistributionDuckDB,
      openCloseFrequency: data.openCloseFrequencyDuckDb,
      summary: data.summaryDuckDB,
    },
    3: {
      categoryDistribution: data.categoryDistributionCockroachDB,
      openCloseFrequency: data.openCloseFrequencyCockroachDb,
      summary: data.summaryCockroachDB,
    },
  }

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
    <>
      {selectedTab === 0 && (
        <Box
          flexGrow={1}
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

            gridTemplateRows: 'auto auto', // You can adjust this for dynamic heights
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
            gridArea='a'
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
              data={data.meanTTFAcrossDBMS}
              xAxisKey='db'
              xLabel='DBMS'
              yLabel='Mean TTF (days)'
              chartTitle='Mean TTF Across DBMS'
            />
          </GreyContainer>
        </Box>
      )}

      {selectedTab === 1 || selectedTab === 2 || selectedTab === 3 ? (
        <Box
          width='100%'
          height='100vh'
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
          <GreyContainer gridArea='a' p='1.5rem 1rem'>
            <BugsBarChart
              data={categoryDistribution}
              xAxisKey='category'
              xLabel='Category'
              yLabel='Number of Bugs'
              chartTitle='DBMSs Bugs Distribution Across Categories'
            />
          </GreyContainer>
          <GreyContainer gridArea='b' p='1.5rem 1rem'>
            <BugsLineChart
              data={openCloseFrequency}
              xAxisKey='month'
              xLabel='Year/Month'
              yLabel='Issues Count'
              chartTitle='Opened vs Closed Issues per Month'
            />
          </GreyContainer>
          <GreyContainer gridArea='c' p='1.5rem 1rem'>
            <Typography variant='h2'>Summary Statistics</Typography>
            {/* <Box></Box> */}
            <Box>
              <Typography
                variant='body1'
                color='textSecondary'
                sx={{ mt: 2, fontSize: '1.25rem' }}
              >
                {summary}
              </Typography>
            </Box>
          </GreyContainer>
        </Box>
      ) : null}
    </>
  )
}

export default ChartGrid

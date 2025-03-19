// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import GreyContainer from './GreyContainer';
// import BugsBarChart from './BugsBarChart';
// import BugsLineChart from './BugsLineChart';

// const ChartGrid = ({ data, selectedTab }) => {
//     return (
//         <>
//         { selectedTab === 0 &&
//             <Box
//             width="100%"
//             height="100%"
//             display="grid"
//             gap="1rem"
//             sx={{
//                 gridTemplateColumns: {
//                 xs: "1fr",
//                 sm: "repeat(2, 1fr)",
//                 md: "repeat(3, minmax(200px, 1fr))",
//                 },
//                 gridTemplateRows: "auto",
//                 gridTemplateAreas: {
//                 xs: `"a" "b" "c" "d"`,
//                 sm: `"a b" "c d"`,
//                 md: `"a b c" "a b c" "d d c" "d d c"`,
//                 },
//                 p: "0rem 1rem",
//                 overflow: "hidden"
//             }}
//             >
//             <GreyContainer gridArea="a" p="1.5rem 1rem">
//                 <BugsBarChart
//                 data={data.categoryDistributionAcrossDBMS}
//                 xAxisKey='category'
//                 xLabel='Category'
//                 yLabel='Number of Bugs'
//                 chartTitle='DBMSs Bugs Distribution Across Categories'
//                 />
//             </GreyContainer>
//             <GreyContainer gridArea="b" p="1.5rem 1rem">
//                 <BugsBarChart
//                 data={data.bugsDistributionAcrossDBMS}
//                 xAxisKey='db'
//                 xLabel='DBMS'
//                 yLabel='Number of Bugs'
//                 chartTitle='No. of Bugs Found Across DBMS'
//             />
//             </GreyContainer>
//             <GreyContainer gridArea="c" p="1.5rem 1rem">
//                 <Typography variant="h2">Summary Statistics</Typography>
//                 <Box></Box>
//             </GreyContainer>
//             <GreyContainer gridArea="d" p="1.5rem 1rem">
//                 <BugsLineChart
//                 data={data.openFrequencyAcrossDBMS}
//                 xAxisKey='month'
//                 xLabel='Month'
//                 yLabel='Average TTF (days)'
//                 chartTitle='No. of Open Issues per Month Across DBMS'
//             />
//             </GreyContainer>
//             </Box>
//         }

//          {/* else */}
//          { (selectedTab === 1 || selectedTab === 2 || selectedTab == 3) &&
//             <Box
//                 width="100%"
//                 height="100%"
//                 display="grid"
//                 gap="1rem"
//                 sx={{
//                 gridTemplateColumns: {
//                     xs: "1fr",
//                     sm: "repeat(2, 1fr)",
//                     md: "repeat(3, minmax(200px, 1fr))",
//                 },
//                 gridTemplateRows: "auto",
//                 gridTemplateAreas: {
//                     xs: `"a" "b" "c" "d"`,
//                     sm: `"a b" "c d"`,
//                     md: `"a a c" "a a c" "b b c" "b b c"`,
//                 },
//                 p: "0rem 1rem",
//                 }}
//             >
//                 <GreyContainer gridArea="a" p="1.5rem 1rem">
//                 <BugsBarChart
//                     data={data.categoryDistributionPerDBMS}
//                     xAxisKey='category'
//                     xLabel='Category'
//                     yLabel='Number of Bugs'
//                     chartTitle='DBMSs Bugs Distribution Across Categories'
//                 />
//                 </GreyContainer>
//                 <GreyContainer gridArea="b" p="1.5rem 1rem">
//                 <BugsLineChart
//                     data={data.openFrequencyPerDBMS}
//                     xAxisKey='month'
//                     xLabel='Month'
//                     yLabel='Number of Open Issues'
//                     chartTitle='No. of Open Issues per Month'
//                 />
//                 </GreyContainer>
//                 <GreyContainer gridArea="c" p="1.5rem 1rem">
//                 <Typography variant="h2">Summary Statistics</Typography>
//                 <Box></Box>
//                 </GreyContainer>
//             </Box>
//          }

//         </>

//     );
// };

// export default ChartGrid;

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

  // Dynamically access the correct data for selected DBMS tab
  const dbmsDataMap = {
    1: {
      categoryDistribution: data.categoryDistributionTIDB,
      openCloseFrequency: data.openCloseFrequencyTIDB,
    },
    2: {
      categoryDistribution: data.categoryDistributionDuckDB,
      openCloseFrequency: data.openCloseFrequencyDuckDb,
    },
    3: {
      categoryDistribution: data.categoryDistributionCockroachDB,
      openCloseFrequency: data.openCloseFrequencyCockroachDb,
    },
  }

  const currentTabData = dbmsDataMap[selectedTab] || {
    categoryDistribution: [],
    openCloseFrequency: [],
  }

  const { categoryDistribution, openCloseFrequency } = currentTabData

  console.log('Category Distribution Data:', categoryDistribution)
  console.log('Line Chart Data:', openCloseFrequency)

  console.log('ChartGrid data: ', data)
  console.log('ChartGrid selectedTab: ', selectedTab)


  return (
    <>
      {selectedTab === 0 && (
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
              md: `"a b c" "a b c" "d d c" "d d c"`,
            },
            p: '0rem 1rem',
            overflow: 'hidden',
          }}
        >
          <GreyContainer gridArea='a' p='1.5rem 1rem'>
            <BugsBarChart
              data={data.categoryDistributionAcrossDBMS}
              xAxisKey='category'
              xLabel='Category'
              yLabel='Number of Bugs'
              chartTitle='DBMSs Bugs Distribution Across Categories'
            />
          </GreyContainer>
          <GreyContainer gridArea='b' p='1.5rem 1rem'>
            <BugsBarChart
              data={data.bugsDistributionAcrossDBMS}
              xAxisKey='db'
              xLabel='DBMS'
              yLabel='Number of Bugs'
              chartTitle='No. of Bugs Found Across DBMS'
            />
          </GreyContainer>
          <GreyContainer gridArea='c' p='1.5rem 1rem'>
            <Typography variant='h2'>Summary Statistics</Typography>
            <Box></Box>
          </GreyContainer>
          <GreyContainer gridArea='d' p='1.5rem 1rem'>
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
            <Box></Box>
          </GreyContainer>
        </Box>
      ) : null}
    </>
  )
}

export default ChartGrid

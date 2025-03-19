// import React, { useEffect, useState } from 'react'
// import { Box } from '@mui/material'
// import CustomTabs from '../components/CustomTabs'
// import ChartsGrid from '../components/ChartGrid'

// // Some mock data for testing purpose
// // ALL
// const categoryDistributionAcrossDBMS = [
//   { category: 'Critical', values: { TIDB: 10, DuckDB: 8, CockroachDB: 6, Test: 5 } },
//   { category: 'Moderate', values: { TIDB: 15, DuckDB: 10, CockroachDB: 9, Test: 4 } },
//   { category: 'Low', values: { TIDB: 20, DuckDB: 12, CockroachDB: 11, Test: 3 } },
// ]

// const bugsDistributionAcrossDBMS = [
//   { db: 'TIDB', values: { TIDB: 8 } },
//   { db: 'DuckB', values: { DuckDB: 10} },
//   { db: 'CockroachDB', values: { CockroachDB: 12} },
// ]

// const openFrequencyAcrossDBMS = [
//   { month: 'Jan', values: { TIDB: 5.2, DuckDB: 4.8, CockroachDB: 6.1 } },
//   { month: 'Feb', values: { TIDB: 4.6, DuckDB: 4.3, CockroachDB: 5.9 } },
//   { month: 'Mar', values: { TIDB: 5.0, DuckDB: 4.5, CockroachDB: 5.7 } },
//   { month: 'Apr', values: { TIDB: 5.1, DuckDB: 4.9, CockroachDB: 6.2 } },
//   { month: 'May', values: { TIDB: 4.8, DuckDB: 4.4, CockroachDB: 5.8 } },
//   { month: 'Jun', values: { TIDB: 4.0, DuckDB: 4.3, CockroachDB: 1.8 } },
//   { month: 'Jul', values: { TIDB: 4.4, DuckDB: 4.8, CockroachDB: 2.8 } },
//   { month: 'Aug', values: { TIDB: 4.2, DuckDB: 4.2, CockroachDB: 3.8 } },
//   { month: 'Sep', values: { TIDB: 5.8, DuckDB: 5.1, CockroachDB: 4.8 } },
//   { month: 'Oct', values: { TIDB: 6.8, DuckDB: 5.8, CockroachDB: 5.8 } },
//   { month: 'Nov', values: { TIDB: 7.8, DuckDB: 5.0, CockroachDB: 6.8 } },
//   { month: 'Dec', values: { TIDB: 2.8, DuckDB: 5.4, CockroachDB: 7.8 } },

// ]

// // Each DBMS -- DuckDB example
// const categoryDistributionDuckDB = [
//   { category: 'Critical', values: { DuckDB: 10 } },
//   { category: 'Moderate', values: { DuckDB: 20 } },
//   { category: 'Low', values: { DuckDB: 30 } }
// ]

// const openFrequencyDuckDB = [
//   { month: 'Jan', values: { DuckDB: 5 } },
//   { month: 'Feb', values: { DuckDB: 4.5 } },
//   { month: 'Mar', values: { DuckDB: 6 } },
//   { month: 'Apr', values: { DuckDB: 4.2 } },
//   { month: 'May', values: { DuckDB: 3.8 } },
//   { month: 'Jun', values: { DuckDB: 5.1 } },
//   { month: 'Jul', values: { DuckDB: 4.7 } },
//   { month: 'Aug', values: { DuckDB: 4.6 } },
//   { month: 'Sep', values: { DuckDB: 5.2 } },
//   { month: 'Oct', values: { DuckDB: 3.9 } },
//   { month: 'Nov', values: { DuckDB: 4.1 } },
//   { month: 'Dec', values: { DuckDB: 4.4 } },
// ]

// // Each DBMS -- TIDB example
// const categoryDistributionTIDB = [
//   { category: 'Critical', values: { TIDB: 10 } },
//   { category: 'Moderate', values: { TIDB: 20 } },
//   { category: 'Low', values: { TIDB: 30 } }
// ]

// const openFrequencyTIDB = [
//   { month: 'Jan', values: { TIDB: 5 } },
//   { month: 'Feb', values: { TIDB: 4.5 } },
//   { month: 'Mar', values: { TIDB: 6 } },
//   { month: 'Apr', values: { TIDB: 4.2 } },
//   { month: 'May', values: { TIDB: 3.8 } },
//   { month: 'Jun', values: { TIDB: 5.1 } },
//   { month: 'Jul', values: { TIDB: 4.7 } },
//   { month: 'Aug', values: { TIDB: 4.6 } },
//   { month: 'Sep', values: { TIDB: 5.2 } },
//   { month: 'Oct', values: { TIDB: 3.9 } },
//   { month: 'Nov', values: { TIDB: 4.1 } },
//   { month: 'Dec', values: { TIDB: 4.4 } },
// ]

// // Each DBMS -- CockroachDB example
// const categoryDistributionCDB = [
//   { category: 'Critical', values: { CockroachDB: 10 } },
//   { category: 'Moderate', values: { CockroachDB: 20 } },
//   { category: 'Low', values: { CockroachDB: 30 } }
// ]

// const openFrequencyCDB = [
//   { month: 'Jan', values: { CockroachDB: 5 } },
//   { month: 'Feb', values: { CockroachDB: 4.5 } },
//   { month: 'Mar', values: { CockroachDB: 6 } },
//   { month: 'Apr', values: { CockroachDB: 4.2 } },
//   { month: 'May', values: { CockroachDB: 3.8 } },
//   { month: 'Jun', values: { CockroachDB: 5.1 } },
//   { month: 'Jul', values: { CockroachDB: 4.7 } },
//   { month: 'Aug', values: { CockroachDB: 4.6 } },
//   { month: 'Sep', values: { CockroachDB: 5.2 } },
//   { month: 'Oct', values: { CockroachDB: 3.9 } },
//   { month: 'Nov', values: { CockroachDB: 4.1 } },
//   { month: 'Dec', values: { CockroachDB: 4.4 } },
// ]

// const Visualization = () => {

//   const [chartsData, setChartsData] = useState({
//     allDBs: {
//       categoryDistributionAcrossDBMS: [],
//       bugsDistributionAcrossDBMS: [],
//       openFrequencyAcrossDBMS: []
//     },
//     db1: {
//       categoryDistributionPerDBMS: [],
//       openFrequencyPerDBMS: []
//     },
//     db2: {
//       categoryDistributionPerDBMS: [],
//       openFrequencyPerDBMS: []
//     },
//     db3: {
//       categoryDistributionPerDBMS: [],
//       openFrequencyPerDBMS: []
//     },
//   })

//   const [selectedTab, setSelectedTab] = useState(0)

//   useEffect(() => {

//     setChartsData({
//       allDBs: {
//         categoryDistributionAcrossDBMS: categoryDistributionAcrossDBMS,
//         bugsDistributionAcrossDBMS: bugsDistributionAcrossDBMS,
//         openFrequencyAcrossDBMS: openFrequencyAcrossDBMS
//       },
//       db1: {
//         categoryDistributionPerDBMS: categoryDistributionTIDB,
//         openFrequencyPerDBMS: openFrequencyTIDB
//       },
//       db2: {
//         categoryDistributionPerDBMS: categoryDistributionDuckDB,
//         openFrequencyPerDBMS: openFrequencyDuckDB
//       },
//       db3: {
//         categoryDistributionPerDBMS: categoryDistributionCDB,
//         openFrequencyPerDBMS: openFrequencyCDB
//       },

//     })
//   }, [])

//   const handleTabChange = (event, newValue) => {
//     setSelectedTab(newValue);
//   };

//   const tabs = [
//     { label: 'ALL' },
//     { label: 'TIDB' },
//     { label: 'DuckDB' },
//     { label: 'CockroachDB' },
//   ];

//   const filterDatabyTab = (data, selectedTab) => {
//     if (selectedTab === 0) {
//       return data.allDBs;
//     }

//     // filter based selected tab
//     const dbKey = selectedTab === 1 ? 'db1' : selectedTab === 2 ?'db2' : selectedTab === 3 ? 'db3': '';
//     return data[dbKey];
//   }

//   const dataToDisplay = filterDatabyTab(chartsData, selectedTab);

//   return (
//     <>
//       <Box sx={{ mt: 1, mb: 1, ml: 2 }}>
//         <CustomTabs tabs={tabs} selectedTab={selectedTab} onTabChange={handleTabChange} />
//       </Box>
//       <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} />

//     </>
//   )
// }

// export default Visualization

import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import axios from 'axios'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'

const API_BASE_URL = 'https://bug-analysis-be.onrender.com/api/visualisation'

const Visualization = () => {
  const dbmsList = ['tidb', 'duck-db']

  const [chartsData, setChartsData] = useState(() => {
    const initialData = {
      allDBs: {
        categoryDistributionAcrossDBMS: [],
        bugsDistributionAcrossDBMS: [],
        meanTTFAcrossDBMS: [],
      },
    }

    dbmsList.forEach((dbmsSlug, index) => {
      const dbKey = `db${index + 1}`
      initialData[dbKey] = {
        categoryDistributionTIDB: [],
        openCloseFrequencyTIDB: [],
      }
    })

    return initialData
  })

  const [selectedTab, setSelectedTab] = useState(
    0,
    // Number.parseInt(localStorage.getItem('selectedTab'), 10) || 0
  )

  const fetchChartData = async () => {
    try {
      // Fetch category distribution data
      const categoryResponse = await axios.get(
        `${API_BASE_URL}/category-quantities`,
      )
      const categoryData = categoryResponse.data

      if (!Array.isArray(categoryData)) {
        throw new Error('Invalid category distribution API response format')
      }

      // Transform categoryDistributionAcrossDBMS
      const categoryDistributionAcrossDBMS =
        transformCategoryDistribution(categoryData)

      // Fetch bugs distribution data for each DBMS
      const bugsPromises = dbmsList.map(async (dbmsSlug) => {
        const response = await axios.get(
          `${API_BASE_URL}/${dbmsSlug}/category-quantities`,
        )
        return computeBugsDistribution(response.data, dbmsSlug)
      })

      const bugsResults = await Promise.all(bugsPromises)
      // const bugsDistributionAcrossDBMS = [].concat(...bugsResults)
      const bugsDistributionAcrossDBMS = bugsResults.map((result) => {
        const [dbmsName, values] = Object.entries(result.values)[0]
        return { db: dbmsName, values: { dbmsName: values } }
      })

      console.log('Bugs Results:', bugsResults) // Debug computed data
      console.log('Bugs Distribution Across DBMS:', bugsDistributionAcrossDBMS) // Debug transformed data

      // Fetch mean TTF data
      const ttfResponse = await axios.get(`${API_BASE_URL}/analysis/ttf`)
      const ttfData = ttfResponse.data

      if (!Array.isArray(ttfData)) {
        throw new Error('Invalid TTF API response format')
      }

      // Transform meanTTFAcrossDBMS data
      const meanTTFAcrossDBMS = ttfData.map((item) => ({
        db: item.dbms_name,
        values: { values: item.mean_TTF },
      }))

      console.log('Mean TTF Across DBMS:', meanTTFAcrossDBMS) // Debug transformed data

      // // Generalized fetching for category distribution by DBMS slug
      // const categoryPromises = dbmsList.map(async (dbmsSlug) => {
      //   const response = await axios.get(
      //     `${API_BASE_URL}/${dbmsSlug}/category-quantities`,
      //   )
      //   return {
      //     dbms: dbmsSlug,
      //     data: response.data.map((item) => ({
      //       category: item.category_name,
      //       values: { [item.dbms_name]: item.quantity },
      //     })),
      //   }
      // })

      // const categoryResults = await Promise.all(categoryPromises)

      // Fetch category distribution data for each DBMS
      const categoryResults = await Promise.all(
        dbmsList.map(async (dbmsSlug) => {
          try {
            const response = await axios.get(
              `${API_BASE_URL}/${dbmsSlug}/category-quantities`,
            )
            return {
              dbms: dbmsSlug,
              data: response.data.map((item) => ({
                category: item.category_name,
                values: { [item.dbms_name]: item.quantity },
              })),
            }
          } catch (error) {
            console.warn(`No data available for ${dbmsSlug}:`, error)
            return { dbms: dbmsSlug, data: [] } // Return empty data if the API fails
          }
        }),
      )

      // // Fetch opened/closed per month for each DBMS
      // const analysisPromises = dbmsList.map(async (dbmsSlug) => {
      //   const response = await axios.get(`${API_BASE_URL}/${dbmsSlug}/analysis`)
      //   const { opened_per_month, closed_per_month, months_tracked } =
      //     response.data

      //   return {
      //     dbms: dbmsSlug,
      //     data: months_tracked.map((month, index) => ({
      //       month,
      //       opened: opened_per_month[index] || 0, // Handle missing values gracefully
      //       closed: closed_per_month[index] || 0,
      //     })),
      //   }
      // })

      // const analysisResults = await Promise.all(analysisPromises)

      // Fetch opened/closed per month data for each DBMS
      const analysisResults = await Promise.all(
        dbmsList.map(async (dbmsSlug) => {
          try {
            const response = await axios.get(
              `${API_BASE_URL}/${dbmsSlug}/analysis`,
            )
            const { opened_per_month, closed_per_month, months_tracked } =
              response.data
            return {
              dbms: dbmsSlug,
              data: months_tracked.map((month, index) => ({
                month,
                opened: opened_per_month[index] || 0,
                closed: closed_per_month[index] || 0,
              })),
            }
          } catch (error) {
            console.warn(`No data available for ${dbmsSlug}:`, error)
            return { dbms: dbmsSlug, data: [] } // Return empty data if the API fails
          }
        }),
      )

      // Map results into specific DBMS keys (e.g., `db1`, `db2`, etc.)
      const categoryDistributionPerDBMS = categoryResults.reduce(
        (acc, { dbms, data }) => {
          if (dbms === 'tidb') {
            acc.db1 = {
              categoryDistributionTIDB: data, // Add TIDB-specific category distribution
            }
          } else if (dbms === 'duck-db') {
            acc.db2 = {
              categoryDistributionDuckDB: data, // Add DuckDB-specific category distribution
            }
          } else if (dbms === 'cockroach-db') {
            acc.db3 = {
              categoryDistributionCockroachDB: data, // Add CockroachDB-specific category distribution
            }
          }
          return acc
        },
        {},
      )

      const analysisPerDBMS = analysisResults.reduce((acc, { dbms, data }) => {
        if (dbms === 'tidb') {
          acc.db1 = {
            ...acc.db1,
            openCloseFrequencyTIDB: data, // Add line chart data for opened/closed issues
          }
        } else if (dbms === 'duck-db') {
          acc.db2 = {
            ...acc.db2,
            openCloseFrequencyDuckDb: data, // Add DuckDB line chart data
          }
        } else if (dbms === 'cockroach-db') {
          acc.db3 = {
            ...acc.db3,
            openCloseFrequencyCockroachDb: data, // Add CockroachDB line chart data
          }
        }
        return acc
      }, categoryDistributionPerDBMS)

      console.log(
        'Category Distribution Per DBMS:',
        categoryDistributionPerDBMS,
      )

      console.log('Analysis Data Per DBMS:', analysisPerDBMS)

      setChartsData({
        allDBs: {
          categoryDistributionAcrossDBMS,
          bugsDistributionAcrossDBMS,
          meanTTFAcrossDBMS,
        },
        ...categoryDistributionPerDBMS,
        ...analysisPerDBMS,
      })

      console.log('Updated Charts Data:', chartsData) // Debug final state
    } catch (error) {
      console.error('Error fetching chart data:', error)
    }
  }

  const computeBugsDistribution = (data, dbmsSlug) => {
    const totalBugs = data.reduce((total, item) => total + item.quantity, 0)
    const dbmsName = data.length > 0 ? data[0].dbms_name.trim() : dbmsSlug // Normalize name

    // Return the expected format with `values`
    return { values: { [dbmsName]: totalBugs } }
  }

  // Transform API data for categoryDistributionAcrossDBMS
  const transformCategoryDistribution = (data) => {
    const dbmsSet = new Set(data.map((item) => item.dbms_name))
    const dbmsArray = Array.from(dbmsSet)

    return data.reduce((acc, item) => {
      const { category_name, dbms_name, quantity } = item

      let categoryEntry = acc.find((entry) => entry.category === category_name)
      if (!categoryEntry) {
        categoryEntry = { category: category_name, values: {} }
        dbmsArray.forEach((db) => (categoryEntry.values[db] = 0)) // Initialize with 0
        acc.push(categoryEntry)
      }

      categoryEntry.values[dbms_name] = quantity

      return acc
    }, [])
  }

  useEffect(() => {
    fetchChartData()
  }, [])

  // Update selectedTab state and save to localStorage
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
    // localSftorage.setItem('selectedTab', newValue) // Save the selected tab index
  }

  const tabs = [
    { label: 'ALL' },
    { label: 'TIDB' },
    { label: 'DuckDB' },
    { label: 'CockroachDB' },
  ]

  const filterDatabyTab = (data, selectedTab) => {
    if (selectedTab === 0) {
      return data.allDBs
    }

    // Filter based on the selected tab
    const dbKey =
      selectedTab === 1
        ? 'db1'
        : selectedTab === 2
        ? 'db2'
        : selectedTab === 3
        ? 'db3'
        : ''
    return data[dbKey]
  }

  const dataToDisplay = filterDatabyTab(chartsData, selectedTab)

  console.log('Data to Display:', dataToDisplay)

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
      <Box sx={{ mt: 1, mb: 1, ml: 2, }}>
        <CustomTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      </Box>
      <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} />
    </Box>
  )
}

export default Visualization

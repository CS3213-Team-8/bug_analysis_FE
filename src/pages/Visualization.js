import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'

// Some mock data for testing purpose
// ALL 
const categoryDistributionAcrossDBMS = [
  { category: 'Critical', values: { TIDB: 10, DuckDB: 8, CockroachDB: 6, Test: 5 } },
  { category: 'Moderate', values: { TIDB: 15, DuckDB: 10, CockroachDB: 9, Test: 4 } },
  { category: 'Low', values: { TIDB: 20, DuckDB: 12, CockroachDB: 11, Test: 3 } },
]

const bugsDistributionAcrossDBMS = [
  { db: 'TIDB', values: { TIDB: 8 } },
  { db: 'DuckB', values: { DuckDB: 10} },
  { db: 'CockroachDB', values: { CockroachDB: 12} },
]

const openFrequencyAcrossDBMS = [
  { month: 'Jan', values: { TIDB: 5.2, DuckDB: 4.8, CockroachDB: 6.1 } },
  { month: 'Feb', values: { TIDB: 4.6, DuckDB: 4.3, CockroachDB: 5.9 } },
  { month: 'Mar', values: { TIDB: 5.0, DuckDB: 4.5, CockroachDB: 5.7 } },
  { month: 'Apr', values: { TIDB: 5.1, DuckDB: 4.9, CockroachDB: 6.2 } },
  { month: 'May', values: { TIDB: 4.8, DuckDB: 4.4, CockroachDB: 5.8 } },
  { month: 'Jun', values: { TIDB: 4.0, DuckDB: 4.3, CockroachDB: 1.8 } },
  { month: 'Jul', values: { TIDB: 4.4, DuckDB: 4.8, CockroachDB: 2.8 } },
  { month: 'Aug', values: { TIDB: 4.2, DuckDB: 4.2, CockroachDB: 3.8 } },
  { month: 'Sep', values: { TIDB: 5.8, DuckDB: 5.1, CockroachDB: 4.8 } },
  { month: 'Oct', values: { TIDB: 6.8, DuckDB: 5.8, CockroachDB: 5.8 } },
  { month: 'Nov', values: { TIDB: 7.8, DuckDB: 5.0, CockroachDB: 6.8 } },
  { month: 'Dec', values: { TIDB: 2.8, DuckDB: 5.4, CockroachDB: 7.8 } },

]

// Each DBMS -- DuckDB example
const categoryDistributionDuckDB = [
  { category: 'Critical', values: { DuckDB: 10 } },
  { category: 'Moderate', values: { DuckDB: 20 } },
  { category: 'Low', values: { DuckDB: 30 } }
]

const openFrequencyDuckDB = [
  { month: 'Jan', values: { DuckDB: 5 } },
  { month: 'Feb', values: { DuckDB: 4.5 } },
  { month: 'Mar', values: { DuckDB: 6 } },
  { month: 'Apr', values: { DuckDB: 4.2 } },
  { month: 'May', values: { DuckDB: 3.8 } },
  { month: 'Jun', values: { DuckDB: 5.1 } },
  { month: 'Jul', values: { DuckDB: 4.7 } },
  { month: 'Aug', values: { DuckDB: 4.6 } },
  { month: 'Sep', values: { DuckDB: 5.2 } },
  { month: 'Oct', values: { DuckDB: 3.9 } },
  { month: 'Nov', values: { DuckDB: 4.1 } },
  { month: 'Dec', values: { DuckDB: 4.4 } },
]

// Each DBMS -- TIDB example
const categoryDistributionTIDB = [
  { category: 'Critical', values: { TIDB: 10 } },
  { category: 'Moderate', values: { TIDB: 20 } },
  { category: 'Low', values: { TIDB: 30 } }
]

const openFrequencyTIDB = [
  { month: 'Jan', values: { TIDB: 5 } },
  { month: 'Feb', values: { TIDB: 4.5 } },
  { month: 'Mar', values: { TIDB: 6 } },
  { month: 'Apr', values: { TIDB: 4.2 } },
  { month: 'May', values: { TIDB: 3.8 } },
  { month: 'Jun', values: { TIDB: 5.1 } },
  { month: 'Jul', values: { TIDB: 4.7 } },
  { month: 'Aug', values: { TIDB: 4.6 } },
  { month: 'Sep', values: { TIDB: 5.2 } },
  { month: 'Oct', values: { TIDB: 3.9 } },
  { month: 'Nov', values: { TIDB: 4.1 } },
  { month: 'Dec', values: { TIDB: 4.4 } },
]

// Each DBMS -- CockroachDB example
const categoryDistributionCDB = [
  { category: 'Critical', values: { CockroachDB: 10 } },
  { category: 'Moderate', values: { CockroachDB: 20 } },
  { category: 'Low', values: { CockroachDB: 30 } }
]

const openFrequencyCDB = [
  { month: 'Jan', values: { CockroachDB: 5 } },
  { month: 'Feb', values: { CockroachDB: 4.5 } },
  { month: 'Mar', values: { CockroachDB: 6 } },
  { month: 'Apr', values: { CockroachDB: 4.2 } },
  { month: 'May', values: { CockroachDB: 3.8 } },
  { month: 'Jun', values: { CockroachDB: 5.1 } },
  { month: 'Jul', values: { CockroachDB: 4.7 } },
  { month: 'Aug', values: { CockroachDB: 4.6 } },
  { month: 'Sep', values: { CockroachDB: 5.2 } },
  { month: 'Oct', values: { CockroachDB: 3.9 } },
  { month: 'Nov', values: { CockroachDB: 4.1 } },
  { month: 'Dec', values: { CockroachDB: 4.4 } },
]


const Visualization = () => {

  const [chartsData, setChartsData] = useState({
    allDBs: {
      categoryDistributionAcrossDBMS: [],
      bugsDistributionAcrossDBMS: [],
      openFrequencyAcrossDBMS: []
    },
    db1: {
      categoryDistributionPerDBMS: [],
      openFrequencyPerDBMS: []
    },
    db2: {
      categoryDistributionPerDBMS: [],
      openFrequencyPerDBMS: []
    },
    db3: {
      categoryDistributionPerDBMS: [],
      openFrequencyPerDBMS: []
    },
  })

  const [selectedTab, setSelectedTab] = useState(0)

  useEffect(() => {


    setChartsData({
      allDBs: {
        categoryDistributionAcrossDBMS: categoryDistributionAcrossDBMS,
        bugsDistributionAcrossDBMS: bugsDistributionAcrossDBMS,
        openFrequencyAcrossDBMS: openFrequencyAcrossDBMS
      },
      db1: {
        categoryDistributionPerDBMS: categoryDistributionTIDB,
        openFrequencyPerDBMS: openFrequencyTIDB
      },
      db2: {
        categoryDistributionPerDBMS: categoryDistributionDuckDB,
        openFrequencyPerDBMS: openFrequencyDuckDB
      },
      db3: {
        categoryDistributionPerDBMS: categoryDistributionCDB,
        openFrequencyPerDBMS: openFrequencyCDB
      },


    })
  }, [])

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabs = [
    { label: 'ALL' },
    { label: 'TIDB' },
    { label: 'DuckDB' },
    { label: 'CockroachDB' },
  ];

  const filterDatabyTab = (data, selectedTab) => {
    if (selectedTab === 0) {
      return data.allDBs;
    }

    // filter based selected tab
    const dbKey = selectedTab === 1 ? 'db1' : selectedTab === 2 ?'db2' : selectedTab === 3 ? 'db3': '';
    return data[dbKey];
  }

  const dataToDisplay = filterDatabyTab(chartsData, selectedTab);

  return (
    <>
      <Box sx={{ mt: 1, mb: 1, ml: 2 }}>
        <CustomTabs tabs={tabs} selectedTab={selectedTab} onTabChange={handleTabChange} />
      </Box>
      <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} />

    </>
  )
}

export default Visualization

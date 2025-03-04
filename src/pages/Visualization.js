import React from 'react'
import BugsBarChart from '../components/BugsBarChart'
import BugsLineChart from '../components/BugsLineChart'

// Some mock data for testing purpose
const multiCategorizationData = [
  { category: 'Critical', values: { TIDB: 10, DuckDB: 8, CockroachDB: 6, Test: 5 } },
  { category: 'Moderate', values: { TIDB: 15, DuckDB: 10, CockroachDB: 9, Test: 4 } },
  { category: 'Low', values: { TIDB: 20, DuckDB: 12, CockroachDB: 11, Test: 3 } },
]

const singleBugsData = [
  { db: 'TIDB', values: { TIDB: 8} },
  { db: 'TIDB', values: { TIDB: 10} },
  { db: 'TIDB', values: { TIDB: 12} },
]

// Some mock data for testing purpose
const singleAverageTtfData = [
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

const multiAverageTtfData = [
  { month: 'Jan', values: { TIDB: 5.2, DuckDB: 4.8, CockroachDB: 6.1 } },
  { month: 'Feb', values: { TIDB: 4.6, DuckDB: 4.3, CockroachDB: 5.9 } },
  { month: 'Mar', values: { TIDB: 5.0, DuckDB: 4.5, CockroachDB: 5.7 } },
  { month: 'Apr', values: { TIDB: 5.1, DuckDB: 4.9, CockroachDB: 6.2 } },
  { month: 'May', values: { TIDB: 4.8, DuckDB: 4.4, CockroachDB: 5.8 } },
]

const Visualization = () => {
  return (
    <div>
      <h1>Visualization Page</h1>
      <BugsBarChart
        data={multiCategorizationData}
        xAxisKey='category'
        xLabel='Category'
        yLabel='Number of Bugs'
        chartTitle='DBMSs Bugs Distribution Across Categories'
      />

      <BugsBarChart
        data={singleBugsData}
        xAxisKey='db'
        xLabel='DBMS'
        yLabel='Number of Bugs'
        chartTitle='DBMSs Bugs Found'
      />

      <BugsLineChart
        data={multiAverageTtfData}
        xAxisKey='month'
        xLabel='Month'
        yLabel='Average TTF (days)'
        chartTitle='Average Time-to-Fix (TTF) per Month Across DBMS'
      />

      <BugsLineChart
        data={singleAverageTtfData}
        xAxisKey='month'
        xLabel='Month'
        yLabel='Average TTF (days)'
        chartTitle='DuckDB Average Time-to-Fix (TTF) per Month'
      />
    </div>
  )
}

export default Visualization

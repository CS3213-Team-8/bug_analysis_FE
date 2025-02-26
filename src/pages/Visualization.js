import React from 'react'
import BugsBarChart from '../components/BugsBarChart'

// Some mock data for testing purpose
const multiCategorizationData = [
  { category: 'Critical', values: { TIDB: 10, DuckDB: 8, CockroachDB: 6 } },
  { category: 'Moderate', values: { TIDB: 15, DuckDB: 10, CockroachDB: 9 } },
  { category: 'Low', values: { TIDB: 20, DuckDB: 12, CockroachDB: 11 } },
]

const singleBugsData = [
  { db: 'TIDB', values: { TIDB: 8, DuckDB: 0, CockroachDB: 0 } },
  { db: 'DuckDB', values: { TIDB: 0, DuckDB: 10, CockroachDB: 0 } },
  { db: 'CockroachDB', values: { TIDB: 0, DuckDB: 0, CockroachDB: 12 } },
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
    </div>
  )
}

export default Visualization

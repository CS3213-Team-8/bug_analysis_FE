import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  // Legend,
  ResponsiveContainer,
  Label,
} from 'recharts'

const BugsLineChart = ({ data, xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()

  const dbmsColors = {
    TIDB: '#4DB6AC',
    DuckDB: '#FF7043',
    CockroachDB: '#64B5F6',
  }

  const dbmsKeys = Array.from(
    new Set(data.flatMap((item) => Object.keys(item.values))),
  )

  const filteredData = data.map((item) => {
    const filteredValues = Object.fromEntries(
      Object.entries(item.values).filter(([key, value]) => value > 0),
    )
    return { ...item, values: filteredValues }
  })

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height={400}>
        <LineChart data={filteredData}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} />
          <YAxis>
            <Label
              value={yLabel}
              offset={-1}
              angle={-90}
              position='left'
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip />
          {/* <Legend /> */}
          {dbmsKeys.map((key) => (
            <Line
              key={key}
              type='linear'
              name={key}
              dataKey={`values.${key}`}
              stroke={dbmsColors[key] || '#8884d8'}
              strokeWidth={2.5}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  chartContainer: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  chartTitle: {
    marginBottom: '10px',
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}))

export default BugsLineChart

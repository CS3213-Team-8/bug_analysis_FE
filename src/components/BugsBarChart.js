import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts'

function CustomizedTick(props) {
  const { x, y, stroke, payload } = props

  // Split the payload value into words and create tspans for each word
  const tspans = payload.value.split(' ').map((value, index) => (
    <tspan key={index} textAnchor='middle' x='0' dy={index === 0 ? 15 : 15}>
      {value}
    </tspan>
  ))

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} fill='#666' fontSize='16px' fontWeight={500}>
        {tspans}
      </text>
    </g>
  )
}

const BugsBarChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()
  const dbmsColors = {
    TIDB: '#4DB6AC', // Teal for TIDB
    'Duck DB': '#FF7043', // Coral for DuckDB
    'Cockroach DB': '#64B5F6', // Light blue for CockroachDB
  }

  const isMultiBarChart = data?.some(
    (item) =>
      item?.values && Object.keys(item.values).some((key) => key in dbmsColors),
  )
  console.log('BugsBarChart isMultiBarChart: ', isMultiBarChart)

  const dbmsKeys = isMultiBarChart
    ? Array.from(
        new Set(
          data.flatMap((item) =>
            item?.values ? Object.keys(item.values) : [],
          ) || [],
        ),
      )
    : data.map((item) => item[xAxisKey]) // For single-bar chart, use x-axis values as keys

  const filteredData =
    data?.map((item) => {
      if (isMultiBarChart) {
        // Multi-bar chart: no additional transformation needed
        return {
          ...item,
          values: item.values,
        }
      }
      // Single-bar chart: flatten `values`
      return {
        ...item,
        values: { [item[xAxisKey]]: item.values?.values },
      }
    }) || []

  console.log('BugsBarChart filteredData: ', filteredData)
  console.log('BugsBarChart dbmsKeys: ', dbmsKeys)
  console.log('BugsBarChart Data:', data)

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height={220}>
        <BarChart
          data={filteredData}
          height='250'
          margin={{ top: 5 }}
          {...{
            overflow: 'visible',
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} tick={<CustomizedTick />} angle={-35} />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgb(206, 194, 194)',
              border: 'solid 1px #000',
              borderRadius: '8px',
              color: '#000',
              fontSize: '18px',
              fontWeight: '600',
            }}
          />
          {isMultiBarChart
            ? dbmsKeys.map((key) => (
                <Bar
                  key={key}
                  dataKey={`values.${key}`}
                  name={key}
                  fill={dbmsColors[key] || '#8884d8'}
                />
              ))
            : dbmsKeys.map((key, index) => (
                <Bar
                  key={index}
                  dataKey={`values.${key}`}
                  name={key}
                  fill={dbmsColors[key] || '#8884d8'}
                />
              ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

const useStyles = makeStyles(() => ({
  chartContainer: {
    textAlign: 'center',
  },
  chartTitle: {
    marginBottom: '10px',
    fontSize: '1.rem',
    fontWeight: 600,
  },
}))

export default BugsBarChart

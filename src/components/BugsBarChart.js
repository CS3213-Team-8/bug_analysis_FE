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

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    console.log('payload: ', payload)

    // Filter out unwanted entries (e.g., DuckDB, CockroachDB)
    const filteredPayload = payload.filter((item) => item.name === label)

    return (
      <div
        style={{
          backgroundColor: 'rgb(206, 194, 194)',
          border: 'solid 1px #000',
          borderRadius: '8px',
          color: '#000',
          fontSize: '18px',
          fontWeight: '600',
          padding: '10px',
        }}
      >
        <p>
          <strong>{label}</strong>
        </p>
        {filteredPayload.map((item, index) => (
          <p key={index} style={{ color: item.color }}>
            {`${item.name}: ${item.value}`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

const BugsBarChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()
  const multiChartColors = {
    'TIDB': '#38B5A9', // Teal for TIDB
    'Duck DB': '#FF7043', // Coral for DuckDB
    'Cockroach DB': '#3384C4', // Light blue for CockroachDB
  }

  const singleChartColors = ['#FF7043', '#38B5A9', '#3384c4']

  const isMultiBarChart = data?.some(
    (item) =>
      item?.values &&
      Object.keys(item.values).some((key) => key in multiChartColors),
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
    data?.map((item, index) => {
      if (isMultiBarChart) {
        return {
          ...item,
          values: item.values,
        }
      }
      return {
        db: item.db,
        value: item.values,
        fill: singleChartColors[index % singleChartColors.length],
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
          barGap={isMultiBarChart ? undefined : -1}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} tick={<CustomizedTick />} angle={-35} />
          <YAxis />
          {isMultiBarChart ? (
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
          ) : (
            <Tooltip content={<CustomTooltip />} />
          )}

          {isMultiBarChart
            ? dbmsKeys.map((key) => (
                <Bar
                  key={key}
                  dataKey={`values.${key}`}
                  name={key}
                  fill={multiChartColors[key] || '#8884d8'}
                />
              ))
            : filteredData.map((item, index) => (
                <Bar
                  key={index}
                  dataKey='value'
                  name={item.db}
                  fill={item.fill}
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

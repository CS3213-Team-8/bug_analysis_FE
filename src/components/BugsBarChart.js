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
} from 'recharts'

function CustomizedTick(props) {
  const { x, y, payload } = props

  // Split the payload value into words and create tspans for each word
  const tspans = payload.value.split(' ').map((value, index) => (
    <tspan key={index} textAnchor='middle' x='0' dy={index === 0 ? 15 : 15}>
      {value}
    </tspan>
  ))

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} fill='#666' fontSize='0.9rem' fontWeight={500}>
        {tspans}
      </text>
    </g>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null

  const renameMap = {
    sqlancer: 'SQLancer',
    nonSqlancer: 'Others',
  }

  // Detect if it's the SQLancer vs Others format
  const isSqlancerVsOthers = payload.some((item) =>
    ['sqlancer', 'nonSqlancer'].includes(item.name),
  )

  const entriesToShow = isSqlancerVsOthers
    ? payload // Show all for SQLancer vs Others format
    : payload.filter((item) => item.name === label) // Filter for regular single-bar case

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
      {entriesToShow.map((item, index) => (
        <p key={index} style={{ color: item.color }}>
          {`${renameMap[item.name] || item.name}: ${item.value}`}
        </p>
      ))}
    </div>
  )
}

const BugsBarChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()

  // Color scheme for the DBMS-based multi-bar chart
  const dbmsColorScheme = {
    'TIDB': '#38B5A9', // Teal for TIDB
    'Duck DB': '#FF7043', // Coral for DuckDB
    'Cockroach DB': '#3384C4', // Light blue for CockroachDB
  }

  // Color scheme for single bar chart
  const singleBarColors = ['#FF7043', '#38B5A9', '#3384c4']

  // Color scheme for SQLancer vs Others chart (SQLancer and Others)
  const sqlancerVsOthersColors = {
    sqlancer: '#746CE3', // Purple for SQLancer found bugs
    nonSqlancer: '#E1665A', // Terracotta for non-SQLancer found bugs
  }

  // Check if the chart is a multi-bar chart based on DBMS names
  const isDbmsBasedChart = data?.some(
    (item) =>
      item?.values &&
      Object.keys(item.values).some((key) => key in dbmsColorScheme),
  )

  // Check if the chart follows the SQLancer vs Others format
  const isSqlancerVsOthersFormat = data?.some(
    (item) => 'sqlancer' in item && 'nonSqlancer' in item,
  )

  const dbmsKeys = isSqlancerVsOthersFormat
    ? Object.keys(sqlancerVsOthersColors) // SQLancer vs Others format: keys are sqlancer and nonSqlancer
    : isDbmsBasedChart
    ? Array.from(
        new Set(
          data.flatMap((item) =>
            item?.values ? Object.keys(item.values) : [],
          ) || [],
        ),
      )
    : data.map((item) => item[xAxisKey]) // Single bar chart with DBMS names

  const filteredData =
    data?.map((item, index) => {
      // Handle multi-bar chart with different DBMS name
      if (isDbmsBasedChart) {
        return {
          ...item,
          values: item.values,
        }
      }
      // Handle multi-bar with SQLancer vs Others chart format
      if (isSqlancerVsOthersFormat) {
        return {
          category: item.category,
          sqlancer: item.sqlancer,
          nonSqlancer: item.nonSqlancer,
        }
      }

      // Handle single-bar chart with different DBMS name
      return {
        db: item.db,
        value: item.values,
        fill: singleBarColors[index % singleBarColors.length],
      }
    }) || []

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height='87%'>
        <BarChart
          data={filteredData}
          height='80%'
          margin={{ top: 5, bottom: 10 }}
          {...{
            overflow: 'visible',
          }}
          barGap={isDbmsBasedChart ? 5 : isSqlancerVsOthersFormat ? 5 : -1}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} tick={<CustomizedTick />} angle={-35} />
          <YAxis />
          {isDbmsBasedChart ? (
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgb(206, 194, 194)',
                border: 'solid 1px #000',
                borderRadius: '8px',
                color: '#000',
                fontSize: '2vh',
                fontWeight: '600',
              }}
            />
          ) : (
            <Tooltip content={<CustomTooltip />} />
          )}
          {isSqlancerVsOthersFormat
            ? dbmsKeys.map((key) => (
                <Bar
                  key={key}
                  dataKey={key}
                  name={key}
                  fill={sqlancerVsOthersColors[key]}
                />
              ))
            : isDbmsBasedChart
            ? dbmsKeys.map((key) => (
                <Bar
                  key={key}
                  dataKey={`values.${key}`}
                  name={key}
                  fill={dbmsColorScheme[key] || '#8884d8'}
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
    height: '100%',
  },
  chartTitle: {
    marginBottom: '10px',
    fontSize: '0.9',
    fontWeight: 600,
  },
}))

export default BugsBarChart

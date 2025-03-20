import React from 'react'
import { makeStyles } from '@mui/styles'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from 'recharts'




const BugsLineChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()

  console.log('BugsLineChart Data:', data)

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height={200}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} >
            <Label value={xLabel} position='insideBottom' offset={-10} />
          </XAxis>
          <YAxis>
            <Label
              value={yLabel}
              angle={-90}
              position='insideLeft'
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
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
          {/* Render one line for 'opened' and one for 'closed' */}
          <Line
            type='monotone'
            dataKey='opened' // Directly access the 'opened' key from the data
            stroke='#8884d8'
            strokeWidth={2.5}
            name='Opened Issues'
          />
          <Line
            type='monotone'
            dataKey='closed' // Directly access the 'closed' key from the data
            stroke='#82ca9d'
            strokeWidth={2.5}
            name='Closed Issues'
          />
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
    fontSize: '1.rem',
    fontWeight: 600,
  },
}))

export default BugsLineChart

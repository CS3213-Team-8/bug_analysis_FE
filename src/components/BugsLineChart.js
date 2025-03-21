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

const BugsLineChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()

  console.log('BugsLineChart Data:', data)

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height={200}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} tick={<CustomizedTick />}  interval={0} >
            <Label value={xLabel} position='insideBottom' offset={-30} />
          </XAxis>
          <YAxis>
            <Label
              value={yLabel}
              angle={-90}
              position='insideLeft'
              style={{ textAnchor: 'middle'}}
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
            stroke='#7673BF'
            strokeWidth={2.5}
            name='Opened Issues'
          />
          <Line
            type='monotone'
            dataKey='closed' // Directly access the 'closed' key from the data
            stroke='#40A849'
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

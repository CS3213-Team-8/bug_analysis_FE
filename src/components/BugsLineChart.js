// import React from 'react'
// import { makeStyles } from '@mui/styles'
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   // Legend,
//   ResponsiveContainer,
//   Label,
// } from 'recharts'

// const BugsLineChart = ({ data, xAxisKey, xLabel, yLabel, chartTitle }) => {
//   const classes = useStyles()

//   const dbmsColors = {
//     TIDB: '#4DB6AC',
//     DuckDB: '#FF7043',
//     CockroachDB: '#64B5F6',
//   }

//   const dbmsKeys = Array.from(
//     new Set(data.flatMap((item) => Object.keys(item.values))),
//   )

//   const filteredData = data.map((item) => {
//     const filteredValues = Object.fromEntries(
//       Object.entries(item.values).filter(([key, value]) => value > 0),
//     )
//     return { ...item, values: filteredValues }
//   })

//   return (
//     <div className={classes.chartContainer}>
//       {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
//       <ResponsiveContainer width='100%' height={200}>
//         <LineChart data={filteredData}>
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis dataKey={xAxisKey} />
//           <YAxis>
//             <Label
//               value={yLabel}
//               offset={-1}
//               angle={-90}
//               position='left'
//               style={{ textAnchor: 'middle' }}
//             />
//           </YAxis>
//           <Tooltip />
//           {/* <Legend /> */}
//           {dbmsKeys.map((key) => (
//             <Line
//               key={key}
//               type='linear'
//               name={key}
//               dataKey={`values.${key}`}
//               stroke={dbmsColors[key] || '#8884d8'}
//               strokeWidth={2.5}
//             />
//           ))}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// const useStyles = makeStyles(() => ({
//   chartContainer: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   chartTitle: {
//     marginBottom: '10px',
//     fontSize: '1.rem',
//     fontWeight: 600,
//   },
// }))

// export default BugsLineChart

// import React from 'react'
// import { makeStyles } from '@mui/styles'
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Label,
// } from 'recharts'

// const BugsLineChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
//   const classes = useStyles()

//   const dbmsColors = {
//     TIDB: '#4DB6AC',
//     DuckDB: '#FF7043',
//     CockroachDB: '#64B5F6',
//   }

//   // Ensure data is always an array and validate structure before calling flatMap
//   const dbmsKeys = Array.from(
//     new Set(
//       data?.flatMap((item) => (item?.values ? Object.keys(item.values) : [])) ||
//         [], // Fallback to an empty array if data or item.values is undefined
//     ),
//   )

//   // Safely filter and transform data
//   const filteredData =
//     data?.map((item) => {
//       const filteredValues = item?.values
//         ? Object.fromEntries(
//             Object.entries(item.values).filter(([key, value]) => value > 0),
//           )
//         : {}
//       return { ...item, values: filteredValues }
//     }) || []

//   console.log('BugsLineChart Data:', data)

//   return (
//     <div className={classes.chartContainer}>
//       {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
//       <ResponsiveContainer width='100%' height={200}>
//         <LineChart data={filteredData}>
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis dataKey={xAxisKey} />
//           <YAxis>
//             <Label
//               value={yLabel}
//               offset={-1}
//               angle={-90}
//               position='left'
//               style={{ textAnchor: 'middle' }}
//             />
//           </YAxis>
//           <Tooltip />
//           {dbmsKeys.map((key) => (
//             <Line
//               key={key}
//               type='linear'
//               name={key}
//               dataKey={`values.${key}`}
//               stroke={dbmsColors[key] || '#8884d8'}
//               strokeWidth={2.5}
//             />
//           ))}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// const useStyles = makeStyles(() => ({
//   chartContainer: {
//     textAlign: 'center',
//     marginBottom: '20px',
//   },
//   chartTitle: {
//     marginBottom: '10px',
//     fontSize: '1rem',
//     fontWeight: 600,
//   },
// }))

// export default BugsLineChart

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
          <Tooltip />
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

// import React from 'react'
// import { makeStyles } from '@mui/styles'
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   // Legend,
//   ResponsiveContainer,
//   Label,
// } from 'recharts'

// const BugsBarChart = ({ data, xAxisKey, xLabel, yLabel, chartTitle }) => {
//   const classes = useStyles()
//   const dbmsColors = {
//     TIDB: '#4DB6AC', // Teal for TIDB
//     DuckDB: '#FF7043', // Coral for DuckDB
//     CockroachDB: '#64B5F6', // Light blue for CockroachDB
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

//   console.log(filteredData)
//   console.log(dbmsKeys)

//   // const CustomXAxisTick = ({ x, y, payload }) => {
//   //   const words = payload.value.split(' ') // Split the label into words
//   //   return (
//   //     <text x={x} y={y + 10} textAnchor='middle' fill='#666'>
//   //       {words.map((word, index) => (
//   //         <tspan key={index} x={x} dy={index === 0 ? 0 : 14}>
//   //           {word}
//   //         </tspan>
//   //       ))}
//   //     </text>
//   //   )
//   // }

//   // const CustomXAxisTick = ({ x, y, payload }) => {
//   //   const words = payload.value.split(' ') // Split label into words

//   //   return (
//   //     <g transform={`translate(${x},${y + 10})`}>
//   //       {' '}
//   //       {/* Add extra space */}
//   //       {words.map((word, index) => (
//   //         <text
//   //           key={index}
//   //           x={0}
//   //           y={index * 14}
//   //           textAnchor='middle'
//   //           fill='#666'
//   //         >
//   //           {word}
//   //         </text>
//   //       ))}
//   //     </g>
//   //   )
//   // }

//   const CustomXAxisTick = ({ x, y, payload }) => {
//     const words = payload.value.split(' ') // Split the label into words
//     return (
//       <text
//         x={x}
//         y={y + 5} // Move the label further down
//         fill='#666'
//         textAnchor='end'
//         transform={`rotate(-30, ${x}, ${y + 5})`} // Rotate at 45 degrees
//         fontSize={14}
//       >
//         {words.map((word, index) => (
//           <tspan key={index} x={x} dy={index === 0 ? 0 : 15}>
//             {word}
//           </tspan>
//         ))}
//       </text>
//     )
//   }

//   return (
//     <div className={classes.chartContainer}>
//       {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
//       <ResponsiveContainer width='100%' height={250}>
//         <BarChart data={filteredData} height='250' margin={{ top: 5, right: 30, left: 20, bottom: 15 }}>
//           <CartesianGrid strokeDasharray='3 3' />
//           <XAxis dataKey={xAxisKey} tick={{ textAnchor: 'end' }} angle={-30} />
//           <YAxis>
//             <Label
//               value={yLabel}
//               offset={-1}
//               angle={-90}
//               position='left'
//               style={{ textAnchor: 'middle' }}
//             />
//           </YAxis>
//           {/* <Tooltip /> */}
//           {/* <Legend /> */}
//           {dbmsKeys.map((key) => (
//             <Bar
//               key={key}
//               dataKey={`values.${key}`}
//               name={key}
//               fill={dbmsColors[key] || '#8884d8'}
//             />
//           ))}
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )
// }

// const useStyles = makeStyles(() => ({
//   chartContainer: {
//     textAlign: 'center',
//     // marginBottom: '20px',
//   },
//   chartTitle: {
//     marginBottom: '10px',
//     fontSize: '1.rem',
//     fontWeight: 600,
//   },
// }))

// export default BugsBarChart

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

const BugsBarChart = ({ data = [], xAxisKey, xLabel, yLabel, chartTitle }) => {
  const classes = useStyles()
  const dbmsColors = {
    TIDB: '#4DB6AC', // Teal for TIDB
    'Duck DB': '#FF7043', // Coral for DuckDB
    'Cockroach DB': '#64B5F6', // Light blue for CockroachDB
  }

  // Ensure data is always an array before calling flatMap
  const dbmsKeys = Array.from(
    new Set(
      data?.flatMap((item) => (item?.values ? Object.keys(item.values) : [])) ||
        [], // Fallback to an empty array if data or item.values is undefined
    ),
  )

  // Filter and process data safely
  const filteredData =
    data?.map((item) => {
      const filteredValues = item?.values
        ? Object.fromEntries(
            Object.entries(item.values).filter(([key, value]) => value > 0),
          )
        : {}
      return { ...item, values: filteredValues }
    }) || []

  console.log('BugsBarChart filteredData: ', filteredData)
  console.log('BugsBarChart dbmsKeys: ', dbmsKeys)
  console.log('BugsBarChart Data:', data)

  const CustomXAxisTick = ({ x, y, payload }) => {
    const words = payload.value.split(' ') // Split the label into words
    return (
      <text
        x={x}
        y={y + 5} // Move the label further down
        fill='#666'
        textAnchor='end'
        transform={`rotate(-30, ${x}, ${y + 5})`} // Rotate at 45 degrees
        fontSize={14}
      >
        {words.map((word, index) => (
          <tspan key={index} x={x} dy={index === 0 ? 0 : 15}>
            {word}
          </tspan>
        ))}
      </text>
    )
  }

  return (
    <div className={classes.chartContainer}>
      {chartTitle && <div className={classes.chartTitle}>{chartTitle}</div>}
      <ResponsiveContainer width='100%' height={250}>
        <BarChart
          data={filteredData}
          height='250'
          margin={{ top: 5, right: 30, left: 20, bottom: 15 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey={xAxisKey} tick={{ textAnchor: 'end' }} angle={-30} />
          <YAxis>
            <Label
              value={yLabel}
              offset={18}
              angle={-90}
              position='left'
              style={{ textAnchor: 'middle' }}
            />
          </YAxis>
          <Tooltip />
          {dbmsKeys.map((key) => (
            <Bar
              key={key}
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

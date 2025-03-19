import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'
import {
  fetchCategoryDistribution,
  fetchBugsDistribution,
  fetchMeanTTF,
  fetchCategoryDistributionByDBMS,
  fetchAnalysisByDBMS,
} from '../visualizationApi'

const Visualization = () => {
  const dbmsList = ['tidb', 'duck-db']
  const [chartsData, setChartsData] = useState(() => {
    const initialData = {
      allDBs: {
        categoryDistributionAcrossDBMS: [],
        bugsDistributionAcrossDBMS: [],
        meanTTFAcrossDBMS: [],
      },
    }

    dbmsList.forEach((dbmsSlug, index) => {
      const dbKey = `db${index + 1}`
      initialData[dbKey] = {
        categoryDistributionTIDB: [],
        openCloseFrequencyTIDB: [],
      }
    })

    return initialData
  })

  const [selectedTab, setSelectedTab] = useState(0)

  const fetchChartData = async () => {
    try {
      const categoryData = await fetchCategoryDistribution()
      const categoryDistributionAcrossDBMS =
        transformCategoryDistribution(categoryData)

      const bugsResults = await Promise.all(
        dbmsList.map(async (dbmsSlug) => {
          const data = await fetchBugsDistribution(dbmsSlug)
          return computeBugsDistribution(data, dbmsSlug)
        }),
      )
      const bugsDistributionAcrossDBMS = bugsResults.map((result) => ({
        db: Object.keys(result.values)[0],
        values: { values: Object.values(result.values)[0] },
      }))

      const ttfData = await fetchMeanTTF()
      const meanTTFAcrossDBMS = ttfData.map((item) => ({
        db: item.dbms_name,
        values: { values: item.mean_TTF },
      }))

      const categoryResults = await Promise.all(
        dbmsList.map(async (dbmsSlug) => ({
          dbms: dbmsSlug,
          data: await fetchCategoryDistributionByDBMS(dbmsSlug),
        })),
      )

      const analysisResults = await Promise.all(
        dbmsList.map(async (dbmsSlug) => {
          const {
            opened_per_month,
            closed_per_month,
            months_tracked,
            summary,
          } = await fetchAnalysisByDBMS(dbmsSlug)
          return {
            dbms: dbmsSlug,
            data: months_tracked.map((month, index) => ({
              month,
              opened: opened_per_month[index] || 0,
              closed: closed_per_month[index] || 0,
            })),
            summary,
          }
        }),
      )

      const dbmsMapping = {
        tidb: {
          dbKey: 'db1',
          frequencyKey: 'openCloseFrequencyTIDB',
          summaryKey: 'summaryTIDB',
          categoryKey: 'categoryDistributionTIDB',
        },
        'duck-db': {
          dbKey: 'db2',
          frequencyKey: 'openCloseFrequencyDuckDb',
          summaryKey: 'summaryDuckDB',
          categoryKey: 'categoryDistributionDuckDB',
        },
        'cockroach-db': {
          dbKey: 'db3',
          frequencyKey: 'openCloseFrequencyCockroachDb',
          summaryKey: 'summaryCockroachDB',
          categoryKey: 'categoryDistributionCockroachDB',
        },
      }

      const categoryDistributionPerDBMS = categoryResults.reduce(
        (acc, { dbms, data }) => {
          const { dbKey, categoryKey } = dbmsMapping[dbms]
          acc[dbKey] = {
            [categoryKey]: data.map((item) => ({
              category: item.category_name,
              values: { [item.dbms_name]: item.quantity },
            })),
          }
          return acc
        },
        {},
      )

      const analysisPerDBMS = analysisResults.reduce(
        (acc, { dbms, data, summary }) => {
          const { dbKey, frequencyKey, summaryKey } = dbmsMapping[dbms]
          acc[dbKey] = {
            ...acc[dbKey],
            [frequencyKey]: data,
            [summaryKey]: summary,
          }
          return acc
        },
        categoryDistributionPerDBMS,
      )

      setChartsData({
        allDBs: {
          categoryDistributionAcrossDBMS,
          bugsDistributionAcrossDBMS,
          meanTTFAcrossDBMS,
        },
        ...categoryDistributionPerDBMS,
        ...analysisPerDBMS,
      })
    } catch (error) {
      console.error('Error fetching chart data:', error)
    }
  }

  const computeBugsDistribution = (data, dbmsSlug) => {
    const totalBugs = data.reduce((total, item) => total + item.quantity, 0)
    const dbmsName = data.length > 0 ? data[0].dbms_name.trim() : dbmsSlug
    return { values: { [dbmsName]: totalBugs } }
  }

  const transformCategoryDistribution = (data) => {
    const dbmsSet = new Set(data.map((item) => item.dbms_name))
    const dbmsArray = Array.from(dbmsSet)

    return data.reduce((acc, item) => {
      const { category_name, dbms_name, quantity } = item
      let categoryEntry = acc.find((entry) => entry.category === category_name)
      if (!categoryEntry) {
        categoryEntry = { category: category_name, values: {} }
        dbmsArray.forEach((db) => (categoryEntry.values[db] = 0))
        acc.push(categoryEntry)
      }
      categoryEntry.values[dbms_name] = quantity
      return acc
    }, [])
  }

  useEffect(() => {
    fetchChartData()
  }, [])

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const tabs = [
    { label: 'ALL' },
    { label: 'TIDB' },
    { label: 'DuckDB' },
    { label: 'CockroachDB' },
  ]

  const filterDatabyTab = (data, selectedTab) => {
    if (selectedTab === 0) return data.allDBs
    const dbKey =
      selectedTab === 1
        ? 'db1'
        : selectedTab === 2
        ? 'db2'
        : selectedTab === 3
        ? 'db3'
        : ''
    return data[dbKey]
  }

  const dataToDisplay = filterDatabyTab(chartsData, selectedTab)

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
      <Box sx={{ mt: 1, mb: 1, ml: 2, }}>
        <CustomTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      </Box>
      <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} />
    </Box>
  )
}

export default Visualization

import { useEffect, useState, useCallback } from 'react'
import {
  fetchCategoryDistribution,
  fetchBugsDistribution,
  fetchMeanTTF,
  fetchCategoryDistributionByDBMS,
  fetchAnalysisByDBMS,
  fetchDBMSList,
} from '../api/visualizationApi'
import {
  computeBugsDistribution,
  transformCategoryDistribution,
} from '../utils'

const monthAbbreviations = {
  "01": "Jan",
  "02": "Feb",
  "03": "Mar",
  "04": "Apr",
  "05": "May",
  "06": "Jun",
  "07": "Jul",
  "08": "Aug",
  "09": "Sep",
  "10": "Oct",
  "11": "Nov",
  "12": "Dec"
};

const useVisualizationData = () => {
  const [tabs, setTabs] = useState([{ label: 'ALL' }])
  const [dbmsSlugs, setDbmsSlugs] = useState([])
  const [dbmsMapping, setDbmsMapping] = useState({})
  const [chartsData, setChartsData] = useState({})
  const [loading, setLoading] = useState(false)

  const fetchDBMS = useCallback(async () => {
    try {
      setLoading(true)
      const dbmsList = await fetchDBMSList()
      const mapping = dbmsList.reduce((acc, db) => {
        acc[db.slug.trim()] = db.name.trim()
        return acc
      }, {})

      setDbmsMapping(mapping)
      setDbmsSlugs(Object.keys(mapping))
      setTabs([
        { label: 'ALL' },
        ...Object.values(mapping).map((name) => ({
          label: name.replace(/\s+/g, ''),
        })),
      ])
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error fetching DBMS list:', error)
    }
  }, [])

  const fetchChartData = useCallback(async () => {
    try {
      setLoading(true)
      const categoryData = await fetchCategoryDistribution()
      const categoryDistributionAcrossDBMS =
        transformCategoryDistribution(categoryData)

      const bugsResults = await Promise.all(
        dbmsSlugs.map((dbmsSlug) =>
          fetchBugsDistribution(dbmsSlug).then(computeBugsDistribution),
        ),
      )

      const bugsDistributionAcrossDBMS = dbmsSlugs.map((dbSlug, index) => ({
        db: dbmsMapping[dbSlug] || dbSlug,
        values: bugsResults[index].values,
      }))

      const ttfData = await fetchMeanTTF()
      const meanTTFAcrossDBMS = dbmsSlugs.map((dbSlug) => ({
        db: dbmsMapping[dbSlug] || dbSlug,
        values:
          ttfData.find(
            (item) => item.dbms_name === (dbmsMapping[dbSlug] || dbSlug),
          )?.mean_TTF || 0,
      }))

      const categoryResults = await Promise.all(
        dbmsSlugs.map((dbmsSlug) =>
          fetchCategoryDistributionByDBMS(dbmsSlug).then((data) => ({
            dbms: dbmsSlug,
            data,
          })),
        ),
      )

      const analysisResults = await Promise.all(
        dbmsSlugs.map(async (dbmsSlug) => {
          const {
            opened_per_month,
            closed_per_month,
            months_tracked,
            summary,
          } = await fetchAnalysisByDBMS(dbmsSlug);
      
          return {
            dbms: dbmsSlug,
            data: months_tracked.map((month, index) => {
              const [year, monthNum] = month.split("-");
              const formattedMonth = `${monthAbbreviations[monthNum] || monthNum} ${year}`;
      
              return {
                month: formattedMonth,
                opened: opened_per_month[index] || 0,
                closed: closed_per_month[index] || 0,
              };
            }),
            summary,
          };
        })
      );
      

      const dbmsMappingKeys = dbmsSlugs.reduce((acc, dbmsSlug, index) => {
        const formattedKey = tabs[index + 1]?.label
        if (formattedKey) {
          acc[dbmsSlug] = {
            dbKey: `db${index + 1}`,
            frequencyKey: `openCloseFrequency${formattedKey}`,
            summaryKey: `summary${formattedKey}`,
            categoryKey: `categoryDistribution${formattedKey}`,
          }
        }
        return acc
      }, {})

      dbmsMappingKeys['ALL'] = {
        dbKey: 'allDBs',
        bugsKey: 'bugsDistributionAcrossDBMS',
        categoryKey: 'categoryDistributionAcrossDBMS',
        meanTTFKey: 'meanTTFAcrossDBMS',
      }

      const categoryDistributionPerDBMS = categoryResults.reduce(
        (acc, { dbms, data }) => {
          const { dbKey, categoryKey } = dbmsMappingKeys[dbms]
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
          const { dbKey, frequencyKey, summaryKey } = dbmsMappingKeys[dbms]
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
        [dbmsMappingKeys['ALL'].dbKey]: {
          [dbmsMappingKeys['ALL'].categoryKey]: categoryDistributionAcrossDBMS,
          [dbmsMappingKeys['ALL'].bugsKey]: bugsDistributionAcrossDBMS,
          [dbmsMappingKeys['ALL'].meanTTFKey]: meanTTFAcrossDBMS,
        },
        ...categoryDistributionPerDBMS,
        ...analysisPerDBMS,
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.error('Error fetching chart data:', error)
    }
  }, [dbmsSlugs, dbmsMapping])

  useEffect(() => {
    fetchDBMS()
  }, [fetchDBMS])

  useEffect(() => {
    if (dbmsSlugs.length > 0) fetchChartData()
  }, [dbmsSlugs, fetchChartData])

  return { tabs, chartsData, loading }
}

export default useVisualizationData

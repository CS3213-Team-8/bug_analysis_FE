import React, { useEffect, useState, useMemo } from 'react'
import { Box } from '@mui/material'
import CustomTabs from '../components/CustomTabs'
import ChartsGrid from '../components/ChartGrid'
import {
  fetchCategoryDistribution,
  fetchBugsDistribution,
  fetchMeanTTF,
  fetchCategoryDistributionByDBMS,
  fetchAnalysisByDBMS,
  fetchDBMSList,
} from '../visualizationApi'

const Visualization = () => {

  const [tabs, setTabs] = useState([])
  const [dbmsSlugs, setDbmsSlugs] = useState([])
  const [selectedTab, setSelectedTab] = useState(0)
  const [chartsData, setChartsData] = useState({});

  const fetchDBMS = async () => {
    try {
      const dbms = await fetchDBMSList();
      const namesArray = dbms.map(db => db.name.trim()).filter(name => name); // Remove empty names
      const slugsArray = dbms.map(db => db.slug.trim()).filter(slug => slug); // Remove empty slugs

      // Set dbmsSlugs to the slugs
      setDbmsSlugs(slugsArray);

      // Initialize tabs with 'ALL' and DBMS names
      setTabs([
        { label: 'ALL' }, // Initial tab
        ...namesArray.map((db_name) => ({ label: db_name.trim().replace(/\s+/g, '') })), // Remove spaces anywhere in the db_name
      ]);
      
    } catch (error) {
      console.error('Error fetching DBMS list:', error);
    }
  };

  const fetchChartData = async () => {
    try {
      const categoryData = await fetchCategoryDistribution()
      const categoryDistributionAcrossDBMS =
        transformCategoryDistribution(categoryData)

      const bugsResults = await Promise.all(
        dbmsSlugs.map(async (dbmsSlug) => {
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
        dbmsSlugs.map(async (dbmsSlug) => ({
          dbms: dbmsSlug,
          data: await fetchCategoryDistributionByDBMS(dbmsSlug),
        })),
      )

      const analysisResults = await Promise.all(
        dbmsSlugs.map(async (dbmsSlug) => {
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

      /* dynamic dbms mapping */
      const dbmsMapping = dbmsSlugs.reduce((acc, dbmsSlug, index) => {
        const dbKey = `db${index + 1}`;
        const formattedKey = tabs[index + 1]?.label; // Get the 'label' from tabs, skipping the "ALL" tab at index 0
      
        if (formattedKey) { // Ensure formattedKey exists before assigning
          acc[dbmsSlug] = {
            dbKey,
            frequencyKey: `openCloseFrequency${formattedKey}`,
            summaryKey: `summary${formattedKey}`,
            categoryKey: `categoryDistribution${formattedKey}`,
          };
        }
      
        return acc;
      }, {});

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

  /* Helper functions */

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
    fetchDBMS();
  }, []);
  
  useEffect(() => {
    if (dbmsSlugs.length > 0) {
      fetchChartData();
    }
  }, [dbmsSlugs]); // Runs when dbmsSlugs is updated

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue)
  }

  const filterDatabyTab = (data, selectedTab) => {
    if (selectedTab === 0) return data.allDBs
    const dbKey = `db${selectedTab}`;
    return data[dbKey];
  }

  const dataToDisplay = useMemo(() => filterDatabyTab(chartsData, selectedTab), [chartsData, selectedTab])

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column'}}>
      <Box sx={{ mt: 1, mb: 1, ml: 2, }}>
        <CustomTabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
        />
      </Box>
      <ChartsGrid data={dataToDisplay} selectedTab={selectedTab} tabs={tabs} />
    </Box>
  )
}

export default Visualization
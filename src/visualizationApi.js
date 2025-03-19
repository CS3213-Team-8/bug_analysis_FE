// import axiosInstance from './axios' // Import the axiosInstance

// const API_BASE_URL = 'https://bug-analysis-be.onrender.com/api/visualisation'

// // Fetch category distribution data
// const fetchCategoryDistribution = async () => {
//   const response = await axiosInstance.get(
//     `${API_BASE_URL}/category-quantities`,
//   )
//   return response.data
// }

// // Fetch bugs distribution data for a specific DBMS
// const fetchBugsDistribution = async (dbmsSlug) => {
//   const response = await axiosInstance.get(
//     `${API_BASE_URL}/${dbmsSlug}/category-quantities`,
//   )
//   return response.data
// }

// // Fetch mean TTF data
// const fetchMeanTTF = async () => {
//   const response = await axiosInstance.get(`${API_BASE_URL}/analysis/ttf`)
//   return response.data
// }

// // Fetch category distribution data for a specific DBMS
// const fetchCategoryDistributionByDBMS = async (dbmsSlug) => {
//   try {
//     const response = await axiosInstance.get(
//       `${API_BASE_URL}/${dbmsSlug}/category-quantities`,
//     )
//     return response.data
//   } catch (error) {
//     console.warn(`No data available for ${dbmsSlug}:`, error)
//     return []
//   }
// }

// // Fetch opened/closed per month data for a specific DBMS
// const fetchAnalysisByDBMS = async (dbmsSlug) => {
//   try {
//     const response = await axiosInstance.get(
//       `${API_BASE_URL}/${dbmsSlug}/analysis`,
//     )
//     return response.data
//   } catch (error) {
//     console.warn(`No data available for ${dbmsSlug}:`, error)
//     return {
//       months_tracked: [],
//       opened_per_month: [],
//       closed_per_month: [],
//       summary: 'No summary available.',
//     }
//   }
// }

// export {
//   fetchCategoryDistribution,
//   fetchBugsDistribution,
//   fetchMeanTTF,
//   fetchCategoryDistributionByDBMS,
//   fetchAnalysisByDBMS,
// }

import axiosInstance from './axios' // Import the axiosInstance

// Fetch category distribution data
const fetchCategoryDistribution = async () => {
  const response = await axiosInstance.get(
    '/api/visualisation/category-quantities',
  )
  return response.data
}

// Fetch bugs distribution data for a specific DBMS
const fetchBugsDistribution = async (dbmsSlug) => {
  const response = await axiosInstance.get(
    `/api/visualisation/${dbmsSlug}/category-quantities`,
  )
  return response.data
}

// Fetch mean TTF data
const fetchMeanTTF = async () => {
  const response = await axiosInstance.get('/api/visualisation/analysis/ttf')
  return response.data
}

// Fetch category distribution data for a specific DBMS
const fetchCategoryDistributionByDBMS = async (dbmsSlug) => {
  try {
    const response = await axiosInstance.get(
      `/api/visualisation/${dbmsSlug}/category-quantities`,
    )
    return response.data
  } catch (error) {
    console.warn(`No data available for ${dbmsSlug}:`, error)
    return []
  }
}

// Fetch opened/closed per month data for a specific DBMS
const fetchAnalysisByDBMS = async (dbmsSlug) => {
  try {
    const response = await axiosInstance.get(
      `/api/visualisation/${dbmsSlug}/analysis`,
    )
    return response.data
  } catch (error) {
    console.warn(`No data available for ${dbmsSlug}:`, error)
    return {
      months_tracked: [],
      opened_per_month: [],
      closed_per_month: [],
      summary: 'No summary available.',
    }
  }
}

export {
  fetchCategoryDistribution,
  fetchBugsDistribution,
  fetchMeanTTF,
  fetchCategoryDistributionByDBMS,
  fetchAnalysisByDBMS,
}

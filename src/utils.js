// Visualization Utilities
export const computeBugsDistribution = (data) => ({
  values: data.reduce((total, item) => total + item.quantity, 0),
})

export const transformCategoryDistribution = (data) => {
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

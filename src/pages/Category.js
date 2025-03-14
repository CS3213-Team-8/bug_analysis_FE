// import React from 'react';

// const Category = () => {
//   return <h1>Category Page</h1>;
// };

// export default Category;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Category = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);

  const fetchCategories = async () => {
    try {
        const response = await axios.get("https://bug-analysis-be.onrender.com/api/categories/")
        
        console.log(response)
        setCategories(response.data)
    } catch (error) {
        console.log(error)
    }
  }
  

  useEffect(() => {
    if (!categories) {
        fetchCategories()
    }

  }, [categories]);
  

  return (
    <div>
      <h1>Categories</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {categories ? (
          categories.map((category) => (
            <li key={category.id}>
              <strong>{category.category_name}</strong>: {category.category_description}
            </li>
          ))
        ) : (
          <p>No categories found.</p>
        )}
      </ul>
    </div>
  );
};

export default Category;

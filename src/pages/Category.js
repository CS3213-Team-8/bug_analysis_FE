import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box } from '@mui/material';
import MyTextField from '../component/MyTextField';

const Category = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    category_name: '',
    category_description: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCategory(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post("https://bug-analysis-be.onrender.com/api/categories/", newCategory);
      setCategories([...categories, response.data]);
      handleClose();
      setNewCategory({ category_name: '', category_description: '' });
    } catch (error) {
      console.log(error);
      setError("Failed to create category");
    }
  };

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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <h1>Categories</h1>
        <Button 
          variant="contained" 
          color="success" 
          onClick={handleOpen}
        >
          Create Category
        </Button>
      </Box>
      
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

      {/* Create Category Dialog */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="#000000">Create New Category</DialogTitle>
        <DialogContent>
          <MyTextField
            name="category_name"
            label="Category Name"
            value={newCategory.category_name}
            onChange={handleChange}
          />
          <MyTextField
            name="category_description"
            label="Category Description"
            value={newCategory.category_description}
            onChange={handleChange}
            multiline={true}
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">Cancel</Button>
          <Button onClick={handleSubmit} color="success" variant="contained">Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Category;

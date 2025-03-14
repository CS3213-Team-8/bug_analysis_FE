import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, Box, IconButton } from '@mui/material';
import MyTextField from '../component/MyTextField';
import MyIcon from '../components/icon';

const Category = () => {
  const [categories, setCategories] = useState(null);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({
    category_name: '',
    category_description: ''
  });
  const [editCategory, setEditCategory] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleCloseEdit = () => setOpenEdit(false);

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

  const handleEdit = (category) => {
    setEditCategory({...category});
    handleOpenEdit();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    // Only allow changes to fields other than category_name
    if (name !== 'category_name') {
      setEditCategory(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleEditSubmit = async () => {
    try {
      // Create a copy of editCategory with only the fields we want to update
      const updateData = {
        category_description: editCategory.category_description
        // Add any other editable fields here, but not category_name
      };
      
      const response = await axios.put(
        `https://bug-analysis-be.onrender.com/api/categories/${editCategory.slug}/`, 
        updateData
      );
      
      setCategories(categories.map(cat => 
        cat.id === editCategory.id ? response.data : cat
      ));
      handleCloseEdit();
    } catch (error) {
      console.log(error);
      setError("Failed to update category");
    }
  };

  const handleDelete = async (slug) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`https://bug-analysis-be.onrender.com/api/categories/${slug}/`);
        setCategories(categories.filter(cat => cat.slug !== slug));
      } catch (error) {
        console.log(error);
        setError("Failed to delete category");
      }
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
            <li key={category.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ flex: 1 }}>
                <strong>{category.category_name}</strong>: {category.category_description}
              </div>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton 
                  size="small" 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 }
                  }}
                  onClick={() => handleEdit(category)}
                >
                  <MyIcon variant="edit" />
                </IconButton>
                <IconButton 
                  size="small" 
                  sx={{ 
                    cursor: 'pointer',
                    '&:hover': { opacity: 0.8 }
                  }}
                  onClick={() => handleDelete(category.slug)}
                >
                  <MyIcon variant="delete" />
                </IconButton>
              </Box>
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

      {/* Edit Category Dialog */}
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle color="#000000">Edit Category</DialogTitle>
        <DialogContent>
          {editCategory && (
            <>
              <MyTextField
                name="category_name"
                label="Category Name"
                value={editCategory.category_name}
                disabled={true}
              />
              <MyTextField
                name="category_description"
                label="Category Description"
                value={editCategory.category_description}
                onChange={handleEditChange}
                multiline={true}
                rows={4}
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit} color="secondary">Cancel</Button>
          <Button onClick={handleEditSubmit} color="success" variant="contained">Save Changes</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Category;

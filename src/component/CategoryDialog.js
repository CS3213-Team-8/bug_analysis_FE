import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MyTextField from './MyTextField';

const CategoryDialog = ({ 
  open, 
  onClose, 
  title, 
  category, 
  onChange, 
  onSubmit, 
  isEdit = false 
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color="#000000">{title}</DialogTitle>
      <DialogContent>
        <MyTextField
          name="category_name"
          label="Category Name"
          value={category?.category_name || ''}
          onChange={onChange}
          disabled={isEdit}
        />
        <MyTextField
          name="category_description"
          label="Category Description"
          value={category?.category_description || ''}
          onChange={onChange}
          multiline={true}
          rows={4}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">Cancel</Button>
        <Button onClick={onSubmit} color="success" variant="contained">
          {isEdit ? 'Save Changes' : 'Submit'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CategoryDialog; 
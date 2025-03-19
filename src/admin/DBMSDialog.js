import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import MyTextField from './MyTextField';

const DBMSDialog = ({ 
  open, 
  onClose, 
  title, 
  dbms, 
  onChange, 
  onSubmit, 
  isEdit = false 
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle color="#000000">{title}</DialogTitle>
      <DialogContent>
        <MyTextField
          name="name"  // Field name for the database name
          label="DBMS Name"  // Field label for DBMS name
          value={dbms?.name || ''}  // Handle case when dbms is undefined
          onChange={onChange}  // Handle input change
          disabled={isEdit}  // Disable field when editing
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

export default DBMSDialog;

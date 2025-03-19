import React, { useEffect, useState } from 'react';
import { Button, Box, IconButton } from '@mui/material';
import MyIcon from '../components/icon';
import DBMSDialog from '../admin/DBMSDialog';  // Ensure correct component is used
import axiosInstance from '../axios';

const Dbms = () => {
    const [db, setDb] = useState([]);  // Initialize as an empty array
    const [error, setError] = useState(null);
    const [open, setOpen] = useState(false);
    const [newDb, setNewDb] = useState({ name: '' });

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewDb(prev => ({
            ...prev,
            [name]: value
        }));
        console.log(newDb);
    };

    const handleSubmit = async () => {
        try {
            console.log(newDb);
            const response = await axiosInstance.post("/api/dbms/", newDb, {
                headers: {
                    'Content-Type': 'application/json'  // Correct header
                }
            });
            setDb(prevDb => [...prevDb, response.data]);  // Update state with new DBMS
            handleClose();
            setNewDb({ name: '' });  // Reset form after submission
        } catch (error) {
            console.error("API Error:", error.response ? error.response.data : error.message);
            setError(error.response?.data?.message || "Failed to create DBMS");
        }
    };

    const handleDelete = async (slug) => {
        if (window.confirm("Are you sure you want to delete this DBMS?")) {
            try {
                await axiosInstance.delete(`/api/dbms/${slug}/`);
                setDb(prevDb => prevDb.filter(dbms => dbms.slug !== slug));
            } catch (error) {
                console.error("API Error:", error.response ? error.response.data : error.message);
                setError(error.response?.data?.message || "Failed to delete DBMS");
            }
        }
    };


    const fetchDBMS = async () => {
        try {
            const response = await axiosInstance.get("/api/dbms/");
            // Filter out any DBMS with an empty slug or name
            const filteredDb = response.data.filter(dbms => dbms.slug && dbms.name);
            setDb(filteredDb);
        } catch (error) {
            console.error("API Error:", error.response ? error.response.data : error.message);
            setError("Failed to fetch DBMS data");
        }
    };
    
    useEffect(() => {
        fetchDBMS();
    }, []);  // No need for dependency on `db`, just run on mount

    return (
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <h1>DBMS</h1>
            <Button 
              variant="contained" 
              color="success" 
              onClick={handleOpen}
            >
              Create DBMS
            </Button>
          </Box>
          
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <ul>
            {db.length > 0 ? (
              db.map((dbms) => (
                <li key={dbms.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ flex: 1 }}>
                    <strong>{dbms.name}</strong>
                  </div>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button variant="outlined" color="error"  onClick={() => handleDelete(dbms.slug)}>Delete</Button>
                  </Box>
                </li>
              ))
            ) : (
              <p>No DBMS found.</p>
            )}
          </ul>
    
          {/* Create DBMS Dialog */}
          <DBMSDialog
            open={open}
            onClose={handleClose}
            title="Create New DBMS"  // Updated title
            dbms={newDb}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isEdit={false}
          />
        </div>
      );
};

export default Dbms;

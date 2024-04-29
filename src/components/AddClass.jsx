import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function AddClass() {
  const [open, setOpen] = useState(false);
  const [className, setClassName] = useState('');
  const [uniqueCode, setUniqueCode] = useState('');
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addClass = async () => {
    try {
      const response = await fetch('http://localhost:3001/addClass', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          className,
          uniqueCode
        })
      });
      setClassName(' ');
      setUniqueCode(' ');
  
      if (response.ok) {
        // Fetch the updated class list after adding a new class
        const updatedResponse = await fetch('http://localhost:3001/fetchdata');
        const updatedData = await updatedResponse.json();
  
        // Update frontend state with the updated class list
        // Assuming you have a state variable named 'classList' to store the class list
        // setClassList(updatedData);
  
        // Close the dialog
        setOpen(false);
      } else {
        // Handle error
        console.error('Failed to add class');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <div className="text-end">
              <button type="button" className="btn btn-outline-light me-2" onClick={handleClickOpen}>Create Class</button>
            </div>
          </div>
        </div>
      </header>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Class
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <TextField
            autoFocus
            margin="dense"
            id="className"
            label="Class Name"
            type="text"
            fullWidth
            value={className}
            onChange={(e) => setClassName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="uniqueCode"
            label="Unique Code"
            type="text"
            fullWidth
            value={uniqueCode}
            onChange={(e) => setUniqueCode(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={addClass} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddClass;

import React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClassList } from '../store/ClassList_Store';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
function Header() {
  const classNameElement = useRef();
  const uniqueCodeElement = useRef();
  const joinCodeElement = useRef();
  const {addClass} = useContext(ClassList);
  const {joinClass} = useContext(ClassList);
  const [classCode, setClassCode] = useState(false)
  const handleOnclickJoin = () => {
    setClassCode(true);
  }
  const onKeydDown = (e) => {
    if(e.key==="Enter"){
      setClassCode(false);
    }
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const addClass_List = (event) => {
    event.preventDefault();
    const enteredClassName = classNameElement.current.value;
    const enteredUniqueCode = uniqueCodeElement.current.value;
    console.log('className', enteredClassName);
    setOpen(false);
    addClass(enteredClassName, enteredUniqueCode);
  }
  const joinClassdata = (event) => {
    event.preventDefault();
    const enteredUniqueCode = joinCodeElement.current.value;
    joinCodeElement.current.value = ' ';
    console.log('className', enteredUniqueCode);
    joinClass(enteredUniqueCode);
  } 
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div><header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Create Class
        </DialogTitle>
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
        <DialogContent dividers>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
    </Box>
        </DialogContent>
        <DialogActions>
          <form onSubmit={addClass_List} style={{display: "flex"}}>
          <input type="text" class="form-control" id="className"
          placeholder="Enter Class Name"
          ref={classNameElement}
          />
            <input type="text" class="form-control" id="uniqueClassCode"
          placeholder="Enter Unique Code"
          ref={uniqueCodeElement}
          />
                <button autoFocus className="btn btn-success">
                  Create
                </button>
              </form>
        </DialogActions>
      </BootstrapDialog>
        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2" onClick={handleClickOpen}>Create Class</button>
          <input type="text" class="btn btn-outline-light me-2" placeholder="Enter Class Code" aria-label="Recipient's username" aria-describedby="button-addon2"
          ref={joinCodeElement} />
          <button autoFocus className="btn btn-outline-light me-2" onClick={joinClassdata}>Join Class</button>
          <Link to="/Login">
          <button autoFocus type="button" className="btn btn-outline-light me-2">Login</button>
          </Link>
        </div>
      </div>
    </div>
  </header></div>
  )
}

export default Header
import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import ClassDetail from './ClassDetail';
import '../App.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

function ClassRoom(props) {
  const params = useParams();
  const { state } = useLocation();
  console.log(state);
  let classId = state[0].classId;
  let className = state[0].className;

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <>
    <div style={{display:"flex"}}>
      <Sidebar></Sidebar>
      <h1 style={{margin:"2%"}}>
        This is {className} classRoom {classId}
      </h1>
      <Button
      component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<CloudUploadIcon />}
      >
      Upload file
      <VisuallyHiddenInput type="file" />
    </Button>
      </div>
    </>
  );
}

export default ClassRoom;

import React, { useContext } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../App.css';

function ClassRoom(props) {
  const params = useParams();
  const { state } = useLocation();
  console.log(state);
  let classId = state[0].classId;
  let className = state[0].className;

  return (
    <div style={{display:"flex"}}>
      <Sidebar></Sidebar>
      <h1>
        This is {className} classRoom {classId}
      </h1>

    </div>
  );
}

export default ClassRoom;

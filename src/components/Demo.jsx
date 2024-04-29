import React, { useEffect, useState } from 'react'
import axios from 'axios';
function Demo() {
  const [classData,setClassData] = useState([]);

  useEffect(()=>{
    axios.get('http://localhost:3001/fetchdata')
    .then(classData=>setClassData(classData.data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
    <h2>{classData.map(item => item.className)}</h2>
    <table className="table"> </table>
    <thead></thead>
    <tbody>
      {
        classData.map(item => (
          <tr key={item._id}>
            <td>{item.className}</td>
            <td>{item.uniqueCode}</td>
          </tr>
        ))
      }
    </tbody>
    </div>
  )
}

export default Demo
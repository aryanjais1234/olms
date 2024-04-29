import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Class() {
  const [classData, setClassData] = useState([]);

  useEffect(() => {
    // Function to fetch data
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/fetchdata');
        setClassData(response.data);
      } catch (error) {
        console.log(error);
      }
};
fetchData();
// const interval = setInterval(() => {
//   fetchData();
// }, 5000);

// // Clean up interval on unmount
// return () => clearInterval(interval);
}, []);

  return (
    <div>
      {classData.map(item => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{item.className}</h5>
            <Link to={`/classroom/${item.uniqueCode}`} state={[item]}>
              <button className="btn btn-primary">Enter to ClassRoom</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Class;

import React from 'react';
import { Link } from 'react-router-dom';

function Class({classData}) {
 const classDatatoPass = {
  classId : classData.id,
  className : classData.className,
  uniqueCode : classData.uniqueCode
 };
 console.log(classDatatoPass);
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{classData.className}</h5>
          <Link to={`/classroom/${classData.uniqueCode}`}
            state={[classDatatoPass]}
          >
            <button className="btn btn-primary">Enter to ClassRoom</button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Class;
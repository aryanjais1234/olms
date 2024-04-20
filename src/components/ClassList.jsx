import React, { useContext } from 'react';
import { ClassList as ClassListData } from '../store/ClassList_Store';
import Class from './Class';

function ClassList() {
  const {classlist} = useContext(ClassListData)
  return (
    <div>
      {
        classlist.map((item) => (
          <div key={item.id}><Class classData={item}></Class></div>
        ))
      }
    </div>
  )
}

export default ClassList
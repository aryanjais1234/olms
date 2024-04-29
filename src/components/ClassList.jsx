import React, { useContext } from 'react';
import { ClassList as ClassListData } from '../store/ClassList_Store';
import Class from './Class';

function ClassList() {
  return (
    <div>
      <Class></Class>
    </div>
  )
}

export default ClassList
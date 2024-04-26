import { createContext,useState } from "react";
import { useReducer } from "react";
export const ClassList = createContext({
  classlist: [],
  addClass: () => {},
  removeClass: () => {},
  joinClass: () => {},
});

const classListReducer = (currClassData, action) => {
  let newClassData = [...currClassData]; // Always create a new array

  if (action.type === "ADD_CLASS") {
    newClassData.push(action.payload); // Push the new class to the array
    dummyClassData.push(action.payload);
  } else if (action.type === "REMOVE_CLASS") {
    newClassData = currClassData.filter(
      (classItem) => classItem.id !== action.payload.id
    );
  } else if (action.type === "JOIN_CLASS") {
    const uniqueClassCode = action.payload.uniqueClassCode;
    if (!uniqueClassCode) {
      console.log("Unique class code is empty.");
      return currClassData; // No need to continue if the unique class code is empty
    }

    console.log('action.payload.uniqueClassCode', uniqueClassCode);
    const classToAdd = dummyClassData.find(
      (classItem) => classItem.uniqueCode === uniqueClassCode
    );

    console.log("Class to add:", classToAdd);
    if (classToAdd) {
      newClassData.push(classToAdd); // Push the joined class to the array
    }
  }

  return newClassData;
}

const ClassListProvider = ({children}) => {
  const [classlist,dispatchClassList] = useReducer(classListReducer, dummyClassData);
  const addClass = (className,uniqueCode) =>{
    dispatchClassList({
      type: "ADD_CLASS",
      payload: {
        id: Math.random().toString(),
        className: className,
        uniqueCode: uniqueCode,
      },
    })
  }
  const removeClass = () =>{
    dispatchClassList({
      type: "REMOVE_CLASS",
      payload: {
        id: Math.random().toString(),
      },
    })
  }
  const joinClass = (uniqueClassCode) => {
    dispatchClassList({
      type: "JOIN_CLASS",
      payload: {
        uniqueClassCode: uniqueClassCode,
      },
    })
  }
  return (
    <ClassList.Provider value={{classlist, addClass, removeClass, joinClass}}>
      {children}
    </ClassList.Provider>
  );
};

// dummclass datalike class name and class id
const dummyClassData = [{
  id: "1",
  className: "Math",
  uniqueCode: "abc",
},
{
  id: "2",
  className: "Science",
  uniqueCode: "def",
},
{
  id: "3",
  className: "History",
  uniqueCode: "abcks",
},
{
  id: "4",
  className: "English",
  uniqueCode: "abcks",
},
]

export default ClassListProvider;
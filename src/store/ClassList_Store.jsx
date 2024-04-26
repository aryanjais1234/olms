import { createContext, useState, useEffect } from "react";
import { useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "../components/firebase"; // Import auth along with firestore

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
  } else if (action.type === "REMOVE_CLASS") {
    newClassData = currClassData.filter(
      (classItem) => classItem.id !== action.payload.id
    );
  } else if (action.type === "SET_CLASSES") {
    newClassData = action.payload; // Set the classes fetched from Firestore
  }

  return newClassData;
};

const ClassListProvider = ({ children }) => {
  const [classlist, dispatchClassList] = useReducer(
    classListReducer,
    []
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in
        try {
          // Fetch joined classes for the logged-in user from Firestore
          const classesRef = firestore.collection("users").doc(user.uid);
          const doc = await classesRef.get();

          if (doc.exists) {
            const userData = doc.data();
            dispatchClassList({ type: "SET_CLASSES", payload: userData.joinedClasses });
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        }
      } else {
        // No user is signed in
        dispatchClassList({ type: "SET_CLASSES", payload: [] }); // Clear classes if no user is signed in
      }
    });

    return () => unsubscribe(); // Cleanup function to unsubscribe from auth state changes
  }, []);

  const addClass = (className, uniqueCode) => {
    dispatchClassList({
      type: "ADD_CLASS",
      payload: {
        id: Math.random().toString(),
        className: className,
        uniqueCode: uniqueCode,
      },
    });
  };

  const removeClass = () => {
    dispatchClassList({
      type: "REMOVE_CLASS",
      payload: {
        id: Math.random().toString(),
      },
    });
  };

  const joinClass = (uniqueClassCode) => {
    dispatchClassList({
      type: "JOIN_CLASS",
      payload: {
        uniqueClassCode: uniqueClassCode,
      },
    });
  };

  return (
    <ClassList.Provider value={{ classlist, addClass, removeClass, joinClass }}>
      {children}
    </ClassList.Provider>
  );
};

export default ClassListProvider;

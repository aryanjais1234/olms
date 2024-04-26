import React, { useContext } from 'react';
import { ClassList as ClassListData } from '../store/ClassList_Store'; // Rename the imported context

function ClassListComponent() { // Rename the function to ClassListComponent
  const { classlist } = useContext(ClassListData); // Access the classlist state from the ClassList context

  // Dummy logic to determine which classes the user has joined
  // Replace this with your actual logic to fetch joined classes for the logged-in user
  const userJoinedClasses = []; // Array to store the ids of classes the user has joined

  return (
    <div>
      {/* Map over the classlist and render only the classes that the user has joined */}
      {classlist.map(classItem => {
        // Check if the current class is joined by the user
        const isJoined = userJoinedClasses.includes(classItem.id);

        // Render the class only if it's joined by the user
        if (isJoined) {
          return <div key={classItem.id}><Class classData={classItem} /></div>;
        } else {
          return null; // Return null if the class is not joined by the user
        }
      })}
    </div>
  );
}

export default ClassListComponent; // Export the renamed component

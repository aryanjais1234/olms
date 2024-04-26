// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCijFQB9TIXfeLzU-Dm_jVzwbmBv53gP_Q",
  authDomain: "classroom-61d14.firebaseapp.com",
  projectId: "classroom-61d14",
  storageBucket: "classroom-61d14.appspot.com",
  messagingSenderId: "663058408528",
  appId: "1:663058408528:web:2d73a419444219c5921d55",
  measurementId: "G-EKD1Y2SBT6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const firestore = getFirestore(app); 
// Login.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { auth } from '../components/firebase';
import { signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from 'firebase/auth';
import './login.css'; // Import your specific CSS file for this component
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleEmailPasswordLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log("Email/password login successful:", result.user);
      // Optionally, you can redirect the user after successful login
      setIsLoggedIn(true);
      // Fetch joined classes for the user and store them in application state
      fetchJoinedClasses(result.user.uid);
      navigate('/Home');
    } catch (error) {
      console.error("Email/password login error:", error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      console.log("Google login successful:", result.user);
      setIsLoggedIn(true);
      // Fetch joined classes for the user and store them in application state
      fetchJoinedClasses(result.user.uid);
      navigate('/Home');
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  // Function to fetch joined classes for the user
  const fetchJoinedClasses = async (userId) => {
    try {
      // Assuming you have a Firestore database and a collection named 'users'
      const userRef = doc(db, "users", userId);
      const userSnapshot = await getDoc(userRef);

      if (userSnapshot.exists()) {
        const userData = userSnapshot.data();
        // Assuming you have a field named 'joinedClasses' in the user's document
        const joinedClasses = userData.joinedClasses || [];
        console.log("Joined classes:", joinedClasses);
        // Here you can store the user's joined classes in your application state for later use
      } else {
        console.log("User data not found.");
      }
    } catch (error) {
      console.error("Error fetching joined classes:", error);
    }
  };

  return (
    <div>
      <Sidebar />
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleEmailPasswordLogin}>Login</button>
          <button onClick={handleGoogleLogin}>Login with Google</button>
          <p>Don't have an account? <Link to="/Register">Register here!</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;

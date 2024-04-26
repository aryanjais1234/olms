import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { auth, firestore } from '../components/firebase'; // Import firestore for database operations
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import './register.css'; // Import your specific CSS file for this component
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update user profile with display name
      await updateProfile(auth.currentUser, {
        displayName: name
      });

      // Store additional user data in Firestore (assuming your Firestore instance is named 'firestore')
      await firestore.collection('users').doc(user.uid).set({
        displayName: name,
        email: email,
        joinedClasses: [] // Initialize an empty array for joined classes
      });

      // Set token and user data in local storage
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));

      // Alert and navigate to login page
      alert("Account created successfully!");
      navigate('/Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Sidebar></Sidebar>
      <div className="register-container">
        <div className="register-form">
          <h2 className="register-heading">Register</h2>
          <input type='text' className='register-input' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" className="register-input" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" className="register-input" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className="register-button" onClick={handleRegister}>Register</button>
          <p className="register-login-link">Already have an account? <Link to='/Login'>Login here!</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;

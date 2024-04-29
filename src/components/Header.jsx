import React from 'react';
import { useState } from 'react';
import { ClassList } from '../store/ClassList_Store';
import { useContext } from 'react';
import { useRef } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';
import AddClass from './AddClass';

function Header() {
  const joinCodeElement = useRef(null);
  const { joinClassdata } = useContext(ClassList);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate('/Home');
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };
  
  return (
    <div><header className="p-3 text-bg-dark">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"></use></svg>
        </a>
        
        <div className="text-end" style={{display:"flex"}}>
          <AddClass></AddClass>
          <input type="text" class="btn btn-outline-light me-2" placeholder="Enter Class Code" aria-label="Recipient's username" aria-describedby="button-addon2"
          ref={joinCodeElement} />
          <button autoFocus className="btn btn-outline-light me-2" onClick={joinClassdata}>Join Class</button>

          {isLoggedIn ? (
            <>
            <button onClick={handleLogout}>Logout</button>
            </>
          ):(
            <>
          <Link to="/Login">
          <button autoFocus type="button" className="btn btn-outline-light me-2" >Login</button>
          </Link>
          </>
          )}
        </div>
      </div>
    </div>
  </header></div>
  )
}

export default Header
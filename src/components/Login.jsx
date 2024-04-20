import React from 'react'
import Sidebar from './Sidebar'
import '../App.css'
function Login() {
  return (
    <div style={{display:"flex"}}>
      <Sidebar></Sidebar>
      <input type="text" placeholder='Username' />
      <br/>
      <input type="password" placeholder='Password' />
      <button onClick={(e) => {alert('You clicked the login button!')}}>Login</button>
    </div>
  )
}

export default Login
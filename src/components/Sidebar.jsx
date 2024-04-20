import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div>
      <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebar" style={{width: "200px;"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
      <span class="fs-4">Classroom</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <Link to="/Home" class="nav-link active" aria-current="page">
          Home
        </Link>
      </li>
    </ul>
    <hr/>
  </div>
    </div>
  )
}

export default Sidebar
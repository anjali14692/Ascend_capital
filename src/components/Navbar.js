import React from 'react'
import { Link } from 'react-router-dom'
export default function 

() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand fs-3 fst-italic" to="/">Task Board</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2" >
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>

        {(localStorage.getItem("authToken")) ?
           <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Profile</Link>
         </li>
        : " " }

        </ul>
        {(!localStorage.getItem("authToken")) ?
        <div className='d-flex'>
          <Link className="btn bg-white text-success mx-1" to="/login">LogIn</Link>
          <Link className="btn bg-white text-success mx-1" to="/signup">SignUp</Link>
          </div>
        :
        <div>
             <Link className="btn bg-white text-success mx-1" to="/logout">Logout</Link>
        </div>
      }
    </div>
  </div>
</nav>

    </div>
  )
}

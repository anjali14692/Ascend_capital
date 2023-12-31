import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Logout() {
  return (
    <div>
      <div><Navbar/></div>
        <div className='text-center'>
        <h3>You're Successfully Logout!!</h3>
        <p>Thankyou for visiting</p>
        <Link to="/login" className=" mx-2 ml-2">Login</Link>
        </div>
    </div>
  )
}

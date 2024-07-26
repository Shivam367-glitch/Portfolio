import React from 'react'
import  "./NotFound.css"
import {Link} from "react-router-dom";
const NotFound = () => {
  return (
    <div className='container text-dark h-auto py-5 d-flex flex-column gap-4'>
      <h1 className='not_found_heading mt-2'>This page doesn't exist</h1>
      <Link to="/" className='text-decoration-none not_found_link'>Take me back to Homepage</Link>
    </div>
  )
}

export default NotFound
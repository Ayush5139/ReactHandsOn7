import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/Home.css'
function Navbar() {
  return (
    <div className='links'>
        <Link to='/' className='link'>Home</Link>
        <Link to='/Student' className='link'>Student</Link>
        <Link to='/Contact' className='link'>Contact</Link>
    </div>
  )
}

export default Navbar
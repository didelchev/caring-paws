import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { useAuthContext } from '../../contexts/AuthContext'
import Logout from '../Logout/Logout'
import './Navbar.css'

function Navbar() {

  const { isAuthenticated} = useAuthContext()
  

  return (
    <div className='navbar'>
      <Link to={"/"}>
      <span className="navbar-logo">
      <img src={assets.logo} alt="logo" className='logo-img' />
      <span className='company-name'>Caring Paws</span>
      </span>
      </Link>
        
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/petcatalog">Find a Pet</Link></li>
        {isAuthenticated ?(
          <div className='user'>
          <li><Link to="/post-pet">List a Pet</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          </div>
          )
        : <div className='guest'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </div>
        }
        
        
      </ul>
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

const Header = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
      await logout()
      navigate('/signin')
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <nav>
      <div className='logo'>
        <h3>
          <Link to='/'>
            Fit<span>Monk</span>
          </Link>
        </h3>
      </div>
      <ul>
        {currentUser ? (
          <>
            <li>
              <Link to='/notes'>Notes</Link>
            </li>
            <li>
              <Link to='/appointment'>Appointment</Link>
            </li>
            <li>
              <Link to='/tracker'>Tracker</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='#about-section'>About Us</Link>
            </li>
            <li>
              <Link to='#service-section'>Services</Link>
            </li>
            <li>
              <Link to='#solutions-section'>Solution</Link>
            </li>
          </>
        )}
      </ul>
      <div>
        {currentUser ? (
          <button variant='info' onClick={logoutHandler} className='button'>
            Log Out
          </button>
        ) : (
          <button variant='info' className='button'>
            <Link to='/signin'>Sign In</Link>
          </button>
        )}
      </div>
    </nav>
  )
}

export default Header

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../contexts/AuthContext'
import { Alert } from 'react-bootstrap'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const { signin } = useAuth()
  const navigate = useNavigate()
  const loginHandler = async (e) => {
    e.preventDefault()
    if (password.length < 6) {
      return setError('Minimum Password length is 6')
    }
    try {
      setError('')
      await signin(email, password)
      navigate('/')
    } catch (e) {
      console.log(e)
      setError('Failed to log in')
    }
  }
  return (
    <form id='submitForm'>
      <h3>Sign In</h3>
      {error && <Alert variant='danger'>{error}</Alert>}

      <div className='mb-3'>
        <label>Email address</label>
        <input
          type='email'
          className='form-control'
          placeholder='Enter email'
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          type='password'
          className='form-control'
          placeholder='Enter password'
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='d-grid'>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={loginHandler}
        >
          Sign In
        </button>
      </div>
      <p className='forgot-password text-right'>
        Not registered ? <a href='/signup'>sign up</a>
      </p>
    </form>
  )
}

export default Signin

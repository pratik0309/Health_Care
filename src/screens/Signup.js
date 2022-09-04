import React, { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom'
import { Alert } from 'react-bootstrap'
const Signup = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { signup } = useAuth()

  const registerHandler = async (e) => {
    e.preventDefault()
    if (name === '') return setError('Name cannot be empty')
    if (email === '') return setError('Email cannot be empty')
    if (password === '') return setError('Password cannot be empty')
    if (password.length < 6) {
      return setError('Minimum Password length is 6')
    }
    try {
      setError('')
      await signup(name, email, password)
      navigate('/')
    } catch (e) {
      console.log(e)
      setError('Failed to create account')
    }
  }

  return (
    <form id='submitForm' onSubmit={registerHandler} className='padding-top'>
      <h3>Sign Up</h3>
      {error && <Alert variant='danger'>{error}</Alert>}
      <div className='mb-3'>
        <label>Name</label>
        <input
          type='text'
          required
          className='form-control'
          placeholder='First name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label>Email address</label>
        <input
          type='email'
          required
          className='form-control'
          placeholder='Enter email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-3'>
        <label>Password</label>
        <input
          type='password'
          required
          className='form-control'
          placeholder='Enter password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          Sign Up
        </button>
      </div>
      <p className='forgot-password text-right'>
        Already registered? <a href='/signin'>sign in</a>
      </p>
    </form>
  )
}

export default Signup

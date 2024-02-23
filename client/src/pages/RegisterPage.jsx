import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link } from 'react-router-dom'

const RegisterPage = () => {
  return (
    <section id='register-section'>
      <h1 className='text-4xl text-center my-8 font-bold'>Welcome to Airbnb</h1>

      <form id='login-form' className=' flex flex-col mx-auto max-w-md'>
        <label htmlFor='name' className='text-xs'>
          Name
        </label>
        <input type='text' name='name' id='name' placeholder='John Doe' />
        <label htmlFor='email' className='text-xs'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='yourEmail@example.com'
        />
        <label htmlFor='password' className='text-xs'>
          Password
        </label>
        <input
          type='password'
          name='password'
          id='password'
          placeholder='Enter password'
          pattern='[A-Za-z0-9]{8,}'
        />
        <button type='submit' className='primary'>
          Login
        </button>
      </form>
      <p className='text-sm py-2  text-gray-500 text-center'>
        Already have an accoun?{' '}
        <span className='text-primary'>
          <Link to='/login'>Login</Link>
        </span>{' '}
      </p>
    </section>
  )
}

export default RegisterPage

import React from 'react'
import { Link } from 'react-router-dom'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
  return (
    <div className='mt-4 '>
      <div className=''>
        <h1 className='text-4xl text-center my-8 font-bold'>Login</h1>
        {/* ** LOGIN FORM *** */}
        <form id='login-form' className=' flex flex-col mx-auto max-w-md'>
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
          Dont have an accoun?{' '}
          <span className='text-primary'>
            <Link to='/register'>Click here</Link>
          </span>{' '}
          to register
        </p>
      </div>
    </div>
  )
}

export default LoginPage

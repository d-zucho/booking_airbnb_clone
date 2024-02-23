import React from 'react'

const LoginForm = () => {
  return (
    <>
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
    </>
  )
}

export default LoginForm

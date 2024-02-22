import React from 'react'

const LoginPage = () => {
  return (
    <div className='mt-4'>
      <h1 className='text-4xl text-center my-8 font-bold'>Login</h1>
      <form className='border border-red-200 flex flex-col mx-auto max-w-md'>
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
      </form>
    </div>
  )
}

export default LoginPage

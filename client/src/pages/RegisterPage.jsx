import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const RegisterPage = () => {
  // ** State for form inputs
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log({ data })
  }

  // ** Register User
  const registerUser = async () => {
    axios.post('/register', {
      name,
      email,
      password,
    })
  }
  // registerUser()

  return (
    <section id='register-section'>
      <h1 className='text-4xl text-center my-8 font-bold'>Welcome to Airbnb</h1>

      <form
        id='login-form'
        className=' flex flex-col mx-auto max-w-md'
        onSubmit={(e) => {
          registerUser()
          e.preventDefault()
        }}
      >
        <label htmlFor='name' className='text-xs'>
          Name
        </label>
        <input
          {...register('name', {
            required: 'This is required',
            minLength: { value: 5, message: 'Min length is 5' },
          })}
          type='text'
          name='name'
          id='name'
          placeholder='John Doe'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor='email' className='text-xs'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='yourEmail@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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

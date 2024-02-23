import React from 'react'
import { Menu, Search, User } from '../icons/icons'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='flex items-center justify-between z-50'>
        <a
          href='/'
          className='flex items-center gap-1 font-bold text-xl text-primary'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-8 h-8 -rotate-90'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5'
            />
          </svg>
          <span>airbnb</span>
        </a>

        {/* navbar middle */}
        <div className='flex  items-center gap-4 border border-gray-300 shadow-md shadow-gray-200 rounded-full px-4 py-2 leading-[2]'>
          <div>Anywhere</div>
          <div className='border-l border-gray-300 opacity-40' />
          <div>Any week</div>
          <div className='border-l border-gray-300 opacity-40' />
          <div>Add guests</div>
          <button className='p-2 rounded-full bg-primary text-white'>
            <Search />
          </button>
        </div>

        {/* navbar right */}
        <div className='flex items-center gap-4 border border-gray-300 shadow-md shadow-gray-200 rounded-full px-4 py-2'>
          {/* <div>Airbnb your home</div>
        <div className='text-gray-300 opacity-40'>|</div>
        <div>
          <Globe />
        </div>
        <div className='text-gray-300 opacity-40'>|</div> */}

          <div>
            <Menu />
          </div>
          <Link to='/login' className='overflow-hidden'>
            <User />
          </Link>
        </div>
      </header>
    </>
  )
}

export default Header

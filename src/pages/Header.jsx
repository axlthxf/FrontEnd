import React from 'react'
import Icon from '../components/Icon'


function Header() {
  return (
    <div className='flex justify-center'>
        <div className="flex items-center">
        <h1 className='text-6xl text-black font-extrabold mb-4'>TO<span className='text-6xl text-yellow-500 font-extrabold'>DO</span></h1>
      <Icon/>
      </div>
    </div>
  )
}

export default Header


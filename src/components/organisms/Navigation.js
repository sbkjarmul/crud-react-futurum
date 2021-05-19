import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'
import { IoHome } from 'react-icons/io5'
import { HiViewGridAdd } from 'react-icons/hi'

const Navigation = () => {
  return (
    <div className='navbar' >
      <Link className='navbar__link' to='/'>
        <IoHome />
      </Link>
      <Link className='navbar__link' to='/add'>
        <HiViewGridAdd />
      </Link>
    </div>
  )
}

export default Navigation;
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../App.css'
import { IoHome } from 'react-icons/io5'
import { HiViewGridAdd } from 'react-icons/hi'

const Navigation = () => {
  return (
    <div className='navbar' >
      <NavLink className='navbar__link' exact activeClassName="navbar__link--active" to='/'>
        <IoHome />
      </NavLink>
      <NavLink className='navbar__link' exact activeClassName="navbar__link--active" to='/add'>
        <HiViewGridAdd />
      </NavLink>
    </div>
  )
}

export default Navigation;
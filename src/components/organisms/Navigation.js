import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const Navigation = () => {
  return (
    <div className='navbar' >
      <Link className='navbar__link' to='/'>Home</Link>
      <Link className='navbar__link' to='/add'>Add</Link>
    </div>
  )
}

export default Navigation;
import React from 'react'
import '../../App.css'

const Button = ({ children }) => {
  return (
    <button className="form__button form__button--primary" type="submit">{children}</button>
  )
}

export default Button
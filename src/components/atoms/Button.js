import React from 'react'
import '../../App.css'

const Button = ({ buttonSize, children }) => {
  const buttonClass = buttonSize === 'primary' ? 'form__button form__button--primary' : 'form__button form__button--primary form__button--small';
  return (
    <button className={buttonClass} type="submit">{children}</button>
  )
}

export default Button
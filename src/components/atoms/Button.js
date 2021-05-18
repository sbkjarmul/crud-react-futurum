import React from 'react'
import '../../App.css'

const Button = ({ buttonSize, buttonType, children }) => {
  const buttonClass = buttonSize === 'primary' ? 'form__button form__button--primary' : 'form__button form__button--primary form__button--small';
  return (
    <button className={buttonClass} type={buttonType}>{children}</button>
  )
}

export default Button
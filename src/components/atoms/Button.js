import React from 'react'
import '../../App.css'

const Button = ({ buttonSize, buttonType, handleButtonClick, children }) => {
  const checkButtonType = (e) => {
    if (buttonType === 'delete') {
      handleButtonClick();
    } 
  }

  const addButtonClass = () => {
    if (buttonSize === 'primary') {
      return 'form__button form__button--primary';
    }

    if (buttonSize === 'small') {
      return 'form__button form__button--primary form__button--small';
    }
  }

  return (
    <button 
      className={addButtonClass()} 
      onClick={checkButtonType} 
      type={buttonType}>{children}
    </button>
  )
}

export default Button
import React from 'react'
import '../../App.css'

const Form = ({ children, onSubmit }) => {
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        {children}
      </form>
    </div>
  )
}

export default Form

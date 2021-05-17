import React from 'react'
import '../../App.css'

const Form = ({children}) => {
  return (
    <div>
      <form className="form">
        {children}
      </form>
    </div>
  )
}

export default Form
